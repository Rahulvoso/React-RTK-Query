import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
                type="text"
                value={search}
                placeholder="Search Products..."
                onChange={(e) => setSearch(e.target.value)}
                className="
          w-full
          pl-12
          pr-4
          py-3
          rounded-xl
          border
          border-gray-300
          dark:border-slate-600
          bg-white
          dark:bg-slate-800
          text-gray-800
          dark:text-white
        "
            />
        </div>
    );
};

export default SearchBar;