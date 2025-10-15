import React from "react";
import { Link } from "react-router-dom";
import sideImg from "../../assets/home-cleaning-min.jpg";

function ServiceBlock({ title, text, href = "#" }) {
    return (
        <div className="rounded-2xl bg-neutral-900 px-8 py-10 text-white shadow-sm">
            <h3 className="text-xl font-extrabold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">{text}</p>

            <Link
                to={href}
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#F4E46D]/10"
            >
                Learn More
            </Link>
        </div>
    );
}

export default function SplitServices() {
    return (
        <section className="mx-auto max-w-7xl px-6 sm:px-8 py-20 lg:py-24">
            {/* Header */}
            <header className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Comprehensive Cleaning Solutions
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    At Defense Cleaning, we provide top-quality cleaning services tailored to your
                    needs. Our team ensures every corner of your space shines. Here’s what we offer:
                </p>
            </header>

            {/* Split layout */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                {/* Left: stacked cards */}
                <div className="space-y-8">
                    <ServiceBlock
                        title="Residential Cleaning"
                        text="Keep your home spotless and welcoming with our comprehensive services, from regular housekeeping to deep cleaning."
                        href="/services/residential"
                    />
                    <ServiceBlock
                        title="Commercial Cleaning"
                        text="Maintain a hygienic workspace with our reliable cleaning solutions for offices, retail spaces, and more, boosting productivity."
                        href="/services/commercial"
                    />
                </div>

                {/* Right: tall image */}
                <div className="relative">
                    <img
                        src={sideImg}
                        alt="Cleaning glass"
                        className="h-full w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
