import Image from "next/image";

export default function BoardOfDirectors() {
  const boardMembers = [
    { name: "Carey Sullivan", position: "President" },
    { name: "Bill Duncan", position: "Treasurer" },
    { name: "Pam Duncan", position: "" },
    { name: "Cori McIntyre", position: "" },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#5b7e95]">Board of Directors</h1>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 relative h-[300px]">
              <Image 
                src="/osprey.jpeg" 
                alt="Osprey perched on a wooden structure" 
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-[#5b7e95]">Current Members</h2>
              
              <div className="space-y-4">
                {boardMembers.map((member, index) => (
                  <div key={index}>
                    {member.position ? (
                      <p className="text-gray-800">{member.name}, {member.position}</p>
                    ) : (
                      <p className="text-gray-800">{member.name}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
