"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
    {
        title: "Consumer Consulting",
        description:
            "Get deep insights into consumer behavior and market trends to drive your business strategy.",
        image: "/hero-illustration.svg", // Using existing mock as placeholder
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
        title: "AI Survey Generator",
        description:
            "Create professional surveys in seconds with our advanced AI-powered generation tool.",
        image: "/hero-illustration.svg",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
];

export default function ValueProps() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full border border-gray-200 text-gray-600 text-xs font-medium mb-4"
                    >
                        Our Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-2xl"
                    >
                        Research Innovation for Your Business Growth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl"
                    >
                        Accelerate your research process with our AI-driven tools that cut
                        down manual work by half.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-[400px]"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {feature.description}
                                    </p>
                                    <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                        Learn more <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Placeholder Image Background */}
                            <div className="absolute inset-0 bg-gray-50">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
