"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="https://deweesislandsc.com/wp-content/uploads/2024/02/IMG_0360-1024x768.jpg"
          alt="Dewees Island wildlife"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {/* Intern Program */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 relative h-[300px] lg:h-[400px]">
                  <Image
                    src="/turtle.jpg"
                    alt="Turtle conservation efforts"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#5b7e95]">Summer Turtle Internship Program</h2>
                  <p className="text-gray-700 mb-6">
                    The Dewees Island Conservancy offers a summer internship program focused on sea turtle conservation. Interns gain valuable hands-on experience while contributing to meaningful conservation work.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => toggleSection('intern')}
                      className="flex items-center text-[#5b7e95] hover:text-[#4c6a80] font-medium"
                    >
                      {expandedSection === 'intern' ? (
                        <>
                          Read Less <ChevronUp className="ml-1" size={20} />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="ml-1" size={20} />
                        </>
                      )}
                    </button>
                    <Link
                      href="/contact-us"
                      className="px-6 py-2 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              {expandedSection === 'intern' && (
                <div className="p-6 lg:p-8 border-t bg-gray-50">
                  <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">Program Details</h3>
                      <p className="text-gray-700 mb-4">
                        Our summer internship program provides hands-on experience in sea turtle conservation, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                        <li>Nest monitoring and protection</li>
                        <li>Data collection and analysis</li>
                        <li>Habitat restoration activities</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">Internship Benefits</h3>
                      <p className="text-gray-700 mb-4">
                        Interns will gain valuable experience in wildlife conservation while contributing to important research and protection efforts for sea turtles on Dewees Island.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MOTUS Tower Project */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 relative h-[300px] lg:h-[400px]">
                  <Image
                    src="/motus.jpeg"
                    alt="MOTUS Tower"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#5b7e95]">MOTUS Tower Project</h2>
                  <p className="text-gray-700 mb-6">
                    The Dewees Island Conservancy partnered with Audubon South Carolina to manage a MOTUS tower that provides valuable data about bird migration patterns. The tower is located at the Landings Building on Dewees Island.
                  </p>
                  <button
                    onClick={() => toggleSection('motus')}
                    className="flex items-center text-[#5b7e95] hover:text-[#4c6a80] font-medium"
                  >
                    {expandedSection === 'motus' ? (
                      <>
                        Read Less <ChevronUp className="ml-1" size={20} />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="ml-1" size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>
              {expandedSection === 'motus' && (
                <div className="p-6 lg:p-8 border-t bg-gray-50">
                  <div className="max-w-4xl mx-auto space-y-8">
                    <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-md">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/dU8KrwgBPBU"
                        title="MOTUS Wildlife Tracking System"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">Discoveries from Our Tower</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Row 1 */}
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/new-motus-birds-september-9-bobolink-11-x-8-in-1_1.png"
                            alt="Motus Birds: 11/1/21 - Hermit Thrush"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/new-motus-birds-september-9-bobolink-11-x-8-in_2.jpg"
                            alt="Motus Birds: 10/14/21 - Gray Catbird"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/new-motus-birds-september-9-bobolink-11-x-8-in-2_3.png"
                            alt="Motus Birds: 11/20/21 - Gray Catbird"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        {/* Row 2 */}
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/2_6.jpg"
                            alt="Motus Birds: 9/13/2021 - Clapper Rail"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/1_5.png"
                            alt="Motus Birds: 10/2/2021 - Clapper Rail"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/3-1_10.png"
                            alt="Motus Birds: 9/17/2021 - Clapper Rail"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        {/* Row 3 */}
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/4-1_13.png"
                            alt="Motus Birds: 10/14/21 - Swainsons Thrush"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/1_4.jpg"
                            alt="Clapper Rails: 9/17/2021 - Bobolink"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/5_14.jpg"
                            alt="Motus Birds: 10/7/2021 - Bobolink"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        {/* Row 4 */}
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/6_17.jpg"
                            alt="Motus Birds: 10/7/2021 - Bobolink"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/6-1_19.png"
                            alt="Motus Birds: 10/14/21 - Swainsons Thrush"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/7_20.jpg"
                            alt="Motus Birds: 9/10/2021 - Bobolink"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        {/* Row 5 */}
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/8_22.jpg"
                            alt="Motus Birds: 9/3/2021 - Bobolink"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/9_24.jpg"
                            alt="Motus Birds: 10/14/21 - Swainsons Thrush"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/10_25.jpg"
                            alt="Motus Birds: 9/3/2021 - Bobolink"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        {/* Row 6 */}
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/11_26.jpg"
                            alt="Motus Birds: 10/14/21 - Gray Catbird"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/12_27.jpg"
                            alt="Motus Birds: 10/27/21 - Swainsons Thrush"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow">
                          <Image
                            src="https://deweesislandconservancy.org/wp-content/uploads/2022/09/13_28.jpg"
                            alt="Motus Birds: 10/14/21 - Swainsons Thrush"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">Why This Matters</h3>
                      <p className="text-gray-700 mb-6">
                        Traditional bird banding requires recapturing the same bird to gather information, which is rare. Geolocators also require recapturing. The MOTUS system provides real-time data about bird movements without recapture, helping us understand:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                        <li>Migration routes and timing</li>
                        <li>Habitat use throughout the annual cycle</li>
                        <li>Survival rates and population dynamics</li>
                        <li>Effects of climate change and habitat loss on migratory species</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sand Dune Restoration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 relative h-[300px] lg:h-[400px]">
                  <Image
                    src="/crab.png"
                    alt="Sand Dune Restoration"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#5b7e95]">Sand Dune Restoration</h2>
                  <p className="text-gray-700 mb-6">
                    Working alongside South Carolina coastal authorities and local communities, we're helping protect and restore the vital dune systems along our barrier island coastline. This collaborative effort helps preserve our natural storm defenses and wildlife habitats.
                  </p>
                  <button
                    onClick={() => toggleSection('dunes')}
                    className="flex items-center text-[#5b7e95] hover:text-[#4c6a80] font-medium"
                  >
                    {expandedSection === 'dunes' ? (
                      <>
                        Read Less <ChevronUp className="ml-1" size={20} />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="ml-1" size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>
              {expandedSection === 'dunes' && (
                <div className="p-6 lg:p-8 border-t bg-gray-50">
                  <div className="max-w-3xl mx-auto">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">Our Impact</h3>
                      <p className="text-gray-700 mb-4">
                        As part of a broader South Carolina coastal preservation initiative, our efforts include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                        <li>Installing protective dune fencing along vulnerable shoreline areas</li>
                        <li>Planting native sea oats and other dune-stabilizing vegetation</li>
                        <li>Monitoring erosion patterns and wildlife activity</li>
                      </ul>
                      <p className="text-gray-700">
                        Through these ongoing efforts, we're helping maintain the natural barrier that protects our island community while preserving critical habitats for coastal wildlife.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
