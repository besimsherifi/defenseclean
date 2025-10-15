import ServicesBanner from "../../Components/ServicesBanner";
import CoreValues from "../About/CoreValues";
import HowWeWork from "../About/HowWeWork";
import ServicesGrid from "../About/ServicesGrid";
import Banner from "../../Components/Banner";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

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
                onCtaClick={() => navigate("/contact-us")}
                imageSrc={require("../../assets/banner-image-min.png")}
                imageAlt="Cleaner with gloves"
            />
        </>
    );
}
