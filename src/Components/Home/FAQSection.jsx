import React, { useState } from "react";

const faqData = [
  {
    question: "How do I register for a marathon?",
    answer:
      "You can register by visiting the Marathons page, selecting an event, and clicking the 'Register' button. Fill out the required details to complete your registration.",
  },
  {
    question: "What safety measures are in place during events?",
    answer:
      "All events have medical checkpoints, hydration stations, and emergency support teams to ensure your safety throughout the race.",
  },
  {
    question: "Can I cancel my registration?",
    answer:
      "Cancellations are subject to the specific event's policy. Please check the event details or contact support for assistance.",
  },
  {
    question: "Are there age restrictions for participating?",
    answer:
      "Most marathons have minimum age requirements, usually 18+. Please refer to the specific event's guidelines.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="pt-10 px-3">
    <h2 className="text-4xl mb-12 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center md:h-15">
        Frequently Asked Questions
      </h2>
    
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white rounded-lg shadow-lg ">
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-5">
              <h3 className="text-2xl font-semibold text-[#1E40AF]">{item.question}</h3>
              <span className="text-3xl font-bold text-[#1c99ff]">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-5 pt-2 text-xl font-semibold mb-3 text-[#1E40AF] border-t border-[#4080f8]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
