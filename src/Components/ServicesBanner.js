import React from "react";

export default function ServicesBanner({
    title = "Get to Know Our\nCommitment to Excellence",
    eyebrow = "",
    subtitle =
    "Discover our dedication to superior cleaning, driven by a team of experienced professionals. Learn more about our journey, values, and commitment to quality.",
    bgImage = require("../assets/services-header-img-min.jpg"),
}) {
    return (
        <section className="relative isolate">
            {/* Background image */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/55 to-black/65" aria-hidden="true" />

            {/* Content */}
            <div className="mx-auto max-w-7xl px-6 sm:px-8">

                <div className="pb-24 pt-8 sm:pb-28 sm:pt-10 md:pb-36 md:pt-16 lg:pb-40 lg:pt-24 text-center">
                    {eyebrow ? (
                        <p className="mb-3 text-sm font-medium tracking-wide text-[#c7dfeb]">{eyebrow}</p>
                    ) : null}

                    <h1 className="mx-auto max-w-4xl whitespace-pre-line text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                        {title}
                    </h1>

                    {subtitle ? (
                        <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-white/80">
                            {subtitle}
                        </p>
                    ) : null}
                </div>
            </div>

            {/* Bottom separator to blend with next section */}
            <div className="h-px w-full bg-white/10" />

            {/* Themed CSS variables for primary/secondary if you want to reuse */}
            <style>{`
        :root {
          --primary: #0076b4;
          --secondary: #c7dfeb;
        }
      `}</style>
        </section>
    );
}