import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from '../assets/logo-transparent-min.png';

const nav = {
    company: [
        { label: "About Us", href: "/about" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* CTA card */}
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 shadow-sm">
                        <div className="mb-6 flex items-center gap-3">
                            <img src={logo} alt="Defense Cleaning Logo" className="h-8 w-auto [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.35))]" />
                            <div className="leading-tight">
                            </div>
                        </div>

                        <h3 className="max-w-xl text-xl font-semibold text-neutral-100">
                            Need assistance or have questions? Get in touch with us directly.
                        </h3>
                        <p className="mt-2 text-neutral-400">We respond within one business day.</p>

                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Links */}
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h4 className="mb-4 text-sm font-semibold text-neutral-100">Company</h4>
                            <ul className="space-y-3 text-sm">
                                {nav.company.map((i) => (
                                    <li key={i.label}>
                                        <a
                                            href={i.href}
                                            className="text-neutral-400 transition hover:text-neutral-100"
                                        >
                                            {i.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-sm font-semibold text-neutral-100">Contact Us</h4>
                            <ul className="space-y-3 text-sm text-neutral-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-4 w-4 text-neutral-500" />
                                    <span>Kaiserstraße 133, Karlsruhe 76133</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-neutral-500" />
                                    <a href="tel:+11234567890" className="hover:text-neutral-100">
                                        +491729253085
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-neutral-500" />
                                    <a
                                        href="mailto:info@defensecleaning.com"
                                        className="hover:text-neutral-100"
                                    >
                                        info@defenseclean.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 border-t border-neutral-800 pt-6 text-sm">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-neutral-500">
                            © {new Date().getFullYear()} Defense Cleaning. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="#facebook"
                                aria-label="Facebook"
                                className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#linkedin"
                                aria-label="LinkedIn"
                                className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="#instagram"
                                aria-label="Instagram"
                                className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}