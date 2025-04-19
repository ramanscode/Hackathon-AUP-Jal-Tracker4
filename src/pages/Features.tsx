
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Activity, BarChart, AlertTriangle, Brain, Shield, Smartphone, Zap, Clock } from "lucide-react";

const Features = () => {
  const primaryFeatures = [
    {
      title: "Real-time Monitoring",
      description: "Track water flow, pressure, and usage patterns across your property in real-time. Our sensors provide minute-by-minute data on water consumption.",
      icon: Activity,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Personalized Reports",
      description: "Receive detailed weekly and monthly reports tailored to your usage patterns. Understand your consumption habits with easy-to-read visualizations.",
      icon: BarChart,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Leak Alerts",
      description: "Get immediate notifications about potential water leaks or unusual consumption patterns. Early detection can prevent water damage and waste.",
      icon: AlertTriangle,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Predictive Analytics",
      description: "Our AI algorithms analyze your usage patterns and provide forecasts and recommendations for optimizing water consumption.",
      icon: Brain,
      color: "bg-green-100 text-green-600",
    },
  ];

  const secondaryFeatures = [
    {
      title: "Data Security",
      description: "End-to-end encryption and secure cloud storage protect your sensitive usage data.",
      icon: Shield,
    },
    {
      title: "Mobile App",
      description: "Control and monitor your water usage from anywhere using our intuitive mobile application.",
      icon: Smartphone,
    },
    {
      title: "Energy Efficiency",
      description: "Optimize water heating schedules to reduce energy consumption and costs.",
      icon: Zap,
    },
    {
      title: "Historical Analysis",
      description: "Access up to 10 years of historical data to understand long-term usage trends.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              JalTrackers Features
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Our comprehensive water monitoring system combines hardware and software to deliver powerful insights
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {primaryFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className={`rounded-md p-3 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <h4 className="text-sm font-medium text-gray-900">How it works:</h4>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    {feature.title === "Real-time Monitoring" && (
                      <>
                        <li>• Non-invasive sensors attach to water pipes</li>
                        <li>• Data is transmitted to the cloud every 60 seconds</li>
                        <li>• Dashboard updates in real-time with latest metrics</li>
                      </>
                    )}
                    {feature.title === "Personalized Reports" && (
                      <>
                        <li>• AI analyzes your usage patterns weekly and monthly</li>
                        <li>• Comparative analytics show performance vs similar households</li>
                        <li>• Custom report generation with exportable formats</li>
                      </>
                    )}
                    {feature.title === "Leak Alerts" && (
                      <>
                        <li>• Continuous monitoring for unusual flow patterns</li>
                        <li>• Instant notifications via app, SMS, or email</li>
                        <li>• Geographic pinpointing of potential leak locations</li>
                      </>
                    )}
                    {feature.title === "Predictive Analytics" && (
                      <>
                        <li>• Machine learning models trained on your specific usage</li>
                        <li>• Consumption forecasting based on historical patterns</li>
                        <li>• Smart recommendations for optimization opportunities</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Additional Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {secondaryFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="rounded-md p-2 bg-jalblue-100 text-jalblue-600">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-jalblue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-jalblue-100 mb-8">
                JalTrackers combines multiple innovative technologies to deliver a solution that's more comprehensive than any other water monitoring system on the market.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Non-Invasive Installation</h3>
                  <p className="text-jalblue-50">
                    Our sensors attach externally to existing pipes, requiring no plumbing modifications or service interruptions.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">AI-Powered Insights</h3>
                  <p className="text-jalblue-50">
                    Machine learning algorithms that continuously improve their accuracy based on your specific usage patterns.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">End-to-End Solution</h3>
                  <p className="text-jalblue-50">
                    Complete ecosystem from hardware sensors to cloud analytics to mobile applications in one integrated platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
