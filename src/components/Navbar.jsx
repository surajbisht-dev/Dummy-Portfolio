import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-[#0d1117] text-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo or Name */}
        <div className="font-semibold text-lg tracking-widest">
          TETIANA ZAPOROZHETS
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase">
          <a href="#services" className="hover:text-accent transition">
            Services
          </a>
          <a href="#technologies" className="hover:text-accent transition">
            Technologies
          </a>
          <a href="#portfolio" className="hover:text-accent transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </nav>

        {/* Language Toggle (static icon as in image) */}
        <button className="border border-white rounded-full px-2 py-1 text-xs">
          ENG
        </button>
      </div>
    </header>
  );
};

export default Navbar;
