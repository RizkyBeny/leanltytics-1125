"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BejoFinance() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 rounded-full border border-gray-200 text-gray-600 text-xs font-medium mb-6"
                        >
                            New Product
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Personal Financial Assistant
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-500 mb-8 leading-relaxed"
                        >
                            Whether you need to track expenses, set budgets, or plan for the
                            future, our AI assistant is here to help you achieve your financial
                            goals with ease and precision.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-200"
                            >
                                Try It Out
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative z-10"
                        >
                            {/* Phone Mockup Placeholder */}
                            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
                                    {/* Screen Content */}
                                    <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center text-white p-6 text-center">
                                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                                            <span className="text-2xl font-bold">$</span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Total Balance</h4>
                                        <p className="text-3xl font-bold text-emerald-400 mb-8">$24,500.00</p>
                                        <div className="w-full space-y-3">
                                            <div className="h-12 bg-white/10 rounded-lg w-full"></div>
                                            <div className="h-12 bg-white/10 rounded-lg w-full"></div>
                                            <div className="h-12 bg-white/10 rounded-lg w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl -z-10 opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
