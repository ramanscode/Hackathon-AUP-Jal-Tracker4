
import { Droplet, BarChart, AlertTriangle, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Introduction = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track water usage patterns across your property in real-time",
      icon: Droplet,
      color: "bg-jalblue-100 text-jalblue-500",
    },
    {
      title: "Personalized Reports",
      description: "Get detailed insights on your water consumption habits",
      icon: BarChart,
      color: "bg-jalgreen-100 text-jalgreen-500",
    },
    {
      title: "Leak Alerts",
      description: "Receive immediate notifications about potential water leaks",
      icon: AlertTriangle,
      color: "bg-amber-100 text-amber-500",
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting to optimize your water usage",
      icon: Brain,
      color: "bg-purple-100 text-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Water Conservation Made Smart
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            JalTrackers combines cutting-edge IoT sensors with intelligent analytics 
            to help households and businesses monitor and conserve water resources.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-5">
                  <div className="flex flex-col items-center text-center">
                    <div className={`rounded-full p-3 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl overflow-hidden shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-jalblue-500 p-8 flex items-center justify-center">
              <div className="max-w-md text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Why Water Conservation Matters
                </h3>
                <p className="text-jalblue-100">
                  Water scarcity affects more than 40% of the global population. 
                  By 2025, two-thirds of the world's population may face water shortages.
                  Every drop saved contributes to a more sustainable future.
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-600 mb-4">
                  JalTrackers empowers users with actionable data to make informed decisions
                  about their water usage patterns, identifying waste and opportunities for conservation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Non-invasive IoT sensors",
                    "Machine learning algorithms",
                    "User-friendly analytics dashboard",
                    "Customizable alert systems",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-jalgreen-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
