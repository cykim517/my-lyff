import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#555555] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Main Phone:</span> (760) 542-8509</li>
            <li><span className="font-semibold">Foster and Adoption Program Phone:</span> (760) 689-2216</li>
            <li><span className="font-semibold">Love your Fixed Felines Phone:</span> (442) 777-2065</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Help LYFF</h4>
          <Link href="http://localhost:3001/Donate" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#be1e2d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300">
                            Donate Today!
                        </button>
            </Link>

        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
