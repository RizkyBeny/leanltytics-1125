"use client";

import { useResearchStore } from "@/store/useResearchStore";
import ResearchStepForm from "./ResearchStepForm";
import StepSummary from "./ResearchStepSummary";
import StepPayment from "./StepPayment";
import StepSuccess from "./StepSuccess";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ResearchWizard() {
    const { step } = useResearchStore();

    const steps = [
        { number: 1, label: "Details" },
        { number: 2, label: "Review" },
        { number: 3, label: "Payment" },
        { number: 4, label: "Done" },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
            {/* Tabs Header */}
            <div className="border-b border-gray-100">
                <div className="flex">
                    {steps.map((s) => (
                        <div key={s.number} className="flex-1 relative">
                            <div
                                className={cn(
                                    "py-4 text-center text-sm font-semibold transition-colors duration-300",
                                    step >= s.number ? "text-emerald-600" : "text-gray-400"
                                )}
                            >
                                {s.label}
                            </div>
                            {step >= s.number && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                />
                            )}
                        </div>
                    ))}
                </div>
                {/* Progress Line Background */}
                <div className="h-1 bg-gray-50 w-full relative -mt-1 -z-10"></div>
            </div>

            <div className="p-4 md:p-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && <ResearchStepForm />}
                        {step === 2 && <StepSummary />}
                        {step === 3 && <StepPayment />}
                        {step === 4 && <StepSuccess />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
