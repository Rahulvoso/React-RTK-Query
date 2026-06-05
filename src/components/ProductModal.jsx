import { FaTimes } from "react-icons/fa";

const ProductModal = ({
    product,
    onClose,
}) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">

            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden">

                <div className="flex justify-between p-5 border-b dark:border-slate-700">

                    <h2 className="font-bold text-xl text-gray-800 dark:text-white">
                        Product Details
                    </h2>

                    <button onClick={onClose}>
                        <FaTimes className="dark:text-white" />
                    </button>

                </div>

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-72 object-cover"
                />

                <div className="p-5">

                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {product.title}
                    </h3>

                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {product.description}
                    </p>

                </div>

            </div>

        </div>
    );
};

export default ProductModal;