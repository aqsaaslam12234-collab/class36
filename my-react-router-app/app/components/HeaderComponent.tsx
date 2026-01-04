const Header = () => {
  return (
    <header className="bg-gradient-to-r from-violet-600 via-violet-500 to-red-500 shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer group">
          <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-6 h-6 text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="ml-3 text-2xl font-bold tracking-wide drop-shadow-md">
            Digital Hub
          </span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-8">
          <a className="text-white hover:text-pink-600 cursor-pointer transition-all duration-200 font-medium hover:scale-105 transform">
            Home
          </a>
          <a className="text-white hover:text-pink-600 cursor-pointer transition-all duration-200 font-medium hover:scale-105 transform">
           About
          </a>
          <a className="text-white hover:text-pink-600 cursor-pointer transition-all duration-200 font-medium hover:scale-105 transform">
            Services
          </a>
          <a className="text-white hover:text-pink-600 cursor-pointer transition-all duration-200 font-medium hover:scale-105 transform">
            Contact
          </a>
        </nav>

        <button className="inline-flex items-center bg-white text-pink-600 border-0 py-3 px-7 focus:outline-none hover:bg-yellow-300 hover:text-purple-700 rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-4 md:mt-0">
          Get Started
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
