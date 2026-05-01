import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  Clock3,
  BadgeCheck,
} from "lucide-react";
import form from "../../assets/Contact/form.jpg"

const serviceOptions = [
  "Solar EPC Services",
  "Solar Plant Management Services",
  "Operation & Maintenance",
  "Battery Energy storage system",
  "Solar Pump",
  "Solar Panel Cleaning robot",
  "Third Party Power Purchase"
];

function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Inquiry sent successfully.");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          message: "",
        });
      } else {
        setStatusMessage(data.message || "Failed to send inquiry.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20" id="ContactFormSection ">
      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full  blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full  blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8"
        >
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <BadgeCheck className="h-4 w-4" />
              Usually responds within 24 hours
            </span>

            <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Send Us Your Inquiry
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Tell us about your project, service requirement, or consultation
              need. Our team will review your details and get back with the
              right solution.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Service Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your project requirements or inquiry"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                required
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              
            </div>

            {statusMessage && (
              <div className="sm:col-span-2">
                <p className="text-sm font-medium text-slate-700">
                  {statusMessage}
                </p>
              </div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <img
              src={form}
              alt="Energy infrastructure"
              className="h-72 w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Company Overview
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Reliable Energy Expertise for Modern Infrastructure
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We support industrial and commercial clients with solar EPC,
                electrical systems, energy storage, maintenance, and technical
                consultation designed for long-term performance.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Building2,
                title: "Head Office",
                text: "Virudhunagar, Tamil Nadu, India",
              },
              {
                icon: Mail,
                title: "Email Address",
                text: "info@madhuraecc.com",
              },
              {
                icon: Phone,
                title: "Phone Number",
                text: "+91 9003663660",
              },
              {
                icon: Clock3,
                title: "Working Hours",
                text: "Mon - Sat, 9:00 AM - 6:00 PM",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl  text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactFormSection;