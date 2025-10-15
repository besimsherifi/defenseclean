import React from "react";
import imgResidential from "../../assets/residential-min.jpg";
import imgCommercial from "../../assets/commercial-min.jpg";
import imgMove from "../../assets/movein-min.jpg";

function ServiceCard({ img, title, href = "#" }) {
    return (
        <a
            href={href}
            className="group block overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1"
        >
            <div className="aspect-[4/3] w-full">
                <img src={img} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="bg-black px-6 pb-6 pt-4 text-white">
                <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
            </div>
        </a>
    );
}

export default function ServicesGrid() {
    return (
        <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
            <header className="mx-auto mb-10 max-w-3xl text-center">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Comprehensive Cleaning Solutions
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    We offer top-quality cleaning services tailored to your needs. Our team
                    ensures every corner shines for a clean and healthy environment.
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard img={imgResidential} title="Residential Cleaning" />
                <ServiceCard img={imgCommercial} title="Commercial Cleaning" />
                <ServiceCard img={imgMove} title="Move-In/Move-Out Cleaning" />
            </div>
        </section>
    );
}
