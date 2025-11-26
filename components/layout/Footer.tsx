import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                                L
                            </div>
                            <span className="text-xl font-bold text-gray-900">Leanlytics</span>
                        </Link>
                        <p className="text-sm text-gray-500 mb-6">
                            Empowering businesses with deep insights and automated research solutions.
                        </p>
                        <div className="text-sm text-gray-500">
                            <p className="font-medium text-gray-900 mb-1">HQ Address</p>
                            <p>Jakarta, Indonesia</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Case Studies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Leanlytics. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Social links placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
