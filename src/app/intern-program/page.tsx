import Link from "next/link";
import Image from "next/image";

export default function InternProgram() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">Intern Program</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#5b7e95]">Summer Turtle Internship Program</h2>
              <p className="mb-6 text-gray-700">
                The Dewees Island Conservancy offers a summer internship program focused on
                 sea turtle conservation. Interns gain valuable hands-on experience
                while contributing to meaningful conservation work.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/banner.png"
                alt="Turtle conservation efforts"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
