import React from "react";

export function Footer() {

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Newz - Stay Updated with Latest News</h5>
        
        {/* Navigation Links */}
        <div className="mb-3">
          <a href="#" className="text-light mx-3 text-decoration-none">Home</a>
          <a href="#" className="text-light mx-3 text-decoration-none">About</a>
          <a href="#" className="text-light mx-3 text-decoration-none">Contact</a>
          <a href="#" className="text-light mx-3 text-decoration-none">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="mb-3">
          <a href="#" className="text-light mx-2">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0">&copy; {new Date().getFullYear()} Newz. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

