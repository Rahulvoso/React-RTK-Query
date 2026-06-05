const PriceFilter = ({
    priceFilter,
    setPriceFilter,
}) => {
    return (
        <select
            value={priceFilter}
            onChange={(e) =>
                setPriceFilter(e.target.value)
            }
            className="
        px-4
        py-3
        rounded-xl
        border
        border-gray-300
        dark:border-slate-600
        bg-white
        dark:bg-slate-800
        text-gray-800
        dark:text-white
        min-w-45
      "
        >
            <option value="">
                Sort By Price
            </option>

            <option value="low">
                Low To High
            </option>

            <option value="high">
                High To Low
            </option>
        </select>
    );
};

export default PriceFilter;