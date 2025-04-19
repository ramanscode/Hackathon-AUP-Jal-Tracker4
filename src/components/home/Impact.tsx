
import { Users, DollarSign, Leaf } from "lucide-react";

const Impact = () => {
  const benefits = [
    {
      title: "Social Benefits",
      description: "Promoting water conservation awareness and community engagement",
      icon: Users,
      color: "bg-jalblue-500",
      items: [
        "Increased awareness of water conservation importance",
        "Community engagement through shared insights",
        "Educational resources for schools and institutions",
        "Support for water-stressed communities"
      ]
    },
    {
      title: "Economic Benefits",
      description: "Reducing water bills and preventing costly damage from leaks",
      icon: DollarSign,
      color: "bg-amber-500",
      items: [
        "Reduced water bills by up to 30%",
        "Early leak detection prevents expensive repairs",
        "Lower energy costs from optimized water heating",
        "Increased property value through smart home integration"
      ]
    },
    {
      title: "Environmental Benefits",
      description: "Conserving precious water resources and reducing carbon footprint",
      icon: Leaf,
      color: "bg-jalgreen-500",
      items: [
        "Reduced water waste through optimization",
        "Lower carbon footprint from reduced energy use",
        "Protection of natural water sources",
        "Support for sustainable development goals"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Creating Positive Impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            JalTrackers delivers meaningful benefits across social, economic, and environmental dimensions
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title} 
                className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className={`absolute top-0 inset-x-0 h-1 ${benefit.color} rounded-t-lg`}></div>
                <div className="flex flex-col items-center text-center">
                  <div className={`rounded-full p-3 ${benefit.color} bg-opacity-10`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color.split('-')[1]}-500`} />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {benefit.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-left w-full">
                    {benefit.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className={`h-5 w-5 text-${benefit.color.split('-')[1]}-500`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-jalblue-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Target Audience
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              JalTrackers serves a diverse range of users who benefit from improved water management
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { name: "Households", description: "Save on water bills and prevent damage" },
                { name: "Businesses", description: "Optimize operations and reduce costs" },
                { name: "Agriculture", description: "Efficient irrigation and resource management" },
                { name: "Municipalities", description: "Better water infrastructure monitoring" }
              ].map((audience) => (
                <div key={audience.name} className="bg-white p-4 rounded shadow">
                  <h4 className="font-medium text-gray-900">{audience.name}</h4>
                  <p className="mt-1 text-sm text-gray-500">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
