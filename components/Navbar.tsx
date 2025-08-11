'use client';

import Link from 'next/link'
// import { useState } from 'react';

export default function Navbar() {
    const sectionsMap = {
      'Home': '/',
      'Donate': {
        main: '/Donate',
        subItems: {
          'Virtual Kitten Shower': '/Donate/VirtualKittenShower',
        }
      },
      'Adopt': '/Adopt',
      'Cuddle Hours': '/CuddleHours',
      'Barn Cats': '/BarnCats',
      'Our Services': '/OurServices',
      'Volunteer': '/Volunteer',
      'Resources': '/Resources',
      'About': '/About',
      'Shop': '/Shop',
      'Blog': '/Blog',
    }

  return (
    <nav className="text-white shadow-md" style={{ backgroundColor: '#be1e2d' }}>
      <div className="max-w-7xl mx-auto px-4">
        <ul className="grid grid-cols-11 h-16 items-center text-center relative">
          {Object.entries(sectionsMap).map(([section, route]) => (
            <li key={section} className="group relative font-extrabold cursor-pointer">
              {typeof route === 'string' ? (
                <Link href={route} className="hover:underline">
                  {section}
                </Link>
              ) : (
                <>
                  <Link href={route.main} className="hover:underline">
                    {section}
                  </Link>
                  <ul className="absolute hidden group-hover:block top-full left-0 bg-white text-black min-w-max shadow-md z-10">
                    {Object.entries(route.subItems).map(([subSection, subRoute]) => (
                      <li key={subSection} className="px-4 py-2 hover:bg-gray-200">
                        <Link href={subRoute}>{subSection}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
