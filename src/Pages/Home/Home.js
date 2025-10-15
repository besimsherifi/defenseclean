import image from '../../assets/test-min.jpg';
import Banner from '../../Components/Banner';
import WhoWeAre from '../../Components/WhoAreWe';
import WhyChooseUs from '../../Components/WhyChooseUS';
import SplitServices from '../Home/SplitServices';

export default function Home() {
    return (
        <>
            <section className="relative grid lg:grid-cols-2 gap-8 lg:gap-0 overflow-hidden bg-white py-10 md:py-14 lg:py-0 lg:min-h-[75vh]">
                {/* Left */}
                <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-0 lg:py-20 self-center text-center lg:text-left xl:mx-[150px]">
                    <span className="inline-block bg-[#0076b4] text-xs sm:text-sm font-semibold px-3 py-1 rounded-md text-white">
                        Pristine Perfection
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-snug">
                        Sparkle & Shine:<br className="hidden sm:block" /> Trusted Cleaning Experts
                    </h1>

                    <p className="mt-3 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
                        Experience a spotless sanctuary with our expert cleaning services.
                        Reliable, thorough, and tailored to your needs.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                        <button className="bg-black text-white px-5 py-3 rounded-md text-sm sm:text-base">
                            Book an Appointment
                        </button>
                        <button className="border border-[#0076b4] text-black px-5 py-3 rounded-md hover:bg-[#0076b4] hover:text-white text-sm sm:text-base">
                            Our Services
                        </button>
                    </div>
                </div>

                {/* Right image — hidden on mobile */}
                <div className="relative w-full h-48 sm:h-64 md:h-[420px] lg:h-auto hidden lg:block">
                    <img
                        src={image}
                        alt="Cleaning service"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </section>

            <section>
                <SplitServices />
            </section>

            <section className='my-20'>
                <WhyChooseUs />
            </section>

            <section>
                <WhoWeAre />
            </section>

            <section>
                <Banner
                    eyebrow="Defense Cleaning"
                    titlePrimary="Ready for a"
                    titleEmphasis="Spotless Space?"
                    ctaText="Book a Visit Now"
                    onCtaClick={() => console.log('Book clicked')}
                    imageSrc={require('../../assets/banner-image-min.png')}
                    imageAlt="Cleaner with gloves"
                />
            </section>
        </>
    );
}
