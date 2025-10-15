// WhoWeAre.tsx
export default function WhoWeAre() {
    const items = [
        {
            title: "Our Team",
            text:
                "Our highly trained, experienced cleaners ensure meticulous, thorough cleaning every time.",
        },
        {
            title: "Our Commitment",
            text:
                "We prioritize quality and reliability, tailoring our services to your needs with care and attention.",
        },
        {
            title: "Our Approach",
            text:
                "We use advanced equipment and eco-friendly products for effective, sustainable cleaning.",
        },
        {
            title: "Our Promise",
            text:
                "Customer satisfaction is our priority. We exceed expectations and ensure a pristine space every time.",
        },
    ];

    return (
        <section className="bg-white text-black py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Eyebrow + Headline */}
                <p className="text-gray-600 mb-3 text-sm">Who We Are</p>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                    We are experienced cleaning professionals committed to creating
                    spotless, welcoming environments.
                </h2>

                {/* Divider */}
                <hr className="border-t border-black/20 mb-10" />

                {/* 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {items.map((it, i) => (
                        <div key={i}>
                            <h3 className="text-xl font-semibold mb-3">{it.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{it.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
