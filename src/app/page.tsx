"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/newlook.png"
            alt="Dewees Island wetlands"
            fill
            priority
            className="object-cover opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-md lg:max-w-xl bg-black/50 p-6 backdrop-blur-sm">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Helping Nature Thrive
              </h1>
              <p className="text-base md:text-lg text-white mb-6">
                Dewees Island Conservancy protects our barrier island wetlands and maritime forests,
                providing a way to help nature thrive.
              </p>
              <Link
                href="/donate"
                className="inline-block px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors"
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
            The Dewees Island Conservancy is a volunteer-led 501(c)3 nonprofit organization dedicated to protecting and restoring South Carolina's coastal habitats. Our mission is to preserve the natural environment through hands-on conservation and habitat restoration efforts.
          </p>
        </div>
      </section>
     
       {/* Wide Photo Section */}
       <section className="w-full h-72 md:h-96 relative overflow-hidden">
        <Image
          src="https://deweesislandsc.com/wp-content/uploads/2024/02/IMG_1543-1024x768.jpg"
          alt="Dewees Island panoramic view"
          fill
          unoptimized
          className="object-cover"
        />
      </section>

      {/* Projects Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5b7e95] text-center mb-12">Our Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sea Turtle Project */}
              <div 
                onClick={() => window.location.href = '/projects'} 
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/turtle.jpg"
                    alt="Sea Turtle Program"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    Sea Turtle Conservation
                  </h3>
                  <p className="text-sm text-gray-200 opacity-90">
                    Protecting sea turtle nests and monitoring hatching activities through our summer internship program.
                  </p>
                </div>
              </div>

              {/* MOTUS Project */}
              <div 
                onClick={() => window.location.href = '/projects'} 
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/motus.jpeg"
                    alt="MOTUS Wildlife Tracking"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    MOTUS Wildlife Tracking
                  </h3>
                  <p className="text-sm text-gray-200 opacity-90">
                    Partnering with Audubon South Carolina to track and protect migratory bird populations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 bg-[#445c70] text-white font-medium rounded hover:bg-[#374d5e] transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

    

      {/* Call to Action */}
      <section className="py-12 bg-[#445c70] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Support Our Conservation Efforts</h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Your donation helps us protect and preserve the natural environment of Dewees Island for future generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="px-6 py-3 bg-white text-[#445c70] font-medium rounded hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
