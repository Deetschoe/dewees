import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">Projects</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            <div id="motus">
              <h2 className="text-2xl font-bold mb-6 text-[#5b7e95]">MOTUS Tower Project</h2>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/2 relative h-80 rounded-lg overflow-hidden shadow">
                  <Image
                    src="https://res.cloudinary.com/dewees-real-estate/images/f_auto,q_auto/v1585758082/40-4/40-4.png?_i=AA"
                    alt="MOTUS Tower"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <p className="text-gray-700 mb-4">
                    The Dewees Island Conservancy partnered with Audubon South Carolina to manage a MOTUS tower that provides valuable data about bird migration patterns. The tower is located at the Landings Building on Dewees Island.
                  </p>
                  <p className="text-gray-700">
                    MOTUS (Motus Wildlife Tracking System) is a collaborative research network that uses automated radio telemetry to track the movement of small animals. The data collected helps researchers understand migratory routes, stopover sites, and the timing of migrations.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">MOTUS Video</h3>
                <p className="text-gray-700 mb-6">
                  Watch this informative video about the MOTUS Wildlife Tracking System and how it helps us track migratory birds:
                </p>
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dU8KrwgBPBU"
                    title="MOTUS Wildlife Tracking System"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-[#5b7e95]">How MOTUS Works</h3>
              <p className="text-gray-700 mb-6">
                Radio telemetry uses radio signals and receivers to track birds. Small nanotag transmitters are temporarily attached to birds, bats, butterflies, or even dragonflies. These transmitters send out a signal a few times every minute that can be picked up by a receiver along the way, specifically a Motus tower.
              </p>

              <p className="text-gray-700 mb-6">
                These towers have antennas that can pick up the signal from a tagged individual if they fly within a few kilometers of a tower. Staging these towers along migration routes creates a virtual net to capture the animals' information. The towers connect to the internet and download tag ID numbers as they are detected in real-time, giving researchers the whereabouts of the bird as the individual migrates.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
  <h3 className="text-lg font-bold mb-4 text-[#5b7e95]">Discoveries from Our Tower</h3>
  <div className="grid grid-cols-3 gap-4">
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

              <div className="flex justify-center">
                <Image
                  src="https://ext.same-assets.com/4228287105/4097428279.jpeg"
                  alt="MOTUS System Diagram"
                  width={600}
                  height={400}
                  unoptimized
                  className="rounded-lg shadow-md"
                />
              </div>

            
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
