import Link from "next/link";
import { Mail } from "lucide-react";

export default function Donate() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">Donate</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            {/* Online Donation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#5b7e95]">Online Donation</h2>
              <p className="text-gray-700 mb-6">
                Make a secure donation online through our Square payment system.
              </p>
              <Link
                href="https://checkout.square.site/merchant/ML03XSQFYMM2D/checkout/RE7U5Z25C6EQCBNZBU4NPQ4J"
                className="inline-block px-6 py-3 bg-[#5b7e95] hover:bg-[#4c6a80] text-white font-medium rounded transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Online
              </Link>
            </div>

            {/* Mail-in Donation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#5b7e95]">Mailed Check</h2>
              <p className="text-gray-700 mb-6">
                You can also support us by mailing a check to our address:
              </p>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <Mail className="h-6 w-6 text-[#5b7e95] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Mailing Address</h3>
                  <p className="text-gray-600">Dewees Island Conservancy</p>
                  <p className="text-gray-600">114 Dewees Inlet Drive</p>
                  <p className="text-gray-600">Dewees Island, SC 29451</p>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </section>
    </div>
  );
} 