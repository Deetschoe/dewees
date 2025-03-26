import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">About</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3 text-[#5b7e95]">Vision</h2>
              <p className="text-gray-700">
                To help nature thrive by protecting and restoring the natural environment within our conservation areas.
              </p>
            </div>

            <div className="">
              <iframe
                src="https://www.youtube.com/embed/H0tC8rXmnhk"
                title="Dewees Island Conservancy Video"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-3 text-[#5b7e95]">Our Work</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Dewees Island Conservancy is a 501c3 corporation focusing on habitat restoration. We've established partnerships with the US Fish and Wildlife Service, Ducks Unlimited, Audubon South Carolina, and others to enhance wetlands and protect natural environments.
                </p>
                
              </div>
            </div>

            <div className="flex justify-center md:justify-start mt-8">
              <Link
                href="/about/board-of-directors"
                className="px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors"
              >
                View Board of Directors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
