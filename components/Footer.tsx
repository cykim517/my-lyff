import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#555555] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-semibold mb-2">Contact Us</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Main Phone:</span> (760) 542-8509
            </li>
            <li>
              <span className="font-semibold">
                Foster and Adoption Program Phone:
              </span>{" "}
              (760) 689-2216
            </li>
            <li>
              <span className="font-semibold">
                Love your Fixed Felines Phone:
              </span>{" "}
              (442) 777-2065
            </li>
          </ul>

          <div className="mt-4 pl-0">
            <Link href="/contact">
              <span className="text-white text-lg font-bold underline">
                Connect With Us
              </span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-2">Help LYFF</h4>
          <Link
            href="http://localhost:3001/Donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#be1e2d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300">
              Donate Today!
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col">
            <h4 className="text-2xl font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/Loveyourferalfelines"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#be1e2d] hover:bg-red-700 rounded-full text-white text-xl">
                  <FaFacebookF />
                </div>
              </a>
              <a
                href="https://www.instagram.com/loveyourferalfelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#be1e2d] hover:bg-red-700 rounded-full text-white text-xl">
                  <FaInstagram />
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UColPwovp_nSh6BLpDBGC3CA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#be1e2d] hover:bg-red-700 rounded-full text-white text-xl">
                  <FaYoutube />
                </div>
              </a>
            </div>
            <div className="w-auto mt-6">
              <Image
                src="/greatnonprofits.png"
                alt="Great Non Profits logo"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="flex items-center">
            <p className="text-white text-base leading-relaxed mt-25">
              LYFF is a qualified
              <br />
              501(C)(3) organization
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
