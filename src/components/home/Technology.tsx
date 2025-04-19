
import { Activity, BarChart, Droplet, Smartphone, Server, Database, Cloud } from "lucide-react";

const Technology = () => {
  return (
    <section className="py-16 bg-jalblue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Innovative Technology
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Powered by cutting-edge IoT and machine learning algorithms
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          
          <div className="relative flex justify-center">
            <span className="px-3 bg-jalblue-50 text-lg font-medium text-gray-900">
              How It Works
            </span>
          </div>
        </div>

        <div className="mt-12">
          <div className="relative">
            {/* Technology flow diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sensors */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center">
                  <div className="rounded-full bg-jalblue-100 p-3">
                    <Droplet className="h-6 w-6 text-jalblue-600" />
                  </div>
                </div>
                <h3 className="mt-4 text-center text-lg font-medium text-gray-900">
                  Smart Sensors
                </h3>
                <p className="mt-2 text-center text-base text-gray-500">
                  Non-invasive IoT sensors attach to your water pipes and measure flow rate, pressure, and temperature
                </p>
                <div className="mt-6 flex justify-center">
                  <Activity className="h-12 w-12 text-jalblue-500 animate-pulse" />
                </div>
              </div>

              {/* Data Processing */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center">
                  <div className="rounded-full bg-jalblue-100 p-3">
                    <Server className="h-6 w-6 text-jalblue-600" />
                  </div>
                </div>
                <h3 className="mt-4 text-center text-lg font-medium text-gray-900">
                  Cloud Processing
                </h3>
                <p className="mt-2 text-center text-base text-gray-500">
                  Data is securely transmitted to our cloud servers where AI algorithms analyze patterns and anomalies
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="grid grid-cols-2 gap-2">
                    <Database className="h-6 w-6 text-jalblue-400" />
                    <Cloud className="h-6 w-6 text-jalblue-500" />
                    <Cloud className="h-6 w-6 text-jalblue-600" />
                    <Database className="h-6 w-6 text-jalblue-700" />
                  </div>
                </div>
              </div>

              {/* User Interface */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center">
                  <div className="rounded-full bg-jalblue-100 p-3">
                    <Smartphone className="h-6 w-6 text-jalblue-600" />
                  </div>
                </div>
                <h3 className="mt-4 text-center text-lg font-medium text-gray-900">
                  Mobile Dashboard
                </h3>
                <p className="mt-2 text-center text-base text-gray-500">
                  Access insights, receive alerts, and control settings through our intuitive mobile and web applications
                </p>
                <div className="mt-6 flex justify-center">
                  <BarChart className="h-12 w-12 text-jalgreen-500" />
                </div>
              </div>
            </div>

            {/* Connecting arrows */}
            <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
              <div className="flex justify-between px-12">
                <svg width="80" height="20" className="text-jalblue-400">
                  <line x1="0" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="2" />
                  <polygon points="80,10 70,5 70,15" fill="currentColor" />
                </svg>
                <svg width="80" height="20" className="text-jalblue-400">
                  <line x1="0" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="2" />
                  <polygon points="80,10 70,5 70,15" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="bg-jalgreen-500 p-4">
            <h3 className="text-center text-xl font-bold text-white">
              Technical Specifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border-b md:border-r border-gray-200">
              <h4 className="text-lg font-medium text-gray-900">Sensors</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• Ultra-sensitive flow detection (±0.1L accuracy)</li>
                <li>• Temperature range: -20°C to 60°C</li>
                <li>• Pressure monitoring: 0-10 bar</li>
                <li>• IP67 waterproof rating</li>
                <li>• 5+ year battery life</li>
              </ul>
            </div>
            <div className="p-6 border-b lg:border-r border-gray-200">
              <h4 className="text-lg font-medium text-gray-900">Connectivity</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• WiFi 802.11 b/g/n</li>
                <li>• Bluetooth 5.0 BLE</li>
                <li>• LoRaWAN option for remote areas</li>
                <li>• 128-bit AES encryption</li>
                <li>• MQTT protocol</li>
              </ul>
            </div>
            <div className="p-6 border-b md:border-r lg:border-r-0 border-gray-200 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-medium text-gray-900">Analytics</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• Real-time anomaly detection</li>
                <li>• Usage pattern recognition</li>
                <li>• Predictive maintenance alerts</li>
                <li>• Custom threshold settings</li>
                <li>• Historical data storage (up to 10 years)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
