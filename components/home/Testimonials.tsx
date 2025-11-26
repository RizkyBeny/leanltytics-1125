"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Peri Agus",
        role: "Product Manager at Grab",
        content:
            "Leanlytics helped us cut our research time by 60%. The AI insights are surprisingly accurate and actionable.",
        avatar: "/testimonial-avatar-1.svg",
    },
    {
        name: "Moh. Zein",
        role: "Founder at Selintas Madiun",
        content:
            "The best investment for our market research needs. It's like having a dedicated research team 24/7.",
        avatar: "/testimonial-avatar-2.svg",
    },
    {
        name: "Sarah Wijaya",
        role: "Marketing Director",
        content:
            "Incredible speed and precision. The automated analysis feature is a game-changer for our campaigns.",
        avatar: "/testimonial-avatar-1.svg",
    },
    {
        name: "Budi Santoso",
        role: "Startup Founder",
        content:
            "Finally, a research tool that is affordable for startups but powerful enough for enterprise needs.",
        avatar: "/testimonial-avatar-2.svg",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Trusted by Industry Leaders
                </h2>
            </div>

            <div className="relative w-full">
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-[350px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
