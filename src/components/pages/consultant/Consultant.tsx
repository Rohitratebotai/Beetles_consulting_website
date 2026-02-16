import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ajit from '../../../assets/consultants/ajit_thomas.jpg'
import mukund from '../../../assets/consultants/Mukund_sahasrabudhe.png'
import kanwaljit from '../../../assets/consultants/Kanwaljit _Walia.png'
import mathai from '../../../assets/consultants/P. C. Mathai.png'
import abi from '../../../assets/consultants/Abi Thomas.png'
import madhu from '../../../assets/consultants/Dr. Madhu Chandhok.jpg'
import rohin from '../../../assets/consultants/Rohin Ailawadi.jpg'

gsap.registerPlugin(ScrollTrigger);

interface Consultant {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    expertise: string[];
    projects: string[];
    awards?: string[];
}

const consultantsData: Consultant[] = [
    {
        id: 1,
        name: 'Ajit Thomas',
        role: 'Founder & Principal – Project Control & Hospitality Development Advisor',
        image: ajit,
        bio: 'A globally respected Concept-to-Completion Specialist who has successfully delivered 20+ luxury hotel projects across 15 countries for the world\'s most iconic brands Hyatt, Four Seasons, Fairmont, Mariott, Mandarin, Rosewood, Hilton, Radisson etc, among others.',
        expertise: [
            'Project Control & Technical Services',
            'Property Audits & Improvement Plans',
            'Hospitality Development Advisory',
            'End-to-end Project Oversight'
        ],
        projects: [
            'HITS – Hyatt International Technical Services',
            'Chris Garrod Global (CGG) - COO and Acting CEO',
            'Beetles Consulting - Founder (2019)',
            'Jaivik Farms - Regenerative Natural Farming',
            'WeGrowWood India - Co-founder'
        ],
        awards: [
            'Vanashree Award (2023) - State Govt of Maharashtra',
            'Achievers Award (2024) - Excellence in Contribution to Hospitality',
            'Legends of IHM Mumbai - Times of India'
        ]
    },
    {
        id: 2,
        name: 'Mukund Sahasrabudhe',
        role: 'Senior Associate Consultant – Design Management, Engineering, MEPF Services, Technical Services & Project Management',
        image: mukund,
        bio: 'A highly accomplished engineer with over four decades of experience, bringing deep technical acumen and leadership strength to Beetles Consulting\'s Technical Services Hub.',
        expertise: [
            'Electrical System Design',
            'MEPF Integration',
            'Energy & Safety Optimisation',
            'Specification Writing & Tender Evaluation',
            'Cost Rationalisation & PIP Assessments'
        ],
        projects: [
            'Courtyard by Marriott (now Crowne Plaza) Pune',
            'Crown Plaza Nairobi',
            'Radisson Blu Marathahalli Bangalore',
            'Radisson Hitec City Gachibowli Hyderabad',
            'Grand Mercure Agra',
            'PYC Hindu Gymkhana Club Pune',
            'Carneval Resorts Goa'
        ]
    },
    {
        id: 3,
        name: 'Kanwaljit Walia',
        role: 'Senior Associate Consultant – Design Management, Engineering, MEPF Services, Technical Services & Project Management',
        image: kanwaljit,
        bio: 'With over thirty-five years of experience in engineering leadership across global hotel brands, representing a blend of deep technical mastery and hands-on operational insight.',
        expertise: [
            'HVAC Engineering',
            'Energy Efficiency & Sustainability',
            'MEP Systems Leadership',
            'Pre-opening & Commissioning',
            'Performance Management'
        ],
        projects: [
            'Sheraton Oman – Muscat',
            'Le Royal Meridien Abu Dhabi',
            'The Westin Pune',
            'The Westin Gurgaon',
            'Taj Palace Hotel New Delhi',
            'Jai Mahal Palace Jaipur',
            'Rambagh Palace Jaipur Renovation'
        ]
    },
    {
        id: 4,
        name: 'P. C. Mathai',
        role: 'Senior Associate Consultant – MEP & Project Coordination',
        image: mathai,
        bio: 'With over three decades of experience spanning India and the Middle East, one of the most seasoned engineering professionals within Beetles Consulting\'s Technical Services Hub.',
        expertise: [
            'MEP Systems Installation & Commissioning',
            'Project Coordination',
            'Vendor & Authority Interface',
            'Multi-disciplinary Engineering',
            'Healthcare & Hospitality MEP'
        ],
        projects: [
            'The Grand Hyatt Goa',
            'The Four Seasons Mumbai',
            'Hilton Shillim Resort & Spa',
            'Soho House Mumbai',
            'Le Meridien Kovalam',
            'The Bahrain Mall',
            'Hinduja Hospital Mumbai'
        ]
    },
    {
        id: 5,
        name: 'Abi Thomas',
        role: 'Associate Consultant – Technical Services Support & Procurement',
        image: abi,
        bio: 'A key member of the Beetles Consulting Technical Services Hub, actively supporting the firm\'s growing portfolio of hospitality and mixed-use developments across India and South Asia.',
        expertise: [
            'FF&E and OS&E Procurement',
            'Kitchen & Laundry Coordination',
            'Technical Documentation Management',
            'Vendor Interface & Tender Evaluation',
            'Specification Tracking & Logistics'
        ],
        projects: [
            'Grand Hyatt Mumbai',
            'Hyatt Regency Kolkata & Delhi',
            'Sheraton Bangalore',
            'Conrad Hilton',
            'Six Senses Bharvada',
            'Mandarin Oriental Kuala Lumpur',
            'Westin Kolkata'
        ]
    },
    {
        id: 6,
        name: 'Dr. Madhu Chandhok',
        role: 'Senior Associate Consultant – Brand Development, Design & Product Enhancement',
        image: madhu,
        bio: 'A stalwart of Indian hospitality with over four decades of leadership in hospitality design, interiors, FF&E, and brand development. Known for creative precision and functional design sensibility.',
        expertise: [
            'Interior Design Direction',
            'FF&E & HOE Procurement',
            'Brand Compliance',
            'Refurbishment Strategy',
            'Property Improvement Plans (PIP)'
        ],
        projects: [
            'The Lalit (Bharat Hotels) Portfolio',
            'Holiday Inn & Crowne Plaza',
            'InterContinental Hotels',
            'Hilton & DoubleTree by Hilton',
            'Conrad & Hilton Garden Inn',
            'Radisson & Wyndham Hotels'
        ],
        awards: [
            'Visiting Faculty at OCLD (The Oberoi Centre)',
            'Faculty at ISH (Indian School of Hospitality)'
        ]
    },
    {
        id: 7,
        name: 'Rohin Ailawadi',
        role: 'Senior Associate Consultant – Engineering Systems, Technology & Sustainability',
        image: rohin,
        bio: 'Brings over four decades of multifaceted engineering expertise, combining technical mastery, strategic insight, and operational excellence. Marine engineer background with extensive hospitality experience.',
        expertise: [
            'Engineering Systems Design',
            'Total Productive Maintenance (TPM)',
            'Energy Optimization',
            'Fire & Life Safety Design',
            'Engineering Audits & PIP'
        ],
        projects: [
            'Hyatt Hotels - Engineering Operations',
            'Taj Hotels - Maintenance & Energy',
            'Aman Resorts - Engineering Excellence',
            'Unitech Group - Corporate Engineering',
            'Hilton Worldwide Technical Services'
        ]
    }
];

const Consultants: React.FC = () => {
    const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Refs for GSAP animations
    const headerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    // Header animation on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate header background
            gsap.from(headerRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });

            // Animate title with split effect
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2
            });

            // Animate underline
            gsap.from('.header-underline', {
                scaleX: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                delay: 0.6
            });

            // Animate subtitle
            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.8
            });
        });

        return () => ctx.revert();
    }, []);

    // Cards animation with ScrollTrigger
    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom-=100',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        y: 60,
                        rotateX: -15,
                        duration: 0.8,
                        ease: 'power3.out',
                        delay: index * 0.1
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []);

    // Modal animation
    useEffect(() => {
        if (selectedConsultant && modalRef.current) {
            const ctx = gsap.context(() => {
                // Backdrop fade in
                gsap.from(modalRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Modal slide up and scale
                gsap.from('.modal-content', {
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    duration: 0.8,
                    ease: 'power3.out'
                });

                // Animate modal sections
                gsap.from('.modal-section', {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power2.out',
                    delay: 0.3
                });
            });

            return () => ctx.revert();
        }
    }, [selectedConsultant]);

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Header Section with Animated Background */}
            <div ref={headerRef} className="relative overflow-hidden bg-[#1F4E79] py-20 px-6">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-linear(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Our Experts
                    </h1>
                    <div className="header-underline w-24 h-1 bg-white/30 mx-auto mb-6"></div>
                    <p ref={subtitleRef} className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
                        A collective of world-class professionals delivering excellence in hospitality development,
                        engineering, and design across continents
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Consultants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {consultantsData.map((consultant, index) => (
                        <div
                            key={consultant.id}
                            ref={(el) => { cardsRef.current[index] = el }}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredId(consultant.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelectedConsultant(consultant)}
                        >
                            {/* Card Container */}
                            <div className={`
                            relative bg-white rounded-2xl overflow-hidden shadow-lg
                                transform transition-all duration-500 ease-out
                                ${hoveredId === consultant.id ? 'scale-105 shadow-2xl -translate-y-2' : 'scale-100'}
                                    hover:shadow-[0_20px_60px_-15px_rgba(31,78,121,0.3)]
              `}>
                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden bg-linear-to-br from-slate-200 to-slate-300">
                                    <img src={consultant.image} alt={consultant.name} className="w-full h-full object-cover" />
                                    <div className={`
                                    absolute inset-0 bg-[#1F4E79]/0 group-hover:bg-[#1F4E79]/10
                                    transition-all duration-500
                  `}></div>

                                    {/* Overlay linear */}
                                    <div className={`
                                absolute inset-0 bg-linear-to-t from-[#1F4E79]/90 via-[#1F4E79]/20 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  `}></div>

                                    {/* "View Profile" Indicator */}
                                    <div className={`
                                absolute inset-0 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-all duration-500
                                transform group-hover:scale-100 scale-90
                  `}>
                                        <div className="bg-white/95 px-6 py-3 rounded-full shadow-xl">
                                            <span className="text-[#1F4E79] font-semibold text-sm">View Profile</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#1F4E79] mb-2 group-hover:text-[#163A5F] transition-colors">
                                        {consultant.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                        {consultant.role}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`
                  h-1 bg-linear-to-r from-[#1F4E79] to-[#163A5F]
                  transform origin-left transition-transform duration-500
                  ${hoveredId === consultant.id ? 'scale-x-100' : 'scale-x-0'}
                `}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Modal */}
            {selectedConsultant && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedConsultant(null)}
                >
                    <div
                        className="modal-content bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="modal-section flex gap-4 sticky top-0 z-10 bg-linear-to-r from-[#1F4E79] to-[#163A5F] text-white p-8 rounded-t-3xl">
                            <div>
                                <img
                                    src={selectedConsultant.image}
                                    alt={selectedConsultant.name}
                                    className="object-cover object-center w-32 h-32 rounded-full border-4 border-white mb-4"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={() => setSelectedConsultant(null)}
                                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white transition-colors  duration-300"
                                >
                                    <span className="text-3xl hover:text-[#1F4E79] hover:rotate-90 transition-all duration-300">×</span>
                                </button>
                                <h2 className="text-4xl font-bold mb-3">{selectedConsultant.name}</h2>
                                <p className="text-blue-100 text-lg font-light">{selectedConsultant.role}</p>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            {/* Bio */}
                            <div className="modal-section mb-8">
                                <h3 className="text-2xl font-bold text-[#1F4E79] mb-4 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#1F4E79] rounded-full"></div>
                                    Biography
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {selectedConsultant.bio}
                                </p>
                            </div>

                            {/* Expertise */}
                            <div className="modal-section mb-8">
                                <h3 className="text-2xl font-bold text-[#1F4E79] mb-4 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#1F4E79] rounded-full"></div>
                                    Core Expertise
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedConsultant.expertise.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-4 bg-linear-to-br from-blue-50 to-slate-50 rounded-xl hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#1F4E79] mt-2 shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Projects */}
                            <div className="modal-section mb-8">
                                <h3 className="text-2xl font-bold text-[#1F4E79] mb-4 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#1F4E79] rounded-full"></div>
                                    Notable Projects & Experience
                                </h3>
                                <div className="space-y-3">
                                    {selectedConsultant.projects.map((project, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 border-l-4 border-[#1F4E79] bg-slate-50 rounded-r-xl hover:bg-slate-100 transition-colors"
                                        >
                                            <span className="text-gray-700 font-medium">{project}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Awards */}
                            {selectedConsultant.awards && selectedConsultant.awards.length > 0 && (
                                <div className="modal-section">
                                    <h3 className="text-2xl font-bold text-[#1F4E79] mb-4 flex items-center gap-3">
                                        <div className="w-1 h-8 bg-[#1F4E79] rounded-full"></div>
                                        Awards & Recognition
                                    </h3>
                                    <div className="space-y-3">
                                        {selectedConsultant.awards.map((award, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl border-l-4 border-amber-400"
                                            >
                                                <span className="text-gray-700 font-medium">{award}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style >{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default Consultants;