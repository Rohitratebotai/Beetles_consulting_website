import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
// import Button from './Button'

const PrimaryBanner = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(
        () => {
            gsap.from('.hero-animate', {
                y: 60,
                autoAlpha: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                delay: 0.5,
                clearProps: 'all',
            })
        },
        { scope: containerRef } // 👈 IMPORTANT
    )

    return (
        <section>
            <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-black overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src='https://res.cloudinary.com/dgm2im3i1/video/upload/v1771224742/bannerVideo_3_1_j9bmcc.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div
                    ref={containerRef}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                >
                    <h1 className="hero-animate text-4xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
                        WELCOME TO Beetles Consulting
                    </h1>

                    <p className="hero-animate text-lg md:text-2xl text-center max-w-2xl mb-6 text-gray-200 drop-shadow-lg">
                        Empowering organizations with smart strategies, digital transformation,
                        and sustainable business growth.
                    </p>

                    {/* <div className="hero-animate pointer-events-auto">
                        <Button>Get Started</Button>
                    </div> */}
                </div>

                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
            </section>
        </section>
    )
}

export default PrimaryBanner
