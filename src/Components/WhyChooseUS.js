export default function WhyChooseUs() {
    const stats = [
        { value: "50+", label: "Years of Experience" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "1,000+", label: "Spaces Cleaned" },
        { value: "100%", label: "Eco-Friendly Products" },
    ];

    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                    Discover our difference with our exceptional cleaning services,
                    backed by impressive numbers that demonstrate our commitment to
                    quality and customer satisfaction.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="border border-primary rounded-md py-10 px-6 shadow-sm hover:bg-[#111] transition"
                        >
                            <p className="text-4xl font-extrabold mb-2">{stat.value}</p>
                            <p className="text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
