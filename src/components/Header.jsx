import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({
    darkMode,
    setDarkMode,
}) => {
    return (
        <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    RTK Store
                </h2>

                <button
                    onClick={() =>
                        setDarkMode((prev) => !prev)
                    }
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white"
                >
                    {darkMode ? (
                        <>
                            <FaSun />
                            Light
                        </>
                    ) : (
                        <>
                            <FaMoon />
                            Dark
                        </>
                    )}
                </button>

            </div>

        </header>
    );
};

export default Header;