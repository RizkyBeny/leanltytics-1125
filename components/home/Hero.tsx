"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 text-sm font-medium mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Gain Deep Insights & Automate Research
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight max-w-5xl mx-auto"
                >
                    Gain Deep Insights & Automate Research with{" "}
                    <span className="text-emerald-500">Cutting-Edge AI Technology</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto"
                >
                    The smartest way to conduct research, analyze data, and generate reports
                    in minutes, not weeks.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Link
                        href="/ai-research-assistant"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-emerald-500 rounded-full hover:bg-emerald-600 shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                        href="#demo"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-900"
                    >
                        See How It Works
                    </Link>
                </motion.div>

                {/* Stats / Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-gray-100 pt-10 max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="font-medium text-gray-600">100% Free Queries</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-gray-600">Certified Researcher</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-500" />
                        <span className="font-medium text-gray-600">Certified Data Expert</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
