
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "JalTrackers has helped us reduce our water bill by 25% in just three months. The leak detection feature alone paid for the entire system when it caught a hidden leak in our irrigation system.",
    author: "Rahul Sharma",
    role: "Homeowner, Delhi",
  },
  {
    content: "As a hotel manager, water management is crucial to our operations. JalTrackers provides invaluable insights that have streamlined our processes and reduced our environmental footprint.",
    author: "Neha Patel",
    role: "Hotel Manager, Mumbai",
  },
  {
    content: "The predictive analytics feature is remarkable. It warned us about irregular water usage patterns a week before we would have noticed any issue, saving us from potential water damage.",
    author: "Vikram Singh",
    role: "Property Manager, Bangalore",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-jalblue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Real experiences from JalTrackers users
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-3xl bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="absolute -top-5 -left-5 text-jalblue-500">
              <Quote className="h-12 w-12" />
            </div>
            
            <div className="pt-4">
              <p className="text-xl text-gray-700 italic">
                {testimonials[currentTestimonial].content}
              </p>
              
              <div className="mt-8 flex items-center">
                <div className="h-12 w-12 rounded-full bg-jalblue-100 flex items-center justify-center text-jalblue-700 font-bold text-lg">
                  {testimonials[currentTestimonial].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-base text-gray-500">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-3">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md hover:bg-jalblue-50 focus:outline-none focus:ring-2 focus:ring-jalblue-500"
            >
              <ChevronLeft className="h-6 w-6 text-jalblue-500" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full focus:outline-none ${
                    index === currentTestimonial ? "bg-jalblue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md hover:bg-jalblue-50 focus:outline-none focus:ring-2 focus:ring-jalblue-500"
            >
              <ChevronRight className="h-6 w-6 text-jalblue-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
