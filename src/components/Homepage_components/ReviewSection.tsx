import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { gsap } from "gsap"

import alex from "../../assets/alex.png"
import christiam from "../../assets/christan.jpeg"
import malcom from "../../assets/malcolm.jpeg"
import aditya from "../../assets/aditya.jpg"

interface Review {
  id: number
  name: string
  designation: string
  companyLogo: string
  review: string
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Malcolm Glen Turner",
    designation: "Retired Global Hotelier & Mentor",
    companyLogo: malcom,
    review:
      "I've known Ajit Thomas for over three decades. First as a bright hotelier and later as one of the most detail-oriented Technical Services professionals I've worked with at Hyatt International Hotels & Resorts. Most impressive is how he evolved from Design & Technical Services to mastering every aspect of Concept to Completion, going on to spearheading full-scale developments with clarity and control. His grasp of design, functionality, and cost is exceptional. Every project he becomes involved in sets a benchmark for both efficiency and product excellence. Structured yet intuitive, Ajit blends passion & precision—values he has clearly instilled in Beetles Consulting."
  },
  {
    id: 2,
    name: "Christian Berglehner",
    designation: "Brimaxx Consultants – Dubai",
    companyLogo: christiam,
    review:
      "I have rarely come across a consulting firm so deeply invested in elevating industry standards. Beetles Consulting, under the leadership of Ajit Thomas, goes far beyond conventional consultancy — bringing knowledge, precision, and genuine care to every assignment. Their ability to blend technical depth with practical insight makes them a true asset to any development. Beetles consistently inspires confidence, trust, and excellence in everyone they collaborate with."
  },
  {
    id: 3,
    name: "Alex Kravetz",
    designation: "Alex Kravetz Design – London",
    companyLogo: alex,
    review:
      "Beetles Consulting and its Founder, Ajit Thomas, stand out as a rare balance of science and sensitivity. Their depth of experience across hospitality projects and cultures worldwide brings a unique advantage, where technical mastery and environmental mindfulness go hand in hand. I particularly value the sharp design understanding and the precision in translating creative vision into reality."
  },
  {
    id: 4,
    name: "Aditya Varma Gokaraju",
    designation: "Laila Hospitality – Owners & Developers",
    companyLogo: aditya,
    review:
      "Beetles Consulting, led by Ajit Thomas, brings exceptional depth in design coordination, technical insight, and project control. What we truly value is their structured, transparent, and ethical way of working — every decision reflects quality, optimization, and sustainability. Working with Beetles feels less like engaging a consultant and more like partnering with a team that shares your vision and takes ownership of your goals."
  }
]

const ReviewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [activeReview, setActiveReview] = useState<Review | null>(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  useEffect(() => {
    if (!activeReview || !modalRef.current) return

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    )
  }, [activeReview])

  const closeModal = () => {
    if (!modalRef.current) return

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setActiveReview(null)
    })
  }

  return (
    <>
      <style>{`
        :root {
          --color-primary: #1F4E79;
          --color-secondary: #f8f9fa;
          --color-accent: #163A5F;
        }
        
        .swiper-pagination-bullet {
          background: var(--color-primary);
          opacity: 0.3;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 5px;
        }
        
        .swiper {
          padding-bottom: 50px !important;
        }
        
        .review-card {
          position: relative;
          overflow: hidden;
        }
        
        .review-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .review-card:hover::before {
          opacity: 1;
        }
        
        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 48px;
          color: var(--color-primary);
          opacity: 0.08;
          font-family: Georgia, serif;
        }
      `}</style>
      
      <section
        ref={sectionRef}
        className="py-24 bg-(--color-secondary) relative overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-(--color-primary) mb-4">
                Trusted by Industry Leaders
              </h2>
              <div className="h-1 bg-linear-to-r from-transparent via-(--color-primary) to-transparent"></div>
            </div>
            <p className="mt-6 text-lg text-(--color-accent) max-w-2xl mx-auto">
              Hear from the professionals who've experienced excellence firsthand
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2, spaceBetween: 40 }
            }}
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div
                  onClick={() => setActiveReview(review)}
                  className="
                    review-card
                    h-full cursor-pointer bg-white rounded-2xl p-8
                    border-2 border-transparent
                    hover:border-(--color-primary)/20
                    hover:shadow-2xl
                    shadow-lg
                    transition-all duration-500
                    transform hover:-translate-y-2
                    flex flex-col justify-between
                    relative
                    group
                  "
                >
                  <span className="quote-icon">"</span>
                  
                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={review.companyLogo}
                        alt={review.name}
                        className="
                          h-16 w-16 rounded-full object-cover
                          border-4 border-white
                          shadow-md
                          ring-2 ring-(--color-primary)/30
                          group-hover:ring-(--color-primary)/50
                          transition-all duration-300
                        "
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-(--color-primary) rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h4 className="font-bold text-(--color-primary) text-lg leading-tight">
                        {review.name}
                      </h4>
                      <p className="text-sm text-(--color-accent) mt-1 leading-snug">
                        {review.designation}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex-1 mb-6">
                    <p className="text-(--color-accent) leading-relaxed line-clamp-6 text-base">
                      "{review.review}"
                    </p>
                  </div>

                  {/* Read More Indicator */}
                  <div className="flex items-center text-(--color-primary) font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    <span>Read full review</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {activeReview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white max-w-3xl w-full rounded-3xl p-10 relative
              shadow-2xl
              border-2 border-(--color-primary)/10
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="
                absolute top-6 right-6 
                w-10 h-10 rounded-full
                bg-(--color-secondary)
                hover:bg-(--color-primary)
                text-(--color-accent)
                hover:text-white
                transition-all duration-300
                flex items-center justify-center
                shadow-md hover:shadow-lg
                group
              "
            >
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex items-start gap-6 mb-8">
              <img
                src={activeReview.companyLogo}
                alt={activeReview.name}
                className="
                  h-24 w-24 rounded-full object-cover shrink-0
                  border-4 border-white
                  shadow-lg
                  ring-4 ring-(--color-primary)/20
                "
              />
              
              <div className="flex-1">
                <h4 className="font-bold text-(--color-primary) text-2xl mb-2">
                  {activeReview.name}
                </h4>
                <p className="text-(--color-accent) font-medium">
                  {activeReview.designation}
                </p>
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="relative">
              <span className="text-8xl text-(--color-primary) opacity-10 font-serif absolute -top-6 -left-2">"</span>
              <p className="text-(--color-accent) text-lg leading-relaxed pl-8 relative z-10">
                {activeReview.review}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ReviewsSection