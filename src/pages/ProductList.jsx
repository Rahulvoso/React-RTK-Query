import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PriceFilter from "../components/PriceFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ProductSkeleton from "../components/ProductSkeleton";

import {
    useGetProductsQuery,
    useSearchProductsQuery,
} from "../services/productApi";
import Footer from "../components/Footer";

const ProductList = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch] =
        useDebounce(search, 500);

    const [category, setCategory] =
        useState("all");

    const [priceFilter, setPriceFilter] =
        useState("");

    const [
        selectedProduct,
        setSelectedProduct,
    ] = useState(null);

    const [darkMode, setDarkMode] =
        useState(
            localStorage.getItem("theme") ===
            "dark"
        );

    // Main Product API
    const {
        data,
        isLoading,
        isFetching,
        isError,
    } = useGetProductsQuery();

    // Search Product API
    const {
        data: searchData,
        isFetching: searchFetching,
    } = useSearchProductsQuery(
        debouncedSearch,
        {
            skip: !debouncedSearch.trim(),
        }
    );

    // Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add(
                "dark"
            );

            localStorage.setItem(
                "theme",
                "dark"
            );
        } else {
            document.documentElement.classList.remove(
                "dark"
            );

            localStorage.setItem(
                "theme",
                "light"
            );
        }
    }, [darkMode]);

    // Products Source
    const products = useMemo(() => {
        return debouncedSearch.trim()
            ? searchData?.products || []
            : data?.products || [];
    }, [
        data,
        searchData,
        debouncedSearch,
    ]);

    // Category + Price Filter
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Category
        if (category !== "all") {
            result = result.filter(
                (product) =>
                    product.category === category
            );
        }

        // Price Sort
        if (priceFilter === "low") {
            result.sort(
                (a, b) => a.price - b.price
            );
        }

        if (priceFilter === "high") {
            result.sort(
                (a, b) => b.price - a.price
            );
        }

        return result;
    }, [
        products,
        category,
        priceFilter,
    ]);

    // First Page Loading
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-slate-900">

                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <div className="max-w-7xl mx-auto px-4 py-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {[...Array(8)].map(
                            (_, index) => (
                                <ProductSkeleton
                                    key={index}
                                />
                            )
                        )}

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 transition-colors duration-300">

            {/* Header */}
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className="max-w-7xl mx-auto px-4 py-6">

                {/* Search + Price Filter */}
                <div className="flex flex-col lg:flex-row gap-4 mb-6">

                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <PriceFilter
                        priceFilter={priceFilter}
                        setPriceFilter={
                            setPriceFilter
                        }
                    />

                </div>

                {/* Category Filter */}
                <div className="mb-6">

                    <CategoryFilter
                        category={category}
                        setCategory={setCategory}
                    />

                </div>

                {/* Product Header */}
                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Products
                    </h2>

                    <span className="text-gray-500 dark:text-gray-300">
                        {filteredProducts.length}
                        {" "}
                        Items
                    </span>

                </div>

                {/* Search Loader */}
                {(isFetching ||
                    searchFetching) && (
                        <div className="mb-5">

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">

                                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />

                                Loading Products...

                            </div>

                        </div>
                    )}

                {/* Error */}
                {isError && (
                    <div className="bg-red-100 text-red-600 p-4 rounded-xl">
                        Failed to load products.
                    </div>
                )}

                {/* Product Grid */}
                {!isError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {filteredProducts.length >
                            0 ? (
                            filteredProducts.map(
                                (product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onView={
                                            setSelectedProduct
                                        }
                                    />
                                )
                            )
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-300">
                                No Products Found
                            </div>
                        )}

                    </div>
                )}

            </div>

            {/* Product Details Modal */}
            <ProductModal
                product={selectedProduct}
                onClose={() =>
                    setSelectedProduct(null)
                }
            />

            <Footer />


        </div>
    );
};

export default ProductList;