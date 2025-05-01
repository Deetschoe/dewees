import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="https://deweesislandsc.com/wp-content/uploads/2024/02/2B2A8723-1024x683.jpg"
          alt="Dewees Island natural landscape"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About</h1>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            To help nature thrive by protecting and restoring the natural environment within our conservation areas through projects and leading volunteer groups.
          </p>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/H0tC8rXmnhk"
              title="Dewees Island Conservancy Video"
              className="w-full aspect-video rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {/* Volunteer Organization Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#5b7e95]">A Volunteer-Led Organization</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                The Dewees Island Conservancy is powered entirely by dedicated volunteers who are passionate about protecting our coastal environment.
              </p>
              <Link
                href="/about/board-of-directors"
                className="inline-block px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded-lg transition-colors"
              >
                Our Board of Directors
              </Link>
            </div>

            {/* Projects Preview */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#5b7e95]">Our Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/projects" className="group">
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/turtle.jpg"
                      alt="Sea Turtle Conservation"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-white">Sea Turtle Conservation</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/projects" className="group">
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/motus.jpeg"
                      alt="MOTUS Wildlife Tracking"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-white">MOTUS Wildlife Tracking</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-block px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded-lg transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
