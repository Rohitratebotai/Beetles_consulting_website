import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

interface ContactInfo {
    icon: string;
    title: string;
    content: string;
    link?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Refs for animations
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const contactInfoRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    const contactDetails: ContactInfo[] = [
        {
            icon: '📧',
            title: 'Email',
            content: 'info@beetlesconsulting.com',
            link: 'mailto:info@beetlesconsulting.com'
        },
        {
            icon: '📞',
            title: 'Phone',
            content: '+91 98765 43210',
            link: 'tel:+919876543210'
        },
        {
            icon: '📍',
            title: 'Office',
            content: 'Mumbai, Maharashtra, India',
            link: '#'
        },
        {
            icon: '🕐',
            title: 'Business Hours',
            content: 'Mon - Fri: 9:00 AM - 6:00 PM',
            link: '#'
        }
    ];


    // Hero animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero background
            gsap.from(heroRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });

            // Title animation with split effect
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.2
            });

            // Subtitle
            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power2.out',
                delay: 0.5
            });

            // Decorative line
            gsap.from('.hero-line', {
                scaleX: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                delay: 0.8
            });
        });

        return () => ctx.revert();
    }, []);

    // Form and content animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate form
            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power3.out'
            });

            // Animate contact info cards
            gsap.from('.contact-card', {
                scrollTrigger: {
                    trigger: contactInfoRef.current,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            });

            // Animate map section
            if (mapRef.current) {
                gsap.from(mapRef.current, {
                    scrollTrigger: {
                        trigger: mapRef.current,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power3.out'
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');

            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
                setSubmitStatus('idle');
            }, 3000);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <div ref={heroRef} className="relative overflow-hidden bg-linear-to-br from-[#1F4E79] via-[#163A5F] to-[#1F4E79] py-24 px-6">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-linear(30deg, transparent 48%, white 50%, transparent 52%)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-200/20 rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-blue-200/20 rotate-45 animate-float-delayed"></div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        Contact Our<br />
                        <span className="text-blue-200">Consulting Team</span>
                    </h1>

                    <div className="hero-line w-32 h-1 bg-white/40 mx-auto mb-8"></div>

                    <p ref={subtitleRef} className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
                        Get in touch to discuss your project needs, schedule a consultation,<br className="hidden md:block" />
                        or learn more about our range of advisory services
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div ref={formRef}>
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E79] mb-3">
                                Start a Conversation
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1F4E79] focus:outline-none transition-colors"
                                        placeholder="Name"
                                    />
                                </div>

                                {/* Email and Phone */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1F4E79] focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1F4E79] focus:outline-none transition-colors"
                                            placeholder="+91 xxxxx xxxxx"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Company / Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1F4E79] focus:outline-none transition-colors"
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Details / Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1F4E79] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project, requirements, and any specific questions you have..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`
                    w-full py-4 px-8 rounded-xl font-semibold text-lg text-white
                    bg-linear-to-r from-[#1F4E79] to-[#163A5F]
                    hover:shadow-2xl hover:scale-105
                    transition-all duration-300
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : submitStatus === 'success' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            ✓ Message Sent Successfully!
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                                        <p className="text-green-800 text-center font-medium">
                                            Thank you for reaching out! We'll get back to you shortly.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div ref={contactInfoRef} className="space-y-8">
                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-[#1F4E79] mb-6">
                                Get In Touch
                            </h3>

                            {contactDetails.map((detail, idx) => (
                                <div
                                    key={idx}
                                    className="contact-card group"
                                >
                                    <a
                                        href={detail.link}
                                        className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-[#1F4E79] mb-1">
                                                {detail.title}
                                            </h4>
                                            <p className="text-gray-700 font-medium">
                                                {detail.content}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Why Choose Us Section */}
                        <div className="bg-linear-to-br from-[#1F4E79] to-[#163A5F] rounded-3xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-blue-100">40+ years of combined expertise</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-blue-100">Global project experience</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-blue-100">End-to-end project support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-blue-100">Proven track record with luxury brands</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-blue-100">24-hour response time</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div ref={mapRef} className="mt-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1F4E79] text-center mb-12">
                        Visit Our Office
                    </h3>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="h-96 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🗺️</div>
                                <p className="text-2xl font-bold text-gray-700">Mumbai, Maharashtra, India</p>
                                <p className="text-gray-600 mt-2">Interactive map integration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(150deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Contact;