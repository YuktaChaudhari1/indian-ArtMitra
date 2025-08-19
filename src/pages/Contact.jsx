import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have questions, feedback, or just want to say hello? We’d love to
              hear from you! Reach out through the form or the details below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-purple-700 w-6 h-6" />
                <span className="text-gray-800">artmitra@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-700 w-6 h-6" />
                <span className="text-gray-800">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-700 w-6 h-6" />
                <span className="text-gray-800">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-6">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
