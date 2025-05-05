"use client";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      onClick={toggle}
      className="w-8 h-8 relative z-50 flex flex-col justify-center items-center"
      aria-label="Toggle Menu"
    >
      {/* Top line */}
      <span
        className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "rotate-45 top-1/2" : "top-[8px]"
        }`}
      />
      {/* Middle line */}
      <span
        className={`absolute h-[2px] w-4 bg-white rounded transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "opacity-0 scale-x-0" : "top-[14px]"
        }`}
      />
      {/* Bottom line */}
      <span
        className={`absolute h-[2px] w-5 bg-white rounded transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "-rotate-45 top-1/2" : "top-[20px]"
        }`}
      />
    </button>
  );
}
