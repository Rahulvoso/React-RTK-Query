import {
    FaStar,
    FaEye,
} from "react-icons/fa";

const ProductCard = ({
    product,
    onView,
}) => {
    const discountedPrice = (
        product.price -
        (product.price *
            product.discountPercentage) /
        100
    ).toFixed(2);

    return (
        <div className="
      bg-white
      dark:bg-slate-800
      rounded-2xl
      overflow-hidden
      shadow-sm
      hover:shadow-xl
      transition
      border
      border-gray-200
      dark:border-slate-700
    ">

            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-60 object-cover"
            />

            <div className="p-4">

                <p className="text-blue-500 text-sm">
                    {product.category}
                </p>

                <h2 className="font-bold text-lg mt-2 text-gray-800 dark:text-white">
                    {product.title}
                </h2>

                <p className="text-gray-500 dark:text-gray-300">
                    {product.brand}
                </p>

                <div className="flex items-center gap-2 mt-3">

                    <FaStar className="text-yellow-500" />

                    <span className="dark:text-white">
                        {product.rating}
                    </span>

                </div>

                <div className="mt-4">

                    <span className="text-2xl font-bold text-gray-800 dark:text-white">
                        ₹{discountedPrice}
                    </span>

                    <span className="ml-2 line-through text-gray-400">
                        ₹{product.price}
                    </span>

                </div>

                <button
                    onClick={() => onView(product)}
                    className="mt-4 w-full bg-black dark:bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"
                >
                    <FaEye />
                    View Details
                </button>

            </div>

        </div>
    );
};

export default ProductCard;