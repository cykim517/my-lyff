'use client';

export default function Navbar() {
    const sections = [
        'Home',
        'Donate',
        'Adopt',
        'Cuddle Hours',
        'Barn Cats',
        'Our Services',
        'Volunteer',
        'Resources',
        'About',
        'Shop',
        'Blog',
    ];

    return (
        <nav className="text-white shadow-md" style={{ backgroundColor: '#be1e2d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="grid grid-cols-11 h-16 items-center text-center">
            {sections.map((section, index) => (
              <li key={index} className="font-extrabold hover:underline cursor-pointer">
                {section}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
}
