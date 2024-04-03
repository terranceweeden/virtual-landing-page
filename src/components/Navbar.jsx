import { Menu, X } from "lucide-react";
import logo from "../assets/150x150_logot_1.png";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const toggleNav = () => {
    setOpenMobile(!openMobile);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Evolvifi Logo" />
            <span className="text-xl tracking-tight">Virtual Landing Page</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>{openMobile ? <X /> : <Menu />}</button>
          </div>
        </div>
        {openMobile && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((navItem, index) => (
                <li key={index} className="py-4">
                  <a href={navItem.href}>{navItem.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
