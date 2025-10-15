
export default function SpotlessHero({
    eyebrow = "",
    titlePrimary = "Ready for a",
    titleEmphasis = "Spotless Space?",
    description =
    "Experience the Defense Cleaning difference. Contact us today for top‑quality cleaning services tailored to your needs. Let us bring sparkle and shine to your space!",
    ctaText = "Book a Visit Now",
    onCtaClick,
    imageSrc = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop",
    imageAlt = "Smiling cleaner wearing yellow gloves",
}) {
    return (
        <section
            className="relative overflow-hidden"
            aria-label="Hero: spotless cleaning"
        >
            {/* Background gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #c7dfeb 0%, #c7dfeb 55%, #0076b4 140%)" }} />

            {/* Subtle vignette */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-white/40 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Copy */}
                    <div>
                        {eyebrow ? (
                            <p className="mb-2 text-sm font-medium tracking-wide text-neutral-700">
                                {eyebrow}
                            </p>
                        ) : null}

                        <h1 className="text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl">
                            {titlePrimary}
                            <br />
                            <span className="text-neutral-900">{titleEmphasis}</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-neutral-700">
                            {description}
                        </p>

                        <div className="mt-8 text-center md:text-left">
                            <button
                                type="button"
                                onClick={onCtaClick}
                                className="inline-flex items-center rounded-xl border border-black/10 bg-[#0076b4] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0076b4]/30 md:mx-0"
                            >
                                {ctaText}
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative mx-auto aspect-[3/4] w-72 max-w-full sm:w-80 lg:w-96">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-full w-full rounded-2xl object-cover"
                                loading="eager"
                            />

                            {/* Yellow glove glow */}
                            <div
                                aria-hidden
                                className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#c7dfeb]/70 blur-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
