import Link from 'next/link';
import Image from 'next/image';

export default function Donate() {
    return (
        <main className="p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">
                LYFF Champions - Donate Today
            </h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    With your generous support, we can make a difference in the lives of felines in need.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Love Your Feral Felines is a registered 501(c)3 tax exempt organization. All donations are tax deductible!
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Tax ID: 46-4415187
                </p>
            </section>


            <section className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Donate Online
                    </h3>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=T2623JGCVG4YW" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#be1e2d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300">
                            Donate Online
                        </button>
                    </Link>
                </div>

                <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                        Mail in your Donation
                    </h4>
                    <p className="text-gray-700 leading relaxed">
                        Love Your Feral Felines<br />
                        P.O. Box 1333<br />
                        Bonsall, CA 92003
                    </p>
                </div>
            </section>

            <section className="mb-6">
                <h5 className="text-2xl font-semibold text-gray-800 mb-4">
                    Other Ways to Support LYFF
                </h5>

                <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-auto">
                        <Image
                            src="/donate-image.jpg"
                            alt="Supplies donated to LYFF"
                            width={400}
                            height={700}
                        />
                    </div>

                <div className="text-sm text-gray-600 leading-relaxed max-w-sm">
                    <h6 className="text-lg font-semibold text-gray-800 mb-2">
                        Items We Need Most
                    </h6>
                    <ul className="list-disc list-inside mb-4">
                        <li>Iams Adult or Kitten</li>
                        <li>Chicken Pate Wet food</li>
                        <li>Purina Kitten Dry Food</li>
                        <li>Clumping Litter</li>
                        <li>Cat Toys</li>
                        <li>Cat Scratchers</li>
                        <li>Litter Pans</li>
                        <li>Chewy & Amazon Gift Cards</li>
                    </ul>
                    <p className="font-bold text-gray-700">
                        Items can be dropped off at our Adoption Center
                    </p>
                    <p className="font-bold text-gray-700">
                        1929 West Vista Way, Suite C<br />
                        Vista, CA 92083
                    </p>
                </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Wish Lists
                    </h1>
                    <ul className="list-disc list-inside mb-4">
                        <Link href="https://www.amazon.com/gp/registry/wishlist/3U4JTUO35FV4/ref=nav_wishlist_lists_1"
                        className="font-bold text-lyff-red hover:text-black transition-colors duration-200">
                            <li>LYFF Foster & Adoption Program Amazon Wishlist</li>
                        </Link>
                        <Link href="https://www.amazon.com/gp/registry/wishlist/3JOXLVT9ZIR88"
                        className="font-bold text-lyff-red hover:text-black transition-colors duration-200">
                            <li>Barn Program Amazon Wishlist</li>
                        </Link>
                    </ul>
                    <p>
                        Thank you to everyone who contributes to our cause! All donations go directly to helping felines in need.
                    </p>
                </div>
            </section>

        </main>
    )
}
