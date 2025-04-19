
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Cpu, Cloud, Server, Smartphone, Database, BarChart, Lock, Zap } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Technology
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              The innovative technology stack powering JalTrackers' water monitoring system
            </p>
          </div>

          {/* Tech Stack Overview */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
                Technology Stack Overview
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="rounded-full bg-jalblue-100 p-6 mx-auto w-24 h-24 flex items-center justify-center">
                    <Cpu className="h-10 w-10 text-jalblue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">IoT Hardware</h3>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>• Custom flow sensors</li>
                    <li>• ESP32 microcontrollers</li>
                    <li>• Low-power radio modules</li>
                    <li>• Lithium polymer batteries</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="rounded-full bg-jalblue-100 p-6 mx-auto w-24 h-24 flex items-center justify-center">
                    <Cloud className="h-10 w-10 text-jalblue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Cloud Infrastructure</h3>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>• AWS IoT Core</li>
                    <li>• Serverless Functions</li>
                    <li>• Real-time data processing</li>
                    <li>• Elastic scaling architecture</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="rounded-full bg-jalblue-100 p-6 mx-auto w-24 h-24 flex items-center justify-center">
                    <Database className="h-10 w-10 text-jalblue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Data Analytics</h3>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>• TensorFlow ML models</li>
                    <li>• Time-series analysis</li>
                    <li>• Anomaly detection</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="rounded-full bg-jalblue-100 p-6 mx-auto w-24 h-24 flex items-center justify-center">
                    <Smartphone className="h-10 w-10 text-jalblue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">User Interfaces</h3>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>• React Native mobile apps</li>
                    <li>• Web dashboard</li>
                    <li>• REST API</li>
                    <li>• Notification system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* System Workflow */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
                System Workflow
              </h2>
              
              <div className="relative max-w-4xl mx-auto">
                {/* Flow Chart */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Data Collection */}
                  <div className="bg-jalblue-50 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="rounded-full bg-jalblue-500 p-3 mx-auto inline-block">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">Data Collection</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Sensors measure water flow rates, pressure, and temperature</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Data is buffered locally on the device</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Secure transmission to cloud via WiFi or LoRaWAN</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Data Processing */}
                  <div className="bg-jalblue-50 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="rounded-full bg-jalblue-500 p-3 mx-auto inline-block">
                        <Server className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">Data Processing</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Real-time data validation and cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Anomaly detection algorithms identify unusual patterns</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Data is stored in time-series databases for analysis</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* User Interface */}
                  <div className="bg-jalblue-50 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="rounded-full bg-jalblue-500 p-3 mx-auto inline-block">
                        <BarChart className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">User Interface</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Processed data displayed on mobile and web dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Alerts and notifications for unusual events</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-jalblue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Interactive reports and recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Connecting arrows (visible only on md+ screens) */}
                <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2 w-1/3">
                  <svg width="100%" height="20" className="text-jalblue-500">
                    <line x1="0" y1="10" x2="90%" y2="10" stroke="currentColor" strokeWidth="2" />
                    <polygon points="100%,10 90%,5 90%,15" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="hidden md:block absolute top-1/2 left-2/3 transform -translate-y-1/2 w-1/3">
                  <svg width="100%" height="20" className="text-jalblue-500">
                    <line x1="0" y1="10" x2="90%" y2="10" stroke="currentColor" strokeWidth="2" />
                    <polygon points="100%,10 90%,5 90%,15" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Key Technology Innovations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-jalgreen-500 rounded-lg shadow-lg overflow-hidden text-white">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Sensor Technology</h2>
                <p className="mb-4">
                  Our patented non-invasive sensors use ultrasonic technology to measure water flow without requiring pipe modifications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ultrasonic Doppler flow measurement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Battery life exceeding 5 years</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accuracy within ±0.1 liters per minute</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supports pipe diameters from 15mm to 300mm</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-jalblue-600 rounded-lg shadow-lg overflow-hidden text-white">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">AI & Machine Learning</h2>
                <p className="mb-4">
                  Our proprietary algorithms learn from water usage patterns to provide increasingly accurate predictions and insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Neural networks for pattern recognition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seasonal usage forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Appliance-specific usage detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continuous learning from user feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security & Reliability */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Security & Reliability
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="rounded-md bg-jalblue-100 p-3">
                      <Lock className="h-6 w-6 text-jalblue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Data Security</h3>
                    <ul className="mt-2 text-gray-600 space-y-1">
                      <li>• End-to-end encryption for all data transmission</li>
                      <li>• ISO 27001 certified security practices</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Compliance with GDPR and other data regulations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="rounded-md bg-jalblue-100 p-3">
                      <Zap className="h-6 w-6 text-jalblue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">System Reliability</h3>
                    <ul className="mt-2 text-gray-600 space-y-1">
                      <li>• 99.9% uptime SLA for cloud services</li>
                      <li>• Offline data buffering on devices</li>
                      <li>• Redundant data storage across multiple zones</li>
                      <li>• Automatic failover mechanisms</li>
                    </ul>
                  </div>
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

export default Technology;
