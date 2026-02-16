import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface SplitSectionProps {
    title: string;
    description: string;
    buttonText: string;
    image: string;
    reverse?: boolean;
}

const SplitSection: React.FC<SplitSectionProps> = ({
    title,
    description,
    buttonText,
    image,
    reverse = false,
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true, // animation runs only once
                },
            });

            tl.from(textRef.current, {
                x: reverse ? 80 : -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }).from(
                imageRef.current,
                {
                    x: reverse ? -80 : 80,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.3"
            );
        },
        { scope: sectionRef, dependencies: [reverse] }
    );

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col md:flex-row items-center gap-12 px-8 md:px-20 py-20 w-full mx-auto overflow-hidden"
        >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-(--color-primary) opacity-5 blur-3xl -z-10"></div>

            <div
                className={`flex flex-col md:flex-row items-center gap-12 w-full ${reverse ? "md:flex-row-reverse" : ""
                    }`}
            >
                {/* Content */}
                <div ref={textRef} className="md:w-1/2 space-y-6">
                    <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-(--color-primary) text-white">
                        Featured
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-(--color-primary-dark) leading-tight">
                        {title}
                    </h2>

                    <p className="text-lg text-(--color-accent) leading-relaxed">
                        {description}
                    </p>

                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative px-8 py-4 rounded-full font-semibold text-white 
            bg-(--color-primary) 
            hover:bg-(--color-primary-dark)
            transition-all duration-300 shadow-lg"
                    >
                        <span className="flex items-center gap-2">
                            {buttonText}
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Image */}
                <div ref={imageRef} className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-(--color-primary) opacity-20 rounded-2xl blur-xl"></div>

                    <img
                        src={image}
                        alt="section"
                        className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                    />

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -left-6 bg-(--color-secondary) p-4 rounded-xl shadow-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-(--color-primary) rounded-full flex items-center justify-center text-white font-bold">
                                ★
                            </div>
                            <div>
                                <div className="font-bold text-(--color-primary-dark)">
                                    Top Rated
                                </div>
                                <div className="text-sm text-(--color-accent)">
                                    5.0 stars
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitSection;
