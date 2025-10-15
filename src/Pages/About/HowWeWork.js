import leaf from "../../assets/leaf-min.png";
import water from "../../assets/water-min.png";
import recycle from "../../assets/recycle-min.png";
import solution from "../../assets/solution-min.png";
// import { IconWaves, IconRecycle, IconSpark } from "@tabler/icons-react"; // adjust imports if needed

const items = [
    {
        icon: leaf, // still just the path here
        title: "Use biodegradable and non-toxic products",
    },
    {
        icon: water,
        title: "Implement water and energy-saving techniques",
    },
    {
        icon: recycle,
        title: "Recycle and reduce waste effectively",
    },
    {
        icon: solution,
        title: "Seek innovative, eco-friendly solutions",
    },
];

export default function HowWeWork() {
    return (
        <section className="mx-auto max-w-7xl px-6 sm:px-8 py-20 lg:py-28 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Explore Our Eco-Friendly
                <br /> Commitment and Green Initiatives
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-[15px] leading-7 text-neutral-600">
                We are dedicated to a cleaner world, not just cleaner spaces. Our eco-friendly
                practices ensure safety for you and the environment. By using sustainable
                techniques and products, we minimize our environmental impact. That’s why we:
            </p>

            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {items.map((it) => (
                    <div key={it.title} className="mx-auto max-w-xs">
                        <div className="mb-5 flex items-center justify-center">
                            {typeof it.icon === "string" ? (
                                <img src={it.icon} alt={it.title} className="w-10 h-10 object-contain" />
                            ) : (
                                it.icon
                            )}
                        </div>
                        <h3 className="text-xl font-extrabold leading-snug">{it.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
