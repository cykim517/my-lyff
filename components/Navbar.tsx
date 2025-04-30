import Link from 'next/link'

export default function Navbar() {
    const sectionsMap = {
      'Home': '/',
      'Donate': '/Donate',
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
          <ul className="grid grid-cols-11 h-16 items-center text-center">
            {Object.entries(sectionsMap).map(([section, route]) => (
              <li key={section} className="font-extrabold hover:underline cursor-pointer">
                <Link href={`${route}`}>{section}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
}
