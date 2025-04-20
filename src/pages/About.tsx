
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About JalTrackers
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Our mission is to promote responsible water usage through innovative technology
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                JalTrackers was founded in 2022 by a team of engineers and environmental scientists passionate about addressing the global water crisis through technology. 
              </p>
              <p className="text-gray-600 mb-4">
                After witnessing the impact of water scarcity firsthand across various regions in India, our founders, Raman Kumar and team, set out to create an accessible solution that would empower individuals and organizations to monitor and optimize their water usage.
              </p>
              <p className="text-gray-600">
                From our humble beginnings as a research project, JalTrackers has grown into a comprehensive water management platform that combines IoT sensors, cloud computing, and artificial intelligence to deliver actionable insights on water consumption patterns.
              </p>
            </div>
          </div>

          <div className="bg-jalblue-50 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At JalTrackers, we believe that responsible water management begins with awareness. Our mission is to make water usage visible, understandable, and manageable for everyone.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-jalblue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2">Developing accessible technology that promotes water conservation</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-jalblue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2">Educating communities about water efficiency and sustainability</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-jalblue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2">Collaborating with government agencies, businesses, and NGOs to scale our impact</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-jalblue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2">Contributing to research and innovation in water management technologies</p>
                </li>
              </ul>
              <p className="text-gray-600">
                By empowering users with real-time data and actionable insights, we aim to foster a culture of water conservation that has a meaningful impact on both local communities and global water resources.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full bg-jalblue-100 mx-auto flex items-center justify-center">
                    <span className="text-jalblue-600 text-4xl font-bold">RK</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Raman Kumar</h3>
                  <p className="text-jalblue-500">Team Leader </p>
                  
                </div>
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full bg-jalblue-100 mx-auto flex items-center justify-center">
                    <span className="text-jalblue-600 text-4xl font-bold">AP</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Tanvi Bhardwaj</h3>
                  <p className="text-jalblue-500">Team Member</p>
                  
                </div>
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full bg-jalblue-100 mx-auto flex items-center justify-center">
                    <span className="text-jalblue-600 text-4xl font-bold">VR</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Ankit Singh</h3>
                  <p className="text-jalblue-500">Team Member</p>
                  
                </div>
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full bg-jalblue-100 mx-auto flex items-center justify-center">
                    <span className="text-jalblue-600 text-4xl font-bold">VR</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Aadarsh Jhs</h3>
                  <p className="text-jalblue-500">Team Member</p>
                  
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

export default About;
