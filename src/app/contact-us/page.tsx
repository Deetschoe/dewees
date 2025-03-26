import Link from "next/link";
import { Mail, MapPin, Phone, User } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">Contact Us</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-xl font-bold mb-6 text-[#5b7e95]">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User className="h-6 w-6 text-[#5b7e95] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Contact</h3>
                  <p className="text-gray-600">Carey Sullivan, President</p>
                  <p className="text-gray-600">Dewees Island Conservancy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#5b7e95] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">293 Dewees Inlet Drive</p>
                  <p className="text-gray-600">Box 33</p>
                  <p className="text-gray-600">Dewees Island, SC 29451</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#5b7e95] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">703-282-3111</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#5b7e95] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">deweesislandconservancy@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 w-full h-72 md:h-96 rounded-md overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.5839841630705!2d-79.7058517!3d32.9774182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7507a7a5b0f3%3A0x5e5c91f90d989631!2s312%20Pelican%20Flight%20Dr%2C%20Dewees%20Island%2C%20SC%2029451!5e0!3m2!1sen!2sus!4v1716601847734!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Dewees Island Conservancy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
