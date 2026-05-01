import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const serviceContent = {
  "solar-epc-services": {
    tag: "About the Service",
    title: "Complete Solar EPC Made Simple and Reliable",
    description:
      "Madhura Energy’s Complete Solar EPC Services is developed in such a manner that your journey to solar energy is not only easy but also efficient. We ensure that your solar energy requirements are fulfilled in the best manner. We believe in simplicity, quality, and reliability in all aspects of our business. We plan and design your solution in such a manner that it is exactly what you need. After that, our highly experienced and qualified professionals ensure that you get what you need in the most efficient manner, which not only maximizes your output but also saves costs. We ensure that we provide only the best quality solar panels that guarantee longevity. We have experienced professionals who ensure that your solar panel system is installed according to industry standards. We also ensure that all compliance requirements are met, so you do not have to worry about that either! Madhura Energy is dedicated to building long-term relationships with our valuable customers. ",
    path: "/solar-epc-solutions",
  },

  "solar-plant-management": {
    tag: "About the Service",
    title: "Efficient Rooftop Solar Solutions",
    description:
      "Manage the renewable energy production from your solar array in an intelligent manner to guarantee uninterrupted and efficient energy generation at any time. Madhura Energy provides reliable solar energy services tailored to commercial and industrial customers. Our solar energy solutions include monitoring, servicing, and optimizing your solar energy systems, allowing you to achieve maximum generation and long-term operational success. By leveraging both leading-edge technology and expert personnel, we will enable you to seamlessly and cost-effectively operate your solar energy projects.",
    path: "/solar-plant-management",
  },

  "solar-battery-storage-services": {
    tag: "About the Service",
    title:
      "Store energy smartly and power your life smoothly without any interruptions anytime",
    description:
      "Madhura Energy provides reliable energy battery storage system services for residential and commercial needs. Our solutions help store extra electricity and use it during peak hours or power outages, ensuring uninterrupted power supply. We offer complete services including energy analysis, planning, and customized system design based on your requirements. Our expert team ensures safe installation and efficient performance. Our systems are easy to use, durable, and built with high-quality standards. With our solutions, you can reduce energy waste, improve efficiency, and lower costs. We also support renewable energy like solar, delivering safe and dependable power every day.",
    path: "/battery-storage",
  },

  "solar-operation-and-maintenance-services": {
    tag: "About the Service",
    title: "Solar Operation and Maintenance Services in India for Solar Systems",
    description:
      "Your solar systems will operate at peak efficiency and dependability thanks to our solar operation and maintenance services. To identify problems early and prevent unplanned breakdowns, we offer preventative maintenance, routine inspections, and continuous monitoring. To reduce downtime and safeguard your investment, our methodical approach includes real-time performance tracking, prompt servicing, and quick problem solving. We increase system longevity and energy output by maintaining every part, from panels to inverters. You may make better decisions and achieve long-term operational success by having clear visibility into system health, maintenance activities, and performance trends through transparent reporting and data-driven insights.",
    path: "/operation-maintenance",
  },
  "solar-panel-cleaning-robot-services": {
    tag: "About the Service",
    title: "Automated Solar Panel Cleaning Robots Solutions",
    description:
      "Continuous exposure to dust, grime, and environmental buildup can progressively lower solar panel's overall energy output and efficiency. This accumulation could result in poor performance and increased maintenance requirements if it is not cleaned on a regular basis. This problem is solved by solar cleaning robots, which offer a dependable, automated solution that preserves panel efficiency without the need for human interaction.These systems guarantee that panels are cleaned effectively and reliably under a variety of circumstances by adhering to predetermined cycles. They remove dust and grime effectively, promoting stable energy output and reducing efficiency fluctuations. The automated approach also makes maintenance more predictable and organized by minimizing the need for manual labor.",
    path: "/solar-plant-cleaning-robots",
  },
  "solar-pump-services": {
    tag: "About the Service",
    title: "Complete solar pump solutions for smart water management",
    description:
      "Our solar pump services are designed to provide reliable and sustainable water solutions for various applications, including agriculture, residential, and industrial use. We offer end-to-end services, starting from understanding your water requirements to selecting the right solar pump system. Our team ensures professional installation, seamless integration, and ongoing support to guarantee optimal performance. Solar pumps operate using renewable energy, reducing dependency on electricity and fuel while lowering operational costs. These systems are built for durability and require minimal maintenance, making them a smart long-term investment. Whether you need irrigation support for farming or water supply for commercial purposes, our solar pump solutions deliver efficiency, reliability, and environmental benefits. We are committed to helping you transition to clean energy while ensuring uninterrupted water availability.",
    path: "/solar-pump",
  },
  "third-party-solar-power-purchase-services": {
    tag: "About the Service",
    title: "Efficient and cost-saving power procurement solution",
    description:
      "Third party solar power purchase in India is an advanced energy solution designed for businesses seeking cost savings and reliability. By purchasing electricity directly from independent power producers, companies can reduce dependence on traditional electricity boards and gain better control over energy expenses. Our service ensures a smooth process, starting from understanding your requirements to final execution and ongoing support. We handle supplier identification, agreement drafting, compliance, and power transmission coordination. This solution is ideal for industries aiming to improve efficiency and adopt sustainable practices. With our expertise, businesses can enjoy uninterrupted power supply, predictable costs, and long-term financial benefits. We focus on delivering customised solutions that match your operational needs while ensuring compliance with all regulatory norms.",
    path: "/third-party-power-purchase"
  }

};

function Summary() {
  const { slug } = useParams();
  const service = serviceContent[slug];

  if (!service) {
    return (
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-bold">Service not found</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-12">
            {/* Left side */}
            <div className="border-b border-white/10 p-8 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r">
              <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                {service.tag}
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {service.title}
              </h2>
            </div>

            {/* Right side */}
            <div className="p-8 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="max-w-4xl text-base leading-8 text-slate-300 sm:text-lg text-justify">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Summary;
