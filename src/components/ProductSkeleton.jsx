const ProductSkeleton = () => {
    return (
        <div className="animate-pulse bg-white rounded-2xl overflow-hidden shadow">

            <div className="h-60 bg-gray-300" />

            <div className="p-4">

                <div className="h-4 bg-gray-300 rounded mb-3" />

                <div className="h-6 bg-gray-300 rounded mb-3" />

                <div className="h-4 bg-gray-300 rounded w-2/3" />

            </div>

        </div>
    );
};

export default ProductSkeleton;