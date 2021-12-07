import React from "react";


const Navbar = () => {
  return (
    <header>
      <div className="Nav">
        <div className="Tech">
          <h2>Tech Blog</h2>
        </div>
        <div className="our">
          <a href="Home"> Home</a>
          <a href="About Us"> About Us</a>
          <button>New Blog</button>
          <a href="Contact"> Contact</a>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;
