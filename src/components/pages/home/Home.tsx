import PrimaryBanner from "../../commonComponents/PrimaryBanner"
import ReviewsSection from "../../Homepage_components/ReviewSection"
import SplitSection from "../../Homepage_components/SplitSection"
import WhyChooseUs from "../../Homepage_components/WhyChooseUs"
import heroImg from '../../../assets/HeroImage.jpg'
import HorizontalImageSlider from "../../Homepage_components/HorizontalImageSlider"

const items = [
  {
    id: 1,
    title: "Temple View",
    image:
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Forest Trail",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "River Side",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
];

console.log(items,'items')

const Home = () => {
    return (
        <section>
            <div>
                <PrimaryBanner />
                <SplitSection
                    title="Experience Comfort Like Never Before"
                    description="Discover premium stays designed for relaxation and memorable experiences. Perfect for families, couples, and solo travelers."
                    buttonText="Explore"
                    image={heroImg}
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