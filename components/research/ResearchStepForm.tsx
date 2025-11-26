"use client";

import { useResearchStore } from "@/store/useResearchStore";
import { AlertCircle } from "lucide-react";

export default function ResearchStepForm() {
    const { data, updateData, setStep } = useResearchStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
                <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-xs font-medium mb-4">
                    Leanlytics Research Assistant
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    Create publication with AI Research Assistant
                </h1>
                <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                    You can whip up a research draft quicker, so you can spend more time
                    validating and fine-tuning your methodology for even better results!
                </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-2 mb-4 flex items-center justify-center gap-2 text-xs font-medium">
                <AlertCircle size={16} className="text-gray-900" />
                <span>Special Price Only IDR 10.000</span>
                <span className="text-red-500 font-bold">(Disc. 90% OFF)</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-500">
                        Your Email
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="Enter email address"
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400"
                        value={data.email}
                        onChange={(e) => updateData({ email: e.target.value })}
                    />
                </div>

                {/* Topic */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">
                        Topic
                    </label>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-2 flex gap-2 items-start">
                        <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <p className="text-xs text-red-600 font-medium leading-relaxed">
                            Notes: Please avoid using special characters like (&quot;&quot;,.,
                            &#123;&#125;), etc also avoid using the enter to prevent the error
                        </p>
                    </div>
                    <input
                        type="text"
                        required
                        placeholder="Input your topic"
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400"
                        value={data.topic}
                        onChange={(e) => updateData({ topic: e.target.value })}
                    />
                </div>

                {/* Categories */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">
                        Select Categories
                    </label>
                    <select
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                        value={data.category}
                        onChange={(e) => updateData({ category: e.target.value })}
                    >
                        <option value="" disabled>
                            Select...
                        </option>
                        <option value="Market Research">Market Research</option>
                        <option value="Academic Research">Academic Research</option>
                        <option value="Policy Research">Policy Research</option>
                    </select>
                </div>

                {/* Research Objective */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">
                        Research Objective
                    </label>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-3 items-start">
                        <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <p className="text-xs text-red-600 font-medium leading-relaxed">
                            Notes: Please avoid using special characters like (&quot;&quot;,.,
                            &#123;&#125;), etc also avoid using the enter to prevent the error
                        </p>
                    </div>
                    <textarea
                        required
                        placeholder="Type your research objective here"
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all min-h-[80px] placeholder:text-gray-400 resize-none"
                        value={data.objective}
                        onChange={(e) => updateData({ objective: e.target.value })}
                    />
                </div>

                {/* URL Reference */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">
                        URL Reference
                    </label>
                    <input
                        type="url"
                        placeholder="Insert URL Reference"
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400"
                        value={data.urlReference}
                        onChange={(e) => updateData({ urlReference: e.target.value })}
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-emerald-500 text-white py-3 rounded-full font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
