
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 123 456 7890", "+91 987 654 3210"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jaltrackers.com", "support@jaltrackers.com"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Water Conservation Street", "Tech Park, Bangalore 560001"],
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, support, or partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jalblue-500 focus:border-jalblue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jalblue-500 focus:border-jalblue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jalblue-500 focus:border-jalblue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jalblue-500 focus:border-jalblue-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jalblue-500 focus:border-jalblue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-jalblue-500 text-white py-3 px-6 rounded-md font-medium hover:bg-jalblue-600 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-jalblue-600 rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-6">
                    Feel free to reach out to us through any of the following channels. Our team is available to assist you with any questions or concerns.
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex">
                        <div className={`rounded-full ${item.color} p-3 h-12 w-12 flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium">{item.title}</h3>
                          {item.details.map((detail, index) => (
                            <p key={index} className="text-jalblue-100">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Connect With Us
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Follow us on social media for the latest updates, water conservation tips, and success stories.
                  </p>
                  
                  <div className="flex space-x-4">
                    {[
                      { name: "Facebook", color: "bg-blue-500" },
                      { name: "Twitter", color: "bg-sky-500" },
                      { name: "LinkedIn", color: "bg-blue-700" },
                      { name: "Instagram", color: "bg-pink-500" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                      >
                        <span className="sr-only">{social.name}</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Visit Our Office
                </h2>
                <div className="aspect-video bg-gray-200 rounded-lg"></div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Our headquarters is conveniently located in the heart of Bangalore's Tech Park, easily accessible by public transportation.
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

export default Contact;
