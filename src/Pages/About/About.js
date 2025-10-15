import ServicesBanner from "../../Components/ServicesBanner";
import CoreValues from "../About/CoreValues";
import HowWeWork from "../About/HowWeWork";
import ServicesGrid from "../About/ServicesGrid";
import Banner from "../../Components/Banner";
export default function About() {
    return (
        <>
            <ServicesBanner />
            <CoreValues />
            <ServicesGrid />
            <HowWeWork />
            <Banner
                eyebrow="Defense Cleaning"
                titlePrimary="Ready for a"
                titleEmphasis="Spotless Space?"
                ctaText="Book a Visit Now"
                onCtaClick={() => console.log('Book clicked')}
                imageSrc={require("../../assets/banner-image-min.png")}
                imageAlt="Cleaner with gloves"
            />
        </>
    );
}
