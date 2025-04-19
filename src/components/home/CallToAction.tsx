
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-12 bg-jalblue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <h2 className="text-3xl font-extrabold text-jalblue-600 sm:text-4xl">
                  Ready to Start Saving Water?
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                  Join thousands of users who are already making a difference with JalTrackers. 
                  Our easy-to-install system starts delivering insights from day one.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row">
                  <Button className="flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-jalblue-500 hover:bg-jalblue-600 md:py-4 md:text-lg md:px-10">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="mt-3 sm:mt-0 sm:ml-3 flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-jalblue-600 border-jalblue-300 hover:bg-jalblue-50 md:py-4 md:text-lg md:px-10"
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative aspect-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-jalblue-400 to-jalgreen-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                  <ul className="space-y-2 text-left max-w-xs mx-auto">
                    {[
                      "Save up to 30% on water bills",
                      "Detect leaks before they cause damage",
                      "Gain insights on usage patterns",
                      "Contribute to water conservation",
                      "Easy setup in under 30 minutes"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
