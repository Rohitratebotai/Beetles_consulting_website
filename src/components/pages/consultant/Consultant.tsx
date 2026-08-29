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
import shariff from '../../../assets/consultants/shariff.jpeg'
import sanjay from '../../../assets/consultants/sanjay_sharma.jpeg'

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
        bio: `Ajit Thomas is a globally respected Concept-to-Completion Specialist who has successfully delivered 20+ luxury hotel projects across 15 countries for the world’s most iconic brands including Hyatt, Four Seasons, Fairmont, Marriott, Mandarin Oriental, Rosewood, Hilton, and Radisson among others.

He was part of HITS – Hyatt International Technical Services, the core team behind some of Hyatt’s finest global properties. Later, he worked as Client’s Project Director and President – Projects, steering overall development initiatives.

He subsequently led the acquisition and expansion of Chris Garrod Global (CGG), a London-based consultancy, as its COO and Acting CEO, overseeing diverse scopes across simultaneous projects in North America, Europe, the Middle East, South Asia, and the Far East — delivering globally benchmarked hospitality and development solutions.

He founded Beetles Consulting in 2019, which undertakes roles such as Project Control, Technical Services, Property Audits, Property Improvement Plans, and Hospitality Development Advisory, offering end-to-end project oversight and owner representation.

A practicing regenerative natural farmer, Ajit founded Jaivik Farms (www.jaivik-farms.com), a farm-to-fork venture rooted in soil rejuvenation and nutrient-rich, naturally nurtured foods.

He co-founded WeGrowWood India with WeGrow Germany, establishing large-scale plantations of Paulownia Phoenix 1 (Kiri) trees — the world’s fastest-growing hardwood with one of the highest known carbon sequestration capacities, creating multiple long-term carbon sinks while enabling a sustainable renewable timber supply.

Through Vrikshlife Agrifarms and his collaboration with Forest Creators, Ajit has led, inspired, and helped plant over 6 lakh trees across India.

Recipient of the Vanashree Award (2023) from the Government of Maharashtra and the Achievers Award (2024) for Excellence in Contribution to Hospitality, he was also honoured in “Legends of IHM Mumbai” by Times of India, celebrating 70 legendary alumni in 70 years of IHM.`,
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
        bio: `A highly accomplished engineer with over four decades of experience, Mukund Sahasrabudhe brings deep technical acumen and leadership strength to Beetles Consulting’s Technical Services Hub. With more than two decades in senior engineering roles within the hospitality industry, he has successfully guided multiple hotel and mixed-use developments from design through operations, ensuring excellence in delivery, coordination, and performance.

Over the course of his career, Mukund has been instrumental in key assignments such as Courtyard by Marriott (now Crowne Plaza) Pune, Crowne Plaza Nairobi (formerly Sarovar), Radisson Blu Marathahalli Bangalore, Radisson Hitec City Gachibowli Hyderabad, Grand Mercure Agra (formerly Sarovar Premiere), PYC Hindu Gymkhana Club Pune, and Carneval Resorts Goa, along with extensive engagement on multiple Sarovar Hotels projects across India covering property development, energy optimisation, and safety audits.

His expertise spans electrical system design, MEPF integration, energy and safety optimisation, specification writing, tender evaluation, cost rationalisation, and PIP assessments, ensuring every project under his guidance is both technically sound and future-ready.

Widely respected for transforming complex engineering principles into practical, efficient, and sustainable outcomes, Mukund strengthens Beetles Consulting’s mission to deliver performance-driven, brand-compliant, and sustainable hospitality infrastructure across India and South Asia.`,
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
        bio: 'With over thirty-five years of experience in engineering leadership across global hotel brands, Kanwaljit Walia represents a blend of deep technical mastery and hands-on operational insight. An Engineer with additional certification in HVAC, he has held key engineering roles with The Taj Group, ITT Sheraton, Starwood Hotels, and Marriott International, leading complex projects from pre-opening through steady-state operations. Kanwal has been instrumental in the planning, commissioning, and performance management of several landmark hotels, including Sheraton Oman – Muscat, Le Royal Meridien Abu Dhabi, The Westin Pune, The Westin Gurgaon, Taj Palace Hotel New Delhi, Jai Mahal Palace Jaipur, Taj Sheba Sana’a – Yemen, and the iconic Rambagh Palace Jaipur renovation. His leadership is defined by a meticulous focus on energy efficiency, reliability, and sustainability — ensuring that each asset achieves long-term operational excellence. At Beetles Consulting, Kanwal lends his extensive field experience and systems understanding to strengthen our MEP and technical services delivery, guiding projects toward brand-aligned, sustainable, and performance-driven outcomes.',
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
        bio: 'With over three decades of experience spanning India and the Middle East, P. C. Mathai is one of the most seasoned engineering professionals within Beetles Consulting’s Technical Services Hub. A qualified Electrical Engineer with deep multidisciplinary exposure to construction, installation, testing, and commissioning of complete MEP systems, he has led and coordinated the delivery of several landmark hospitality and healthcare developments. His career includes senior assignments with The Oberoi Hotels, DB Hospitality, Hinduja Hospital, CGG South Asia, and international chains such as Soho House London, Le Meridien, and Hilton Hotels. Mathai has been instrumental in the successful execution of prestigious projects including The Grand Hyatt Goa, The Four Seasons Mumbai, Hilton Shillim Resort & Spa, Soho House Mumbai, Le Meridien Kovalam, The Bahrain Mall, and Hinduja Hospital Mumbai. Renowned for his meticulous project coordination, vendor and authority interface, and end-to-end oversight of MEP services, he embodies Beetles Consulting’s commitment to precision, integrity, and timely completion. His leadership strengthens our ability to deliver technically sound, brand-compliant, and operationally efficient hospitality assets across South Asia.',
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
        bio: `A key member of the Beetles Consulting Technical Services Hub, Abi actively supports the firm’s growing portfolio of hospitality and mixed-use developments across India and South Asia. With a focused specialization in technical coordination and procurement, she plays a vital role in bridging design, documentation, and delivery across multiple disciplines.

Her expertise spans FF&E and OS&E procurement, kitchen and laundry coordination, and technical documentation management — ensuring that each project meets brand standards, operational functionality, and commercial objectives.

Abi has been instrumental in procurement coordination and technical support for several prestigious hotel projects including Grand Hyatt Mumbai, Hyatt Regency Kolkata, Hyatt Regency Delhi, Sheraton Bangalore, Conrad Hilton, Six Senses Bharvada, Hyatt Place Bangalore, Mandarin Oriental Kuala Lumpur, Wyndham Goa, Le Méridien Kochi, DoubleTree by Hilton Goa, Westin Kolkata, and Courtyard by Marriott Bangalore, among many others.

Through her meticulous approach to vendor interface, tender evaluation, specification tracking, and logistics, Abi contributes to Beetles Consulting’s commitment to precision, value engineering, and timely delivery.

Her multi-disciplinary coordination skills strengthen the firm’s reputation as a dependable partner for brand-compliant and execution-ready hospitality assets.`,
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
        bio: `Dr. Madhu Chandhok is a stalwart of Indian hospitality with over four decades of leadership in hospitality design, interiors, FF&E, and brand development. Known for her creative precision and functional design sensibility, she has successfully steered the interior planning and openings of more than a dozen landmark hotels, including several under The Lalit (Bharat Hotels) portfolio.

She has also been associated with global brands such as Holiday Inn, Crowne Plaza, InterContinental, Hilton, DoubleTree by Hilton, Hilton Garden Inn, Conrad, Best Western, Radisson, and Wyndham Hotels.

At Beetles Consulting, she contributes her deep insight into interior design direction, FF&E and HOE procurement, brand compliance, and refurbishment strategy. Her hallmark lies in balancing aesthetics with purpose — ensuring that every design solution is operationally relevant, cost-efficient, and brand-defining.

With her vast experience and knowledge, she consistently adds value through a “first-time-right” approach that ensures precision and efficiency.

A visiting faculty at OCLD (The Oberoi Centre of Learning & Development) and ISH (Indian School of Hospitality), she continues to mentor the next generation of hospitality professionals.

Together with Ajit Thomas and Rohin Ailawadi, Dr. Madhu forms a formidable trio for Property Improvement Plan (PIP) assignments, blending design excellence, technical depth, and engineering precision to deliver holistic, brand-compliant transformation strategies.

Her rich background in project coordination and design integration brings immense value to every assignment. Her leadership and passion for precision, coordination, and purpose-led interiors embody the Beetles Consulting philosophy — “Design with Purpose, Deliver with Integrity.”`,
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
        bio: `Rohin Ailawadi brings over four decades of multifaceted engineering expertise, combining technical mastery, strategic insight, and operational excellence. Beginning his career as a marine engineer aboard national and international merchant vessels, he developed exceptional resourcefulness, adaptability, and hands-on maintenance skills that form the bedrock of his leadership approach.

Transitioning to hospitality with global brands such as Hyatt, Taj, and Aman Resorts, Rohin deepened his expertise in hotel engineering operations, Total Productive Maintenance (TPM), energy optimization, and team management, achieving measurable reductions in energy usage and maintenance costs.

As a senior corporate leader at Unitech Group, he applied his experience in engineering systems design and project management to deliver energy-efficient, brand-compliant hotels.

His tenure with Hilton Worldwide Technical Services further refined his proficiency in engineering audits, fire and life safety design, and brand technical services, successfully leading several Hilton hotel openings across the region.

Together with Ajit Thomas and Dr. Madhu Chandhok, Rohin forms a formidable trio for Property Improvement Plan (PIP) assignments, offering clients comprehensive expertise across engineering, design, and sustainability — a hallmark of Beetles Consulting’s integrated approach to property renewal and brand upgradation.

Respected for his versatility, perseverance, and leadership, Rohin’s ability to deliver sustainable, high-performance engineering solutions ensures enduring value, brand alignment, and operational excellence across every Beetles Consulting assignment.`,
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
    },
    {
        id: 8,
        name: 'Mr. Shariff Mohammed Al Bakry',
        role: 'Senior Consultant – Middle East & Africa – Beetles Consulting',
        image: shariff,
        bio: 'Shariff Mohammed Al Bakry brings over four decades of distinguished leadership across luxury hospitality operations in the Middle East, Europe, and Asia. His experience spans senior executive roles within globally recognized hospitality brands, where he has consistently delivered operational excellence, regulatory alignment, and asset performance at scale.',
        expertise: [
            'Luxury Asset Governance',
            'Hotel Operations Leadership',
            'Food & Beverage Management',
            'Sales & Marketing Strategy',
            'P&L Accountability & Governance',
            'Stakeholder Alignment',
            'Operational Excellence',
            'Regulatory Compliance'
        ],
        projects: [
            'Hyatt Hotels Corporation',
            'InterContinental Hotels Group',
            'Luxury Hospitality Operations – Muscat',
            'Luxury Hospitality Operations – London',
            'GCC Hospitality Markets',
            'Hotel Manager Leadership Roles',
            'Resident Manager Leadership Roles'
        ],
        awards: [
            'Over Four Decades of International Hospitality Leadership',
            'Specialist in Luxury Hospitality Operations Across MEA, Europe & Asia and Africa'
        ]
    },
    {
        id: 9,
        name: 'Sanjay Sharma',
        role: 'Founder & Managing Director, BluSalzz Hospitality – Associate Partner, Beetles Consulting',
        image: sanjay,
        bio: `Sanjay Sharma is a highly accomplished hospitality leader with over 32 years of experience across hotel operations, development, brand management, commercial strategy, and organisational leadership.

Prior to founding BluSalzz Hospitality, Sanjay held senior leadership responsibilities with Marriott International, including serving as Market Vice President for North India, Nepal & Bhutan. His experience spans leading hospitality brands including JW Marriott, Marriott, Westin, Sheraton, Le Méridien, and Renaissance.

He was also closely involved in the integration and transition of Starwood properties into Marriott following the global merger, contributing to one of the hospitality industry's most significant global brand integrations.

Throughout his career, Sanjay has developed deep expertise in hotel operations, owner relations, asset performance, brand positioning, commercial strategy, people development, and guest experience.

As Founder & Managing Director of BluSalzz Hospitality, he has built an entrepreneurial hospitality platform focused on distinctive hotels, resorts, and experiential destinations.

Through his association with Beetles Consulting, Sanjay brings a strong operator, commercial, and asset performance perspective, adding further depth to an integrated hospitality advisory ecosystem.`,
        expertise: [
            'Hotel Operations & Development',
            'Brand Management & Positioning',
            'Commercial Strategy & Asset Performance',
            'Owner Relations & Hospitality Advisory',
            'Organisational Leadership & People Development'
        ],
        projects: [
            'Marriott International - Market Vice President, North India, Nepal & Bhutan',
            'JW Marriott, Marriott, Westin, Sheraton, Le Méridien & Renaissance',
            'Starwood–Marriott Integration & Transition',
            'BluSalzz Hospitality - Founder & Managing Director',
            'Beetles Consulting - Associate Partner'
        ],
        awards: []
    },
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

    const [showFullBio, setShowFullBio] = useState(false);
    const BIO_LIMIT = 280;

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

            setShowFullBio(false); // Reset bio view when a new consultant is selected

            return () => ctx.revert();
        }
    }, [selectedConsultant]);

    return (
        <div className="min-h-screen mt-28 bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
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
                    <h1 ref={titleRef} className="text-5xl font-bold text-white mb-6 tracking-tight">
                        Our Experts
                    </h1>
                    <div className="header-underline w-24 h-1 bg-white/30 mx-auto mb-6"></div>
                    <p ref={subtitleRef} className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
                        A collective of world-class professionals delivering excellence in hospitality development,
                        engineering, and design across continents
                    </p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        About Beetles Consulting
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-8 text-lg">
                        <p>
                            Founded in 2019, Beetles Consulting is a multi-disciplinary
                            Project Control and Advisory firm offering specialized expertise
                            in Project Control, Technical Services, Property Audits,
                            Property Improvement Plans, and Hospitality Development Advisory.
                        </p>

                        <p>
                            As a trusted partner and project controller on behalf of its
                            clients, the firm delivers strategic owner representation and
                            end-to-end design management and implementation oversight,
                            integrating architectural, structural, interior, MEPF, and LT
                            systems into a unified, performance-driven framework.
                        </p>

                        <p>
                            Beetles Consulting governs the selection, appointment, and
                            management of Design Consultants and PMCs to ensure seamless
                            coordination, quality assurance, timely delivery, and
                            risk-mitigated execution within approved budgets.
                        </p>

                        <p>
                            The firm currently leads multiple marquee hotel developments
                            across India representing nearly 1800 rooms under brands
                            including Marriott, Hyatt, Radisson, Sterling Resorts, and Blu
                            Salzz.
                        </p>

                        <p>
                            Drawing strength from deep technical proficiency and operational
                            expertise, Beetles Consulting continues to enhance project value
                            and lifecycle performance while maintaining the highest
                            standards of efficiency, sustainability, and design excellence.
                        </p>
                    </div>
                </div>
            </section>

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
                            relative h-[75vh] sm:h-[70vh] bg-white rounded-2xl overflow-hidden shadow-lg
                                transform transition-all duration-500 ease-out
                                ${hoveredId === consultant.id ? 'shadow-2xl ' : 'scale-100'}
                                    hover:shadow-[0_20px_60px_-15px_rgba(31,78,121,0.3)]
              `}>
                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden bg-linear-to-br from-slate-200 to-slate-300">
                                    <img src={consultant.image} alt={consultant.name} className={`${hoveredId === consultant.id ? 'scale-105' : 'scale-100'} w-full h-full object-cover transform transition-all ease-in-out duration-200`} />
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
                                    <h3 className="text-base sm:text-2xl font-bold text-[#1F4E79] sm:mb-2 group-hover:text-[#163A5F] transition-colors">
                                        {consultant.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
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
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-9999 flex items-center justify-center p-4"
                    onClick={() => setSelectedConsultant(null)}
                >
                    <div
                        className="modal-content bg-white rounded-xl sm:rounded-3xl z-9999 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="modal-section flex flex-col sm:flex-row gap-1 sm:gap-4 sticky top-0 z-10 bg-linear-to-r from-[#1F4E79] to-[#163A5F] text-white p-3 sm:p-8  sm:rounded-t-3xl">
                            <div>
                                <img
                                    src={selectedConsultant.image}
                                    alt={selectedConsultant.name}
                                    className="object-cover object-center w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-white mb-1 sm:mb-4"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={() => setSelectedConsultant(null)}
                                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white transition-colors  duration-300"
                                >
                                    <span className="text-3xl hover:text-[#1F4E79] hover:rotate-90 transition-all duration-300">×</span>
                                </button>
                                <h2 className="text-xl sm:text-4xl font-bold mb-1 sm:mb-3">{selectedConsultant.name}</h2>
                                <p className="text-blue-100 text-base sm:text-lg font-light">{selectedConsultant.role}</p>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-4 sm:p-8">
                            {/* Bio */}
                            {/* Bio */}
                            <div className="modal-section mb-8">
                                <h3 className="text-2xl font-bold text-[#1F4E79] mb-4 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#1F4E79] rounded-full"></div>
                                    Biography
                                </h3>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {showFullBio
                                        ? selectedConsultant.bio
                                        : `${selectedConsultant.bio.slice(0, BIO_LIMIT)}`} {' '}
                                    {selectedConsultant.bio.length > BIO_LIMIT && (
                                        <button
                                            onClick={() => setShowFullBio(!showFullBio)}
                                            className="mt-4 text-[#1F4E79] font-semibold hover:underline transition-all"
                                        >
                                            {showFullBio ? "Read Less" : "Read More..."}
                                        </button>
                                    )}
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