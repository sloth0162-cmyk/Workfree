import { useState } from "react";

function Navbar() {

    // Hello buuds i will create a togglemenu jo apne menu ko click karne per kholta ye na liek mobile mai kam ayega
    const [togglemenu, setToggleMenu] = useState(false);
    const handdletoggle = () => {
        setToggleMenu(!togglemenu)
    }

    // Abhi profile ko toggle karne ke liye
    const [toggleProfile, setToggleProfile] = useState(false);
    const handdleToggleProfile = () => {
        setToggleMenu(!toggleProfile)
    }
    return (
        <nav className="relative bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                            onClick={() => setToggleMenu(prev => !prev)}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span

                            ></span>

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="size-6"

                            >
                                <path
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                            </svg>

                        </button>
                        {togglemenu && (
                            <div className="sm:hidden bg-gray-800 border-t border-gray-700 mt-50 absolute left-0">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    <a
                                        href="#"
                                        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                    >
                                        Team
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                    >
                                        Calendar
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Logo + Links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                                className="h-8 w-auto"
                            />
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                >
                                    Team
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                >
                                    Calendar
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">

                        {/* Notification */}
                        <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                        >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="size-6"
                            >
                                <path
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Profile */}
                        <div className="relative ml-3">
                            <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                onClick={() => toggleProfile(prev => !prev)}
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                                    alt=""
                                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                                />
                            </button>
                            {toggleProfile && (
                                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Your profile
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Settings
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Sign out
                                    </a>
                                </div>


                            )}

                            {/* Dropdown (static for now) i have removed the static one*/}

                        </div>
                    </div>
                </div>
            </div>


        </nav >
    );
}

export default Navbar;