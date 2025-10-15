import React from "react";
import bucketImg from "../../assets/service-image-min.jpg";

export default function CoreValues() {
    return (
        <section className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16 lg:py-24">
            {/* Content */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Image */}
                <div className="relative">
                    <img
                        src={bucketImg}
                        alt="Cleaning supplies"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </div>

                {/* Values */}
                <div className="space-y-10">
                    <ValueItem
                        index="01."
                        title="Exceed Expectations"
                        text="We deliver cleaning services that go above what clients expect. Attention to detail and a drive for excellence keep every space spotless and welcoming."
                    />
                    <ValueItem
                        index="02."
                        title="Uphold Integrity"
                        text="Honesty and transparency guide our operations. We follow high ethical standards, build trust, and foster long-term client relationships."
                    />
                    <ValueItem
                        index="03."
                        title="Ensure Reliability"
                        text="We are dependable and consistent. Clients can count on us to arrive on time, work efficiently, and provide the same quality every session."
                    />
                    <ValueItem
                        index="04."
                        title="Prioritize Customer Satisfaction"
                        text="Client satisfaction is the priority. We listen to needs, tailor services, and ensure clients are completely happy with the results."
                    />
                </div>
            </div>
        </section>
    );
}

function ValueItem({ index, title, text }) {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-4">
            <span className="pt-1 text-base font-semibold text-[#0076b4]">{index}</span>
            <div>
                <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-neutral-600">{text}</p>
            </div>
        </div>
    );
}
