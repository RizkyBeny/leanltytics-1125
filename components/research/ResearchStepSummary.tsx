"use client";

import { useResearchStore } from "@/store/useResearchStore";
import { ArrowLeft, CreditCard } from "lucide-react";

export default function StepSummary() {
    const { data, setStep } = useResearchStore();

    // Mock Order ID
    const orderId = "LN.D64D.J8HDXVNDRM765";

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

                <div className="space-y-6">
                    {/* Order ID */}
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <span className="text-gray-500 font-medium">Order ID</span>
                        <span className="font-mono text-gray-900 font-medium">{orderId}</span>
                    </div>

                    {/* Topic */}
                    <div className="pb-4 border-b border-gray-200">
                        <span className="block text-gray-500 font-medium mb-1">Deep Research Topic</span>
                        <span className="block text-gray-900 font-medium text-lg">
                            {data.topic || "Market Research AI Market Research Tools"}
                        </span>
                    </div>

                    {/* Category */}
                    <div className="pb-4 border-b border-gray-200">
                        <span className="block text-gray-500 font-medium mb-1">Category</span>
                        <span className="block text-gray-900 font-medium">
                            {data.category || "Market Research"}
                        </span>
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-3 pt-2">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Research Price:</span>
                            <span className="text-gray-900 font-medium">10000</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Admin Fee:</span>
                            <span className="text-gray-900 font-medium">4500</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                            <span className="text-lg font-bold text-gray-900">Order Total:</span>
                            <span className="text-xl font-bold text-emerald-600">Rp 14500</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>
                <button
                    onClick={() => setStep(3)}
                    className="flex-[2] py-4 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
                >
                    Proceed to Payment
                    <CreditCard size={20} />
                </button>
            </div>
        </div>
    );
}
