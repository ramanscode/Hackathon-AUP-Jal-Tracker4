
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-jalblue-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Smart Water Usage</span>{" "}
                <span className="block text-jalblue-600">
                  Monitoring for a Sustainable Future
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                JalTrackers combines IoT and AI technologies to help you monitor, analyze, 
                and optimize water usage in real-time, promoting conservation and 
                reducing waste.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-jalblue-500 hover:bg-jalblue-600 md:py-4 md:text-lg md:px-10">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-jalblue-600 border-jalblue-300 hover:bg-jalblue-50 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <HeroImage />
      </div>
      <div className="wave absolute bottom-0 w-full h-48 bg-white"></div>
    </div>
  );
};

export default Hero;
