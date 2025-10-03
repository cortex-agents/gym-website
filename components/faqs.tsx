"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What are your gym timings?",
    answer: "Our gym is open 6 AM - 10 PM from Monday to Saturday, and 8 AM - 8 PM on Sundays."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes, we provide 1-on-1 personal training sessions with certified trainers."
  },
  {
    question: "Can I try a free session before joining?",
    answer: "Absolutely! We offer one free trial session to all new members."
  },
  {
    question: "Do you provide diet and nutrition plans?",
    answer: "Yes, our expert nutritionists create custom diet plans for members."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-grey-800 rounded-lg p-5 cursor-pointer transition hover:bg-gray-700"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </h3>
              {openIndex === index && (
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
