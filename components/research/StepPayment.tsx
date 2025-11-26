"use client";

import { useResearchStore } from "@/store/useResearchStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function StepPayment() {
    const { setStep } = useResearchStore();
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
    const [isChecking, setIsChecking] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    const handleCheckStatus = () => {
        setIsChecking(true);
        setTimeout(() => {
            setIsChecking(false);
            setStep(4);
        }, 2000); // Simulate 2s loading
    };

    return (
        <div className="text-center space-y-8">
            <div>
                <p className="text-gray-500 mb-2">Complete payment before</p>
                <div className="text-4xl font-mono font-bold text-emerald-600">
                    {formatTime(timeLeft)}
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 inline-block shadow-sm">
                <div className="relative w-64 h-64 mx-auto mb-4">
                    <Image
                        src="/qris-mock.svg"
                        alt="QRIS Code"
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Scan QR above using your favorite e-wallet
                </p>
                <div className="flex justify-center gap-4 opacity-60 grayscale">
                    {/* Placeholder for payment logos if needed, text for now */}
                    <span className="text-xs font-bold">GOPAY</span>
                    <span className="text-xs font-bold">OVO</span>
                    <span className="text-xs font-bold">DANA</span>
                    <span className="text-xs font-bold">BCA</span>
                </div>
            </div>

            <button
                onClick={handleCheckStatus}
                disabled={isChecking}
                className="w-full py-4 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isChecking ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Checking Payment Status...
                    </>
                ) : (
                    "Check Payment Status"
                )}
            </button>
        </div>
    );
}
