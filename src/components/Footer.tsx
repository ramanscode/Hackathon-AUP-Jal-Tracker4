
import { Link } from "react-router-dom";
import { Droplet, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Droplet className="h-8 w-8 text-jalblue-500" />
              <span className="ml-2 text-xl font-display font-bold text-jalblue-600">
                JalTrackers
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Smart Water Usage Monitoring for a Sustainable Future
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-jalblue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-jalblue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-jalblue-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-jalblue-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Features", "Technology", "Impact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-jalblue-500"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {["Research", "Blog", "FAQ", "Privacy Policy", "Terms of Service"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-gray-600 hover:text-jalblue-500"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-jalblue-500 mr-2" />
                <a href="mailto:info@jaltrackers.com" className="text-gray-600 hover:text-jalblue-500">
                  info@jaltrackers.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-jalblue-500 mr-2" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-jalblue-500">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JalTrackers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
