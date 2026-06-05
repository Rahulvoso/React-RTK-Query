const categories = [
    "all",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
];

const CategoryFilter = ({
    category,
    setCategory,
}) => {
    return (
        <div className="flex flex-wrap gap-3">

            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() =>
                        setCategory(cat)
                    }
                    className={`
          px-4
          py-2
          rounded-full
          transition

          ${category === cat
                            ? "bg-blue-600 text-white"
                            : `
                bg-white
                dark:bg-slate-800
                border
                border-gray-300
                dark:border-slate-600
                text-gray-700
                dark:text-white
              `
                        }
          `}
                >
                    {cat}
                </button>
            ))}

        </div>
    );
};

export default CategoryFilter;