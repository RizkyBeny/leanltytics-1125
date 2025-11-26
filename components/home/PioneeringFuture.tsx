"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PioneeringFuture() {
    return (
        <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
            {/* Abstract Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 text-xs font-medium mb-6 backdrop-blur-sm"
                        >
                            Our Vision
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Pioneering the Future of Research
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 mb-8 leading-relaxed"
                        >
                            We combine advanced AI algorithms with human expertise to deliver
                            insights that are not just accurate, but actionable and
                            forward-thinking.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Learn More
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Abstract Visual / Stats */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <h4 className="text-3xl font-bold text-emerald-400 mb-2">10x</h4>
                                    <p className="text-sm text-gray-400">Faster Analysis</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <h4 className="text-3xl font-bold text-blue-400 mb-2">99%</h4>
                                    <p className="text-sm text-gray-400">Accuracy Rate</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <h4 className="text-3xl font-bold text-purple-400 mb-2">24/7</h4>
                                    <p className="text-sm text-gray-400">AI Availability</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <h4 className="text-3xl font-bold text-orange-400 mb-2">50+</h4>
                                    <p className="text-sm text-gray-400">Data Sources</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
