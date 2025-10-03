"use client";
import Image from "next/image";
import FAQs from "@/components/faqs";

export default function About() {
    return (
        <section className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="relative w-full h-[500px]">
                <Image
                    src="/about-hero.jpg"
                    alt="About Hero"
                    fill
                    className="object-cover brightness-90"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="flex flex-col items-center text-center gap-5 px-6 text-white">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            About PowerZone Fitness
                        </h1>
                        <p className="max-w-3xl text-lg leading-relaxed">
                            Welcome to PowerZone Fitness, where strength meets community. 
                            We believe fitness is not just about lifting weights — 
                            it’s about building confidence, discipline, and a healthy lifestyle.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-6xl mx-auto py-14 px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Founded in 2015, PowerZone Fitness has grown from a small training studio
                        into one of the city’s leading fitness hubs. With state-of-the-art equipment,
                        dedicated trainers, and a passion for wellness, we’ve transformed thousands of lives.
                        Our mission is to make fitness accessible, enjoyable, and sustainable for everyone.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Today, we’re more than just a gym — we’re a lifestyle. We help people
                        build strength, confidence, and community through personalized training,
                        expert guidance, and constant motivation.
                    </p>
                </div>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image src="/our-story.jpg" alt="Our Story" fill className="object-cover" />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-gray-200 py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
                        <Image src="/about-our-vision.jpg" alt="Mission" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            To inspire and empower individuals to achieve their best selves through
                            personalized training, wellness education, and a supportive community.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 text-black">Our Vision</h2>
                        <p className="text-gray-600">
                            To be the most trusted fitness destination, known for innovation, inclusivity,
                            and life-changing results.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-6xl mx-auto py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Why Choose Us?
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { img: "/about-coach.jpg", title: "Certified Trainers", desc: "Expert professionals to guide your fitness journey." },
                        { img: "/Modern-Equipment.jpg", title: "Modern Equipment", desc: "Train with cutting-edge machines and tools." },
                        { img: "/Supportive-Community.jpg", title: "Supportive Community", desc: "Be part of a motivating and friendly gym culture." }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
                        >
                            <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                                <Image src={item.img} alt={item.title} fill className="object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gym Gallery */}
            <div className="bg-gray-200 py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Our Gym in Action
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        "/about-action-1.jpg",
                        "/about-action-2.jpg",
                        "/about-action-3.jpg",
                        "/about-action-4.jpg",
                        "/about-action-5.jpg",
                        "/about-action-6.jpg",
                    ].map((img, i) => (
                        <div
                            key={i}
                            className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-md"
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${i + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs (imported) */}
            <FAQs />
        </section>
    );
}
