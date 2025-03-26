import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">Latest News</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative h-56 md:h-auto">
                  <Image
                    src="https://sc.audubon.org/sites/default/files/styles/article_hero_inline/public/motus_4.jpeg?itok=qw9SU20G"
                    alt="MOTUS Tower Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 p-6">
                  <div className="mb-2 text-sm text-gray-500">Ongoing Project</div>
                  <h2 className="text-xl font-bold mb-3 text-[#5b7e95]">MOTUS Tower Project</h2>
                  <p className="mb-4 text-gray-700">
                    Our MOTUS tower has been tracking migration patterns with some encouraging findings. The Dewees Island Conservancy is partnering with Audubon South Carolina to manage a MOTUS tower that provides valuable data about bird migration patterns.
                  </p>
                  <Link
                    href="/projects#motus"
                    className="text-[#5b7e95] font-medium hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#edf4f8] p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4 text-[#5b7e95]">Support Our Conservation Efforts</h2>
            <p className="text-gray-700 mb-6 max-w-lg mx-auto">
              Your donation to the Dewees Island Conservancy helps fund important conservation projects like our MOTUS tower.
            </p>
            <Link
              href="https://checkout.square.site/merchant/ML03XSQFYMM2D/checkout/RE7U5Z25C6EQCBNZBU4NPQ4J"
              className="px-6 py-2 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
