"use client";
import Image from "next/image";

export default function Classes() {
  return (
    <main className="px-6 md:px-20 py-24 bg-gray-50">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-gray-900">Our Classes</h1>
      <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
        From strength to flexibility, we offer a variety of classes designed to match your fitness level. 
        Whether you’re a beginner or an athlete, our expert-led sessions will help you achieve your goals.
      </p>

      {/* Additional Content */}
      <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
        Each class is tailored to ensure safety, progress, and enjoyment. Join our supportive community and 
        discover a fitness journey that’s motivating and effective. Explore our diverse offerings and find 
        the perfect fit for your lifestyle.
      </p>

      {/* Classes Grid */}
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Strength Training */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="h-40 relative w-full">
            <Image
              src="/strength.jpg"
              alt="Strength Training"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Strength Training</h3>
          <p className="mt-3 text-gray-500">
            Build muscle and improve endurance with guided weightlifting programs.
          </p>
        </div>

        {/* Cardio */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="h-40 relative w-full">
            <Image
              src="/cardio.jpg"
              alt="Cardio Blast"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Cardio Blast</h3>
          <p className="mt-3 text-gray-500">
            Burn fat and boost stamina with intense cardio sessions.
          </p>
        </div>

        {/* Yoga */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="h-40 relative w-full">
            <Image
              src="/yoga.jpg"
              alt="Yoga & Flexibility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Yoga & Flexibility</h3>
          <p className="mt-3 text-gray-500">
            Enhance your flexibility, posture, and inner peace with yoga classes.
          </p>
        </div>

        {/* CrossFit */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="h-40 relative w-full">
            <Image
              src="/crossfit.jpg"
              alt="CrossFit"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">CrossFit</h3>
          <p className="mt-3 text-gray-500">
            High-intensity functional training to challenge your strength and agility.
          </p>
        </div>

        {/* Boxing */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="h-40 relative w-full">
            <Image
              src="/boxing.jpg"
              alt="Boxing & MMA"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Boxing & MMA</h3>
          <p className="mt-3 text-gray-500">
            Train like a fighter and improve reflexes, coordination, and stamina.
          </p>
        </div>

        {/* Cycling */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="h-40 relative w-full">
            <Image
              src="/cycling.jpg"
              alt="Indoor Cycling"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Indoor Cycling</h3>
          <p className="mt-3 text-gray-500">
            Experience high-energy cycling sessions with motivating music and lights.
          </p>
        </div>
      </div>

      {/* Classes Schedule Table */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Class Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-medium">Class</th>
                <th className="py-3 px-6 text-left text-gray-600 font-medium">Monday</th>
                <th className="py-3 px-6 text-left text-gray-600 font-medium">Wednesday</th>
                <th className="py-3 px-6 text-left text-gray-600 font-medium">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-6 text-gray-700">Strength Training</td>
                <td className="py-3 px-6 text-gray-700">8:00 AM - 9:00 AM</td>
                <td className="py-3 px-6 text-gray-700">8:00 AM - 9:00 AM</td>
                <td className="py-3 px-6 text-gray-700">8:00 AM - 9:00 AM</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-6 text-gray-700">Cardio Blast</td>
                <td className="py-3 px-6 text-gray-700">10:00 AM - 11:00 AM</td>
                <td className="py-3 px-6 text-gray-700">10:00 AM - 11:00 AM</td>
                <td className="py-3 px-6 text-gray-700">10:00 AM - 11:00 AM</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 text-gray-700">Yoga & Flexibility</td>
                <td className="py-3 px-6 text-gray-700">6:00 PM - 7:00 PM</td>
                <td className="py-3 px-6 text-gray-700">6:00 PM - 7:00 PM</td>
                <td className="py-3 px-6 text-gray-700">6:00 PM - 7:00 PM</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-6 text-gray-700">CrossFit</td>
                <td className="py-3 px-6 text-gray-700">7:00 AM - 8:00 AM</td>
                <td className="py-3 px-6 text-gray-700">7:00 AM - 8:00 AM</td>
                <td className="py-3 px-6 text-gray-700">7:00 AM - 8:00 AM</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 text-gray-700">Boxing & MMA</td>
                <td className="py-3 px-6 text-gray-700">5:00 PM - 6:00 PM</td>
                <td className="py-3 px-6 text-gray-700">5:00 PM - 6:00 PM</td>
                <td className="py-3 px-6 text-gray-700">5:00 PM - 6:00 PM</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-6 text-gray-700">Indoor Cycling</td>
                <td className="py-3 px-6 text-gray-700">4:00 PM - 5:00 PM</td>
                <td className="py-3 px-6 text-gray-700">4:00 PM - 5:00 PM</td>
                <td className="py-3 px-6 text-gray-700">4:00 PM - 5:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
