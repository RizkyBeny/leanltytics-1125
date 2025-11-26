"use client";

import { motion } from "framer-motion";
import { BarChart3, FileText, PieChart } from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "End to End Research",
        description:
            "Comprehensive research solutions from problem definition to final reporting.",
    },
    {
        icon: PieChart,
        title: "AI Survey Generator",
        description:
            "Instantly generate unbiased survey questions tailored to your specific objectives.",
    },
    {
        icon: BarChart3,
        title: "AI Auto Analysis",
        description:
            "Turn raw data into actionable insights with our automated analysis engine.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Core Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Everything you need to conduct professional market research.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                                <service.icon
                                    size={24}
                                    className="text-gray-600 group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
