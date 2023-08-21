"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer className="bg-[#394667] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p>
              We're here to simplify restaurant reservations. Experience the
              best dining with our app.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@theurbanspoon.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <p>
              Stay updated on social media for exciting offers and restaurant
              news.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-white">
                <FacebookIcon fontSize="large" />
              </a>
              <a href="#" className="text-white">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="#" className="text-white">
                <TwitterIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-[#15244b] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-reg text-gray-500">
            &copy; {new Date().getFullYear()} TheUrbanSpoon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
