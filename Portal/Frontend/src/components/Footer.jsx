import React from "react";

const Navbar = () => {
  return (
    <div>
      <footer className="bg-gray-200 text-gray-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2023 Your Company Name</p>
          <ul className="flex items-center">
            <li className="mr-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
