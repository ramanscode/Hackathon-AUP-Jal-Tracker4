import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, Handshake, Heart, DollarSign, Briefcase, BarChart, Leaf, Trees, Droplet } from "lucide-react";

const Impact = () => {
  const benefits = [
    {
      title: "Social Benefits",
      description:
        "JalTrackers promotes water conservation awareness and community engagement through education and shared resources.",
      icons: [Users, Handshake, Heart],
      items: [
        "Increased awareness of water conservation importance in communities",
        "Collaborative conservation efforts through shared data and insights",
        "Educational resources for schools and institutions to promote water literacy",
        "Support for water-stressed communities through optimization technologies",
        "Development of sustainable water management practices that benefit future generations"
      ],
      color: "jalblue"
    },
    {
      title: "Economic Benefits",
      description:
        "Our system helps reduce water bills, prevent costly damage from leaks, and optimize resource allocation.",
      icons: [DollarSign, Briefcase, BarChart],
      items: [
        "Reduced water bills by up to 30% through optimization and leak prevention",
        "Early leak detection prevents expensive water damage repairs",
        "Lower energy costs from optimized water heating and pumping systems",
        "Increased property value through smart home integration",
        "Reduced municipal water treatment costs through conservation"
      ],
      color: "amber"
    },
    {
      title: "Environmental Benefits",
      description:
        "JalTrackers helps conserve precious water resources and reduce the carbon footprint associated with water usage.",
      icons: [Leaf, Trees, Droplet],
      items: [
        "Reduced water waste through real-time monitoring and optimization",
        "Lower carbon footprint from reduced energy use in water heating and pumping",
        "Protection of natural water sources through reduced extraction",
        "Support for sustainable development goals and conservation efforts",
        "Reduced strain on water treatment facilities and infrastructure"
      ],
      color: "jalgreen"
    }
  ];

  const audiences = [
    {
      name: "Residential Users",
      description: "Families and homeowners looking to reduce water bills and contribute to conservation efforts.",
      examples: [
        "Single-family homes with gardens and multiple bathrooms",
        "Apartment buildings with centralized water management",
        "Vacation homes with remote monitoring needs"
      ]
    },
    {
      name: "Commercial Properties",
      description: "Businesses seeking to optimize water usage, reduce costs, and meet sustainability goals.",
      examples: [
        "Hotels and hospitality businesses",
        "Office buildings and corporate campuses",
        "Retail stores and shopping centers"
      ]
    },
    {
      name: "Agricultural Sector",
      description: "Farms and agricultural operations aiming to improve irrigation efficiency and sustainability.",
      examples: [
        "Small to medium-sized farms",
        "Greenhouse operations",
        "Vineyards and orchards"
      ]
    },
    {
      name: "Public Institutions",
      description: "Schools, hospitals, and government buildings looking to manage resources efficiently.",
      examples: [
        "Educational campuses and facilities",
        "Healthcare institutions",
        "Municipal buildings and public spaces"
      ]
    }
  ];

  const metrics = [
    { label: "Liters of Water Saved", value: "500M+", color: "bg-jalblue-500" },
    { label: "Active Installations", value: "25,000+", color: "bg-jalgreen-500" },
    { label: "Average Bill Reduction", value: "28%", color: "bg-amber-500" },
    { label: "Early Leaks Detected", value: "12,400+", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Impact
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              JalTrackers is making a meaningful difference in water conservation across multiple dimensions
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`h-2 ${metric.color}`}></div>
                  <div className="p-6 text-center">
                    <p className="text-4xl font-bold text-gray-900">{metric.value}</p>
                    <p className="mt-2 text-gray-600">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              How JalTrackers Creates Value
            </h2>
            
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="mb-12">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`bg-${benefit.color}-500 text-white p-8 md:w-1/3`}>
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="mb-6">{benefit.description}</p>
                    <div className="flex space-x-4">
                      {benefit.icons.map((Icon, iconIndex) => (
                        <div key={iconIndex} className={`bg-${benefit.color}-400 bg-opacity-30 rounded-full p-3`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h4 className="text-xl font-medium text-gray-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className={`h-5 w-5 text-${benefit.color}-500`} fill="currentColor" viewBox="0 0 20 20">
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
            ))}
          </div>

          {/* Target Audiences */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Who Benefits From JalTrackers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audiences.map((audience) => (
                <div key={audience.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{audience.name}</h3>
                    <p className="text-gray-600 mb-4">{audience.description}</p>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Typical Examples:</h4>
                    <ul className="space-y-1">
                      {audience.examples.map((example, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-jalblue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-600">{example}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Case Studies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-jalblue-100 flex items-center justify-center">
                      <span className="text-jalblue-600 font-bold">01</span>
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">
                      The Green Village Apartments
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A residential complex with 200 units installed JalTrackers across their centralized water system.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>32% reduction in water consumption within 6 months</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Early detection of 3 major leaks, saving ₹250,000 in potential damage</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Won "Green Building of the Year" certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-jalblue-100 flex items-center justify-center">
                      <span className="text-jalblue-600 font-bold">02</span>
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">
                      Sunshine Organic Farms
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A 25-acre agricultural operation implemented JalTrackers to optimize their irrigation systems.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Water usage reduced by 45% while maintaining crop yields</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>18% increase in profitability due to reduced operational costs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Received sustainable farming certification and premium market access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-jalblue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join the Water Conservation Movement
              </h2>
              <p className="text-jalblue-100 max-w-3xl mx-auto mb-8">
                Be part of the growing community of individuals and organizations making a positive impact on water conservation. Every drop saved contributes to a more sustainable future.
              </p>
              <button className="bg-white text-jalblue-600 px-8 py-3 rounded-md font-medium hover:bg-jalblue-50 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
