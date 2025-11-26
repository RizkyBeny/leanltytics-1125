"use client";

import { useResearchStore } from "@/store/useResearchStore";
import { motion } from "framer-motion";
import { Check, Home } from "lucide-react";
import Link from "next/link";

export default function StepSuccess() {
    const { reset } = useResearchStore();

    return (
        <div className="text-center py-12">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <Check className="w-12 h-12 text-emerald-600" strokeWidth={3} />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-4"
            >
                Payment Successful!
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 text-blue-700 p-4 rounded-lg max-w-md mx-auto mb-8"
            >
                <p className="font-medium">
                    Your research report is being processed.
                </p>
                <p className="text-sm mt-1">
                    The PDF result will be sent to your email in <strong>2-4 minutes</strong>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Link
                    href="/"
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <Home size={18} />
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
