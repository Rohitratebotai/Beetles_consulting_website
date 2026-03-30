import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <button
                onClick={scrollToTop}
                className="w-12 h-12 text-4xl rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-secondary)",
                }}
                onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                    "var(--color-primary-dark)")
                }
                onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                    "var(--color-primary)")
                }
                aria-label="Scroll to top"
            >
                <FaArrowUp size={16} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;