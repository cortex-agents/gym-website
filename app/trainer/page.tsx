"use client";

export default function Trainers() {
  const trainers = [
    {
      name: "John Carter",
      role: "Strength Coach",
      quality: "Expert in weight training and endurance building",
      image: "/coach-male-1.jpg",
    },
    {
      name: "Michael Brown",
      role: "Personal Trainer",
      quality: "Specializes in body transformation and functional training",
      image: "/coach-male-2.jpg",
      objectPosition: "top", // fix face cropping
    },
    {
      name: "David Wilson",
      role: "CrossFit Coach",
      quality: "High-intensity workouts and agility improvement",
      image: "/coach-male-3.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Yoga Instructor",
      quality: "Improves flexibility, posture, and mental focus",
      image: "/coach-lady-1.jpg",
    },
    {
      name: "Sophia Lee",
      role: "Pilates Coach",
      quality: "Core strength and body alignment specialist",
      image: "/coach-lady-2.jpg",
      objectPosition: "top", // fix face cropping
    },
    {
      name: "Olivia Martinez",
      role: "Fitness Trainer",
      quality: "Focuses on cardio, endurance, and overall wellness",
      image: "/coach-lady-3.jpg",
      objectPosition: "top", // fix face cropping
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-[50vh] flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1599058918144-56c49a6e8c54?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white">Meet Our Trainers</h1>
      </section>

      {/* Intro Content */}
      <section className="max-w-4xl mx-auto text-center mt-16 px-6">
        <h2 className="text-4xl font-bold mb-4">Our Trainers</h2>
        <p className="text-gray-600 text-lg">
          Our professional trainers are dedicated to helping you achieve your fitness goals. 
          Each trainer brings a unique expertise and passion, ensuring personalized guidance 
          for every member, whether you are looking to build strength, improve flexibility, 
          or boost endurance.
        </p>
      </section>

      {/* Trainers Grid */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-72 w-full">
              <img
                src={trainer.image}
                alt={trainer.name}
                className={`w-full h-full object-cover ${trainer.objectPosition ? "object-top" : "object-center"}`}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-black">{trainer.name}</h3>
              <p className="text-gray-700 mt-1 font-semibold">{trainer.role}</p>
              <p className="text-gray-500 mt-2 text-sm">{trainer.quality}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
