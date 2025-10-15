import ComprehensiveServices from "./ComprehensiveServices";
import Banner from '../../Components/Banner';



export default function Services() {
    return (
        <>
            <ComprehensiveServices />
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
