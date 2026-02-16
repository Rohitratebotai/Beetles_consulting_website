import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaShieldAlt,
  FaEye,
  FaBolt,
  FaStar,
  FaRoute,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const BeetlesStorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const spiritRef = useRef<HTMLDivElement>(null);
  const traitsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(headerRef.current, {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          introRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          factsRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          spiritRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".trait-card",
          {
            y: 40,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  const beetleTraits = [
    {
      icon: <FaShieldAlt className="text-white text-2xl drop-shadow-md" />,
      title: "Armored in Experience",
      description: "Yet open to innovation",
    },
    {
      icon: <FaEye className="text-white text-2xl drop-shadow-md" />,
      title: "Silent Workers",
      description: "Yet always present in outcome",
    },
    {
      icon: <FaBolt className="text-white text-2xl drop-shadow-md" />,
      title: "Unshakable Under Pressure",
      description: "Yet agile in shifting terrain",
    },
    {
      icon: <FaStar className="text-white text-2xl drop-shadow-md" />,
      title: "Unseen Heroes",
      description: "Working behind the scenes so others shine",
    },
    {
      icon: <FaRoute className="text-white text-2xl drop-shadow-md" />,
      title: "Path Finders",
      description: "Always looking forward, no matter how complex",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden bg-linear-to-br from-slate-50 via-gray-50 to-blue-50"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e0f2fe 100%)'
      }}
    >
      {/* Animated background elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{ backgroundColor: '#1F4E79' }}
      ></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"
        style={{ backgroundColor: '#6B7280' }}
      ></div>
      <div
        className="absolute -bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{ backgroundColor: '#163A5F' }}
      ></div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg mb-6"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(31, 78, 121, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <svg
              className="w-8 h-8"
              style={{ color: '#1F4E79' }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            <span
              className="text-sm font-bold tracking-wide"
              style={{ color: '#1F4E79' }}
            >
              OUR STORY
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span style={{
              background: 'linear-gradient(to right, #1F4E79, #163A5F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Beetles?
            </span>
          </h2>
        </div>

        {/* Introduction */}
        <div ref={introRef} className="max-w-4xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-light">
            When people first hear our name, they often pause. Here's our perspective — hope you find this interesting and relatable.
          </p>
        </div>

        {/* Nature's Engineers */}
        <div
          ref={factsRef}
          className="rounded-3xl shadow-2xl p-8 md:p-12 mb-16"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(31, 78, 121, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nature's Original Problem-Solvers
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In the natural world, there is no creature more versatile, more resilient, or more underestimated than the beetle.
                </p>
                <p>
                  Beetles are the largest group of animals on the planet, accounting for{" "}
                  <strong style={{ color: '#1F4E79' }}>nearly 25% of all known life forms</strong>. From icy tundras to arid deserts, from high forests to decaying logs — beetles are everywhere, thriving where others fail, adapting where others falter.
                </p>
                <p>
                  Some beetles are so breathtaking they look like living gemstones with metallic greens, violets, purples, and radiant golds. Others are iconic — think of the ladybug with her bright red cloak or the feared cockroach, one of the few species predicted to survive a nuclear holocaust.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                style={{ backgroundColor: '#1F4E79' }}
              ></div>
              <div
                className="relative rounded-2xl p-8 text-white"
                style={{
                  background: 'linear-gradient(135deg, #1F4E79 0%, #163A5F 100%)'
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Armor-Like Exoskeletons</h4>
                      <p className="text-blue-50">Shielding delicate inner systems from the harsh outside world</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Masters of Adaptation</h4>
                      <p className="text-blue-50">Camouflage, flight, burrowing, mimicry, or metamorphosis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Unbreakable Resilience</h4>
                      <p className="text-blue-50">They endure, evolve, and emerge — always finding a way forward</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Spirit Section */}
        <div ref={spiritRef} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Spirit of Beetles,{" "}
            <span style={{
              background: 'linear-gradient(to right, #1F4E79, #163A5F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The Soul of Our Work
            </span>
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Beetles Consulting, we drew inspiration from these remarkable creatures not just for their survival, but for their{" "}
            <strong style={{ color: '#1F4E79' }}>elegance in survival</strong>. In today's complex environment of hospitality development — filled with shifting codes, rising costs, rigid brand standards, uncertain markets — the answer is not brute strength. It is{" "}
            <strong style={{ color: '#1F4E79' }}>adaptability. Creativity. Timing. Sensitivity. Precision.</strong>
          </p>
        </div>

        {/* Beetle Traits Grid */}
        <div ref={traitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beetleTraits.map((trait, index) => (
            <div
              key={index}
              className="trait-card group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(31, 78, 121, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(31, 78, 121, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(31, 78, 121, 0.1)';
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4
             group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1F4E79 0%, #163A5F 100%)'
                }}
              >
                {trait.icon}
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-2">{trait.title}</h4>
              <p className="text-gray-600 italic">{trait.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div
          className="rounded-3xl shadow-2xl p-12 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #1F4E79 0%, #163A5F 100%)'
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            More Than a Name — A Mindset
          </h3>
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            So yes, we are proud to be called <strong>Beetles</strong>. It's not just a name. It's a symbol of versatility, a reminder of nature's finest engineers, and a quiet nudge that resilience is an art — not just an instinct.
          </p>
          <div className="inline-block">
            <div className="text-2xl md:text-3xl font-bold mb-2">Beetles Consulting</div>
            <div className="text-blue-100 text-lg">
              Versatile. Adaptive. Sensitive. Survivors — with a purpose.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeetlesStorySection;