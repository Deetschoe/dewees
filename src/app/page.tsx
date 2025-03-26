import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Dewees Island wetlands"
            fill
            priority
            className="object-cover opacity-80" // Reduced opacity here
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-md lg:max-w-xl bg-black/50 p-6 backdrop-blur-sm">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Helping Nature Thrive
              </h1>
              <p className="text-base md:text-lg text-white mb-6">
                The Dewees Island Conservancy protects our barrier island wetlands and maritime forests,
                providing a way to help nature thrive.
              </p>
              <Link
                href="https://checkout.square.site/merchant/ML03XSQFYMM2D/checkout/RE7U5Z25C6EQCBNZBU4NPQ4J"
                className="inline-block px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#5b7e95]">Our Mission</h2>
          <div className="w-24 h-1 bg-[#5b7e95] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg">
            The Dewees Island Conservancy is a 501(c)3 corporation focusing on habitat restoration.
            We help nature thrive by protecting and restoring the natural environment within
            conservation areas. We have established partnerships with the US Fish and Wildlife
            Service, Ducks Unlimited, Audubon South Carolina, and several other organizations
            to enhance wetlands.
          </p>
        </div>
      </section>

      {/* Wide Photo Section */}
      <section className="w-full h-72 md:h-96 relative overflow-hidden">
        <Image
          src="/bird.jpg"
          alt="Dewees Island panoramic view"
          fill
          unoptimized
          className="object-cover"
        />
      </section>


      {/* Call to Action */}
      <section className="py-12 bg-[#5b7e95] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Support Our Conservation Efforts</h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Your donation helps us protect and preserve the natural environment of Dewees Island for future generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://checkout.square.site/merchant/ML03XSQFYMM2D/checkout/RE7U5Z25C6EQCBNZBU4NPQ4J"
              className="px-6 py-3 bg-white text-[#5b7e95] font-medium rounded hover:bg-gray-100 transition-colors"
              rel="noopener noreferrer"
            >
              Donate Now
            </Link>
            <Link
              href="/intern-program"
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              Intern Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
