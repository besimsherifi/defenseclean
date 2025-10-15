import React from "react";
import imgResidential from "../../assets/residential-cleaning-min.jpg";
import imgCommercial from "../../assets/commercial-cleaning-min.jpg";
import imgMove from "../../assets/move-cleaning-min.jpg";
import imgWindow from "../../assets/specialized-cleaning-min.jpg";
import imgDeep from "../../assets/eco-cleaning-min.jpg";
import imgPost from "../../assets/construction-cleaning-min.jpg";

function ServiceCard({ img, title, text, href = "#" }) {
    return (
        <a
            href={href}
            className="group block overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1"
        >
            <div className="aspect-[4/3] w-full">
                <img src={img} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="bg-black px-6 pb-6 pt-4 text-white">
                <h3 className="text-lg font-extrabold leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{text}</p>
                {/* <p className="mt-3 text-sm font-semibold text-white/90 underline-offset-4 group-hover:underline">
                    Read More
                </p> */}
            </div>
        </a>
    );
}

export default function ComprehensiveServices() {
    return (
        <section className="mx-auto max-w-7xl px-6 sm:px-8 py-20 lg:py-24">
            <header className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Comprehensive Cleaning Services
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    Discover our top-quality cleaning services. From residential to
                    commercial, we deliver exceptional, eco-friendly results with
                    meticulous care. Choose Defense Cleaning for reliable and efficient cleaning.
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                    img={imgResidential}
                    title="Residential Cleaning"
                    text="Keep your home spotless and welcoming with our comprehensive services, from regular housekeeping to deep cleaning."
                />
                <ServiceCard
                    img={imgCommercial}
                    title="Commercial Cleaning"
                    text="Maintain a hygienic workspace with our reliable cleaning solutions for offices, retail spaces, and more, boosting productivity."
                />
                <ServiceCard
                    img={imgMove}
                    title="Move-In/Move-Out Cleaning"
                    text="Ensure a smooth transition with our thorough cleaning services, leaving your new home ready and your old place clean."
                />
                <ServiceCard
                    img={imgWindow}
                    title="Window Cleaning"
                    text="Achieve streak-free clarity with professional window cleaning, enhancing your property’s natural light and appearance."
                />
                <ServiceCard
                    img={imgDeep}
                    title="Deep Cleaning"
                    text="Tackle hidden dirt and buildup with detailed deep cleaning, ideal for periodic refreshes and high-traffic areas."
                />
                <ServiceCard
                    img={imgPost}
                    title="Post-Construction Cleaning"
                    text="Transform newly built or renovated spaces into spotless, ready-to-use environments with our post-construction service."
                />
            </div>
        </section>
    );
}
