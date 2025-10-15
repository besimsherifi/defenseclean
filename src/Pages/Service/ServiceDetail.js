import { useParams, Link } from "react-router-dom";
import banner from "../../assets/service-banner-image-min.jpg";
import residentialImg from "../../assets/service-residential-min.jpg";
import commercialImg from "../../assets/service-commercial-min.jpg";

const serviceDetails = {
    residential: {
        title: "Residential Cleaning",
        subtitle:
            "Keep your home spotless and welcoming with our comprehensive services, from regular housekeeping to deep cleaning.",
        image: residentialImg,
        headline: "Home Sweet Spotless Home",
        description: `
Our Residential Cleaning service is designed to provide you with a spotless and welcoming home environment. Whether you need regular housekeeping or a deep clean, our dedicated team ensures every corner of your home is thoroughly cleaned and maintained.

At Defense Cleaning, we create a pristine, inviting atmosphere tailored to your lifestyle. Our residential services adapt to your needs—whether it’s weekly tidying or seasonal deep cleaning. Using eco-friendly products and meticulous attention to detail, we guarantee your home stays fresh, healthy, and beautifully maintained.

We start with a personal consultation to understand your requirements and design a cleaning plan that fits your schedule. Our regular housekeeping covers dusting, vacuuming, mopping, kitchen and bathroom upkeep, and more. For deeper needs, our intensive cleans reach hidden and often overlooked areas—behind appliances, inside cabinets, and around fixtures.

Our focus on safe, biodegradable cleaning products ensures a healthy home for you and your family while protecting the environment.
    `,
        services: [
            {
                name: "Regular Housekeeping",
                desc: "Dusting, vacuuming, mopping, and tidying of living areas, kitchens, bedrooms, and bathrooms.",
            },
            {
                name: "Deep Cleaning",
                desc: "Intensive cleaning of hard-to-reach and often overlooked areas, including behind appliances and tile grout.",
            },
            {
                name: "Eco-Friendly Products",
                desc: "Non-toxic, biodegradable cleaning solutions for a safe and healthy home.",
            },
            {
                name: "Customized Plans",
                desc: "Weekly, bi-weekly, or monthly schedules tailored to your needs.",
            },
        ],
        closing:
            "Your satisfaction is our top priority. If you're not completely happy with our service, we'll make it right. Contact us today to schedule your Residential Cleaning and enjoy a spotless, stress-free home environment.",
    },

    commercial: {
        title: "Commercial Cleaning",
        subtitle:
            "Create a clean, professional, and safe environment for your team and customers with our flexible commercial cleaning services.",
        image: commercialImg,
        headline: "Clean Spaces, Productive Places",
        description: `
Our Commercial Cleaning service keeps your workplace pristine, safe, and professional. We understand that a clean business environment reflects your brand’s commitment to quality and reliability. From offices and retail stores to warehouses and public buildings, we deliver consistent cleaning that supports productivity and employee well-being.

We tailor every plan to your business’s unique workflow and schedule, ensuring minimal disruption to operations. Whether you need daily maintenance or scheduled deep cleans, our team uses industrial-grade, eco-friendly products and advanced equipment to ensure lasting cleanliness.

Our professional staff adheres to strict quality standards, focusing on high-touch areas, shared workspaces, and customer-facing zones to maintain hygiene and presentability at all times.
    `,
        services: [
            {
                name: "Office Cleaning",
                desc: "Daily or scheduled cleaning of desks, floors, restrooms, kitchens, and conference rooms.",
            },
            {
                name: "Retail & Showroom Care",
                desc: "Spotless spaces that enhance customer experience and reflect your brand image.",
            },
            {
                name: "Industrial Maintenance",
                desc: "Comprehensive cleaning solutions for warehouses, workshops, and logistics facilities.",
            },
            {
                name: "Disinfection Services",
                desc: "Thorough sanitization of high-traffic areas using safe, effective disinfectants.",
            },
        ],
        closing:
            "A clean workplace is a productive one. Partner with us to maintain an environment where employees thrive, clients feel welcome, and your business shines every day.",
    },
};

export default function ServiceDetail() {
    const { type } = useParams();
    const detail = serviceDetails[type];

    if (!detail) {
        return <div className="p-8 text-center text-gray-600">Service not found.</div>;
    }

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">{detail.title}</h1>
                    <p className="max-w-2xl mx-auto mb-6 text-gray-200">{detail.subtitle}</p>
                    <div className="flex justify-center gap-3">
                        <button className="bg-[#f7d54f] text-black font-semibold px-6 py-3 rounded-md">
                            Book an Appointment
                        </button>
                        <Link
                            to="/services"
                            className="border border-gray-300 px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition"
                        >
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className="py-16 px-6 md:px-12 lg:px-32 max-w-6xl mx-auto text-gray-800">
                <h2 className="text-3xl font-bold text-center mb-8">{detail.headline}</h2>
                <div className="space-y-5 leading-relaxed text-sm sm:text-base">
                    {detail.description
                        .trim()
                        .split("\n")
                        .map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                </div>

                {/* Image */}
                <div className="mt-12">
                    <img
                        src={detail.image}
                        alt="Cleaner"
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>

                {/* Services */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Our Services Include:</h3>
                    <ul className="list-disc ml-6 space-y-3">
                        {detail.services.map((s, i) => (
                            <li key={i}>
                                <span className="font-semibold">{s.name}:</span> {s.desc}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Closing */}
                <p className="mt-10 font-semibold text-center">
                    {detail.closing}
                </p>
            </section>
        </div>
    );
}
