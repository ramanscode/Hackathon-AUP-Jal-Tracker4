
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FileText, BookOpen, LineChart, AlertTriangle, Clock } from "lucide-react";

const Research = () => {
  const researchPapers = [
    {
      title: "Smart Water Monitoring Systems: A Comprehensive Review",
      authors: "Kumar, R., Patel, A., & Reddy, V.",
      publication: "Journal of Water Resource Management",
      year: 2022,
      description: "A comprehensive review of existing smart water monitoring technologies and their effectiveness in promoting water conservation.",
      link: "#"
    },
    {
      title: "IoT-Based Solutions for Urban Water Management",
      authors: "Sharma, S., Singh, M., & Kumar, R.",
      publication: "International Journal of Smart Cities",
      year: 2021,
      description: "An analysis of IoT applications in urban water management with case studies from major Indian metropolitan areas.",
      link: "#"
    },
    {
      title: "Machine Learning Approaches for Water Leak Detection",
      authors: "Reddy, V., Gupta, K., & Kumar, R.",
      publication: "IEEE Transactions on Smart Infrastructure",
      year: 2023,
      description: "Novel machine learning algorithms for early detection of water leaks in residential and commercial buildings.",
      link: "#"
    },
    {
      title: "Economic Impact of Smart Water Management Systems",
      authors: "Patel, A., Kumar, R., & Das, S.",
      publication: "Sustainable Economics Journal",
      year: 2022,
      description: "Cost-benefit analysis of implementing smart water monitoring systems across different sectors.",
      link: "#"
    }
  ];

  const governmentInitiatives = [
    {
      title: "National Water Conservation Mission",
      organization: "Ministry of Jal Shakti",
      year: 2021,
      description: "A nationwide initiative to promote water conservation through technology adoption and public awareness.",
      relevance: "JalTrackers technology aligns with the mission's goal of reducing water wastage in urban and rural areas."
    },
    {
      title: "Smart Cities Water Management Framework",
      organization: "Ministry of Housing and Urban Affairs",
      year: 2020,
      description: "Guidelines for implementing smart water management systems in India's 100 Smart Cities project.",
      relevance: "JalTrackers meets the technical specifications outlined in the framework for smart water monitoring."
    },
    {
      title: "Agricultural Water Efficiency Program",
      organization: "Ministry of Agriculture & Farmers Welfare",
      year: 2022,
      description: "Initiative to promote water-efficient irrigation practices through technology adoption.",
      relevance: "JalTrackers agricultural solutions qualify for subsidies under this program for eligible farmers."
    }
  ];

  const futurePlans = [
    {
      title: "Advanced Predictive Analytics",
      description: "Enhancing our AI algorithms to predict water usage patterns with greater accuracy and provide more targeted conservation recommendations.",
      timeline: "Q3 2023",
      icon: LineChart
    },
    {
      title: "Expanded Leak Detection Capabilities",
      description: "Developing more sensitive sensors that can detect micro-leaks and predict potential failure points before they become problematic.",
      timeline: "Q4 2023",
      icon: AlertTriangle
    },
    {
      title: "Historical Data Analysis Tools",
      description: "New tools for analyzing years of water usage data to identify long-term patterns and optimization opportunities.",
      timeline: "Q1 2024",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Research & Development
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Exploring the science behind water conservation and planning for future innovations
            </p>
          </div>

          {/* Research Papers */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <FileText className="h-8 w-8 text-jalblue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Research Publications
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchPapers.map((paper) => (
                <div key={paper.title} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-jalblue-500 mb-1">{paper.authors}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      {paper.publication}, {paper.year}
                    </p>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    <a
                      href={paper.link}
                      className="text-jalblue-600 hover:text-jalblue-700 font-medium"
                    >
                      Read Full Paper →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Initiatives */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-jalblue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Government Initiatives
              </h2>
            </div>
            
            <div className="bg-jalblue-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-8">
                JalTrackers actively collaborates with government agencies and aligns with various water conservation initiatives across India.
              </p>
              
              <div className="space-y-6">
                {governmentInitiatives.map((initiative) => (
                  <div key={initiative.title} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{initiative.title}</h3>
                    <p className="text-jalblue-500 mb-1">
                      {initiative.organization}, {initiative.year}
                    </p>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-gray-900 mb-1">Relevance to JalTrackers:</h4>
                      <p className="text-gray-600">{initiative.relevance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-8 w-8 bg-jalgreen-500 rounded-full flex items-center justify-center text-white">
                <span className="font-bold">R&D</span>
              </div>
              <h2 className="ml-3 text-3xl font-bold text-gray-900">
                Future Development Plans
              </h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">
                  At JalTrackers, we're continuously innovating to improve our water monitoring and conservation technology. Here's what we're working on:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {futurePlans.map((plan) => (
                    <div key={plan.title} className="bg-jalgreen-50 rounded-lg p-6">
                      <div className="rounded-full bg-jalgreen-100 p-3 inline-block mb-4">
                        <plan.icon className="h-6 w-6 text-jalgreen-600" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{plan.title}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="inline-block bg-jalgreen-100 text-jalgreen-800 text-sm px-3 py-1 rounded-full">
                        Expected: {plan.timeline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research Partners */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Research Partners
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["Indian Institute of Technology, Delhi", "National Environmental Engineering Research Institute", "Water Resources Management Authority", "Center for Science and Environment"].map((partner) => (
                  <div key={partner} className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm">
                    <p className="text-center font-medium text-gray-800 px-4">{partner}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Interested in Research Collaboration?
                </h3>
                <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                  We're always looking to partner with academic institutions, research organizations, and industry leaders to advance water conservation technology.
                </p>
                <button className="bg-jalblue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-jalblue-600 transition-colors">
                  Contact Our Research Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
