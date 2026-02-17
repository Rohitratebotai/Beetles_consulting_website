import PrimaryBanner from "../../commonComponents/PrimaryBanner"
import ReviewsSection from "../../Homepage_components/ReviewSection"
import SplitSection from "../../Homepage_components/SplitSection"
import WhyChooseUs from "../../Homepage_components/WhyChooseUs"
import heroImg from '../../../assets/HeroImage.jpg'
import HorizontalImageSlider from "../../Homepage_components/HorizontalImageSlider"

const Home = () => {
    return (
        <section>
            <div>
                <PrimaryBanner />
                <SplitSection
                    title="Experience Comfort Like Never Before"
                    description="Discover premium stays designed for relaxation and memorable experiences. Perfect for families, couples, and solo travelers."
                    buttonText="Contact Us"
                    image={heroImg}
                    link="/contact"
                />
                <WhyChooseUs />
                <ReviewsSection />
                <HorizontalImageSlider
                />
            </div>
        </section>
    )
}

export default Home