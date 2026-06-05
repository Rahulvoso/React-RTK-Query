import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaReact,
} from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">

            <div className="max-w-7xl mx-auto px-4 py-10">

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Logo */}
                    <div>
                        <h2 className="text-2xl font-bold text-blue-600">
                            RTK Store
                        </h2>

                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            Modern E-Commerce UI built with
                            React, RTK Query and Tailwind CSS.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-500"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-500"
                                >
                                    Products
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-500"
                                >
                                    Categories
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-500"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="
      w-10 h-10
      rounded-full
      flex items-center justify-center
      bg-gray-100
      dark:bg-slate-700
      text-gray-700
      dark:text-white
      hover:scale-110
      transition-all
    "
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="#"
                                className="
      w-10 h-10
      rounded-full
      flex items-center justify-center
      bg-gray-100
      dark:bg-slate-700
      text-blue-600
      hover:scale-110
      transition-all
    "
                            >
                                <FaLinkedin size={18} />
                            </a>

                            <a
                                href="#"
                                className="
      w-10 h-10
      rounded-full
      flex items-center justify-center
      bg-gray-100
      dark:bg-slate-700
      text-sky-500
      hover:scale-110
      transition-all
    "
                            >
                                <FaTwitter size={18} />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {year} RTK Store. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-3 md:mt-0">
                        Built with
                        <FaReact className="text-sky-500" />
                        React + Learn RTK Query
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;