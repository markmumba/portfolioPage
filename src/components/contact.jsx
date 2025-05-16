import React, { useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import PolkaDotBackground from "./PolkaDotBackground";

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.text);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.text?.includes("insufficient authentication scopes")) {
        setError(
          "Email service configuration error. Please contact the website administrator."
        );
      } else {
        setError("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#070F10] text-white relative overflow-hidden"
    >
      <PolkaDotBackground />
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-emerald-500 mb-4">
            <span className="text-emerald-400 text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or interested in working together? I'd love
            to hear from you. Feel free to reach out using the form below or
            through my social platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info - 2 columns on md+ screens */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-black border border-gray-800 p-6 rounded-md shadow-xl">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-black border border-gray-800 rounded-md mr-4">
                    <Mail className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:mumbamarkian@gmail.com"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      mumbamarkian@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-black border border-gray-800 rounded-md mr-4">
                    <Phone className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:+254798169252"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      +254 798 169 252
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-3">Social Platforms</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/markmumba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black border border-gray-800 rounded-md hover:border-emerald-500 transition-colors group"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/markian-mumba-67231517a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black border border-gray-800 rounded-md hover:border-emerald-500 transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-gray-400 mb-3">Current Availability</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <p className="font-medium">
                    Available for freelance projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns on md+ screens */}
          <div className="md:col-span-3">
            <div className="bg-black border border-gray-800 p-6 rounded-md shadow-xl">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                {success && (
                  <div className="text-emerald-500 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-md transition-colors flex items-center justify-center gap-2 group ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send
                      size={18}
                      className={`transform group-hover:translate-x-1 transition-transform ${
                        loading ? "animate-pulse" : ""
                      }`}
                    />
                  </button>
                </div>
              </form>

              <p className="text-center text-gray-400 text-sm mt-6">
                I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
