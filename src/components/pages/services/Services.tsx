import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const [selectedService, setSelectedService] = useState(null as number | null);
    const heroRef = useRef<HTMLDivElement | null>(null);
    const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
    const heroSubtitleRef = useRef<HTMLParagraphElement | null>(null);
    const heroTagsRef = useRef<HTMLDivElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const ctaTitleRef = useRef<HTMLHeadingElement | null>(null);
    const ctaSubtitleRef = useRef<HTMLParagraphElement | null>(null);
    const ctaButtonRef = useRef<HTMLAnchorElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const cardsContainerRef = useRef<HTMLDivElement | null>(null);


    // const consultingServices = [
    //     { name: "Grand Opening", icon: "🎊" },
    //     { name: "Concept, Schematic", icon: "🌺" },
    //     { name: "Design Development", icon: "📐" },
    //     { name: "Commissioning, Handover", icon: "🔧" },
    //     { name: "Construction Documentation", icon: "👷" },
    //     { name: "Completion, Training", icon: "👥" },
    //     { name: "Construction & Procurement", icon: "🏗️" }
    // ];

    const mainServices = [
        {
            title: "Project Controls & Client Representation",
            subtitle: "Beetles Consulting acts as an extension of the Client’s office, providing integrated project controls and delivery oversight from concept through testing, commissioning, and handover. We assist in assembling the right consultant and contractor teams, establishing execution frameworks, managing schedules, costs, quality, risks, and stakeholder coordination, while ensuring projects are delivered efficiently, commercially responsibly, and in alignment with brand and operational objectives.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
            points: [
                "Concept to Testing & Commissioning, and Handover Time-Cost-Quality Governance from Team Assembly to Final Handover.",
                "From pre-qualification and selection of the most suitable consultants and PMC to testing, commissioning, and handover, Beetles provides comprehensive project control and delivery oversight.",
                "Core Coverage:",
                "Structuring of project execution framework, procurement strategy, and contract administration.",
                "Assistance in pre-qualification, evaluation, and appointment of consultants, PMC, contractors, and vendors.",
                "Development of baseline schedules, cost plans, and control systems.",
                "Anchoring Design Management Process.",
                "Monitoring progress, budget, and quality compliance through periodic audits and dashboards.",
                "Managing the PMC on behalf of the Client and mitigating risks; ensuring Brand Compliance, Quality, Standardization, Sustainability, Energy Optimization, etc.",
                "Facilitating coordination among multiple stakeholders during construction.",
                "Testing & Commissioning supervision, documentation, and witness checks.",
                "Overseeing completion, handover to operations, and post-opening support during DLP.",
                "Significant continuous contribution from our experience in fast-track completion of projects and making Energy Efficient Hospitality Landmarks."
            ]
        },
        {
            title: "Design & Technical Services (DTS) - Brand Representation & Coordination",
            subtitle: "Beetles represents hospitality brand standards and technical expectations throughout the design and execution lifecycle. Acting as a bridge between ownership, consultants, contractors, and operators, we help ensure seamless design integration, technical compliance, coordinated decision-making, and smoother project delivery aligned with operational and brand requirements.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            points: [
                "Representing Brand Standards, Ensuring Design Integration, and Enabling Seamless Delivery.",
                "Beetles acts as the regional technical representative of international or domestic hospitality brands, ensuring their design philosophy and technical standards are maintained from concept through completion.",
                "Representation of brand design and technical standards at every project stage.",
                "Coordination between client, consultants, and brand reviewers.",
                "Participation in all design and coordination meetings to ensure brand alignment.",
                "Assistance in selection and pre-qualification of consultants for architecture, interiors, MEP, structure, facility planning, sustainability, etc.",
                "Review and comment on drawings, material selections, specifications, and mock-ups.",
                "Resolution of technical issues during design and construction.",
                "Continuous reporting, risk flagging, and dashboard management.",
                "Overlapped sequential handover support to help operator mobilize, train, and open smoothly."
            ]
        },
        {
            title: "Site Feasibility, Positioning & Site Advisory",
            subtitle: "Beetles assists clients in evaluating the suitability, potential, positioning, and commercial viability of hospitality and mixed-use developments. Our advisory approach helps define the right product, scale, market positioning, customer targeting, and development strategy based on location dynamics, investment objectives, operational practicality, and long-term asset value creation.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
            points: [
                "Suitability analysis of the site including access, visibility, connectivity, topography, regulations, utilities, climate, surroundings and development constraints. ",
                "Assessing the potential and rationale for hospitality or mixed-use development based on market dynamics and demand drivers.",
                "Defining the most appropriate hospitality product typology including resort, business hotel, luxury, upper upscale, religious destination, wellness retreat, serviced apartments, amusement-led destination, casino resort, branded residences and mixed-use hospitality. ",
                "Advising on project size, scale, room mix, public areas, F&B strategy, wellness, banqueting, retail integration and positioning aligned with market opportunity and investment objectives. ",
                "Preliminary evaluation of likely ADR, occupancy, GOP, IRR, ROI and overall commercial feasibility benchmarks. ",
                "Preparing financial feasibility inputs, development strategy notes and investor briefs.  ",
                "Advising on development approach, phasing possibilities, operational suitability and long-term asset enhancement potential."
            ]
        },
        {
            title: "Brand Strategy & Engagement",
            subtitle: "Beetles supports clients in identifying, evaluating, engaging, and negotiating with suitable hospitality operators and franchise brands. From brand shortlisting and operator discussions to commercial evaluations and agreement negotiations, we help ownership secure strategically aligned and commercially balanced hotel management or franchise partnerships.",
            image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=600&fit=crop",
            points: [
                "Recommending suitable hotel brands, operators, and franchise options based on project positioning, market fit, commercial viability, and ownership objectives.",
                "Identifying the suitable Hospitality Operator Brand & Structuring Hotel Management / Franchise Alliances.",
                "Coordinating exchange of project information, concept presentations, development briefs, and commercial expectations with potential operators.",
                "Coordinating discussions between ownership, legal advisors, operators, consultants, and financial stakeholders during negotiation and finalization stages.",
                "Beetles supports clients in identifying, evaluating, engaging, and negotiating with suitable hospitality operators and franchise brands to secure strategically aligned and commercially balanced partnerships.",
                "Identifying and shortlisting appropriate international, regional, or domestic hospitality brands aligned with the project vision.",
                "Initiating and managing structured engagement with shortlisted operators and franchise brands.",
                "Advising on operator selection strategy considering brand strength, operational capability, technical suitability, market reach, and long-term asset value creation.",
                "Supporting negotiations for Hotel Management Agreements (HMA), Franchise Agreements, Technical Services Agreements (TSA), and related commercial arrangements.",
                "Assisting in aligning brand standards and operator expectations with project budgets, timelines, operational goals, and development realities.",
                "Providing strategic advisory support during LOIs, term sheets, operator onboarding, and agreement finalization processes.",
                "Reviewing operational obligations, performance clauses, area requirements, pre-opening obligations, and owner protections from a project and commercial perspective.",
                "Assisting ownership in securing commercially balanced and strategically suitable long-term brand alliances."
            ]
        },
        {
            title: "Property Improvement Plan (PIP) & Operational Quality Audit",
            subtitle: "Beetles undertakes technical, operational, and asset-quality audits for existing hospitality properties to identify deficiencies, repositioning opportunities, upgrade requirements, and operational improvement strategies. Our structured review process helps ownership plan refurbishments, enhance market competitiveness, and align assets with evolving brand and guest expectations.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            points: [
                "Auditing Performance, Repositioning Assets, and Defining Upgrade Strategies.",
                "Property audit – technical, architectural, and MEP review.",
                "Performance audit – operational efficiency, service standards, maintenance.",
                "Benchmarking against brand and market expectations.",
                "Repositioning or rebranding recommendations.",
                "Macro and micro budgeting for upgrade or refurbishment programs.",
                "Development of actionable upgrade roadmaps with prioritization.",
                "Reporting via structured PIP document with photos, deficiency logs, and estimated costs."
            ]
        },
        {
            title: "FF&E & OS&E Procurement Advisory & Specialized Procurement Solutions",
            subtitle: "Beetles provides integrated FF&E and OS&E procurement advisory services covering sourcing strategy, vendor management, technical coordination, commercial negotiations, logistics tracking, and delivery oversight. Working closely with project and design teams, we help ensure timely procurement, cost efficiency, design consistency, and compliance with operator standards.",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
            points: [
                "Professional sourcing, procurement management, and logistics coordination for FF&E and OS&E — ensuring brand compliance, cost control, and timely delivery.",
                "A dedicated division under Beetles Consulting focusing on professional sourcing, procurement management, and logistics coordination for FF&E and OS&E — ensuring brand compliance, cost control, and timely delivery.",
                "Beetles Consulting's FF&E & OS&E Procurement Division provides comprehensive management of all furniture, fixtures, and operating equipment for hospitality projects. Working in synergy with the Project Control and Design Management teams, we deliver a fully integrated procurement solution that preserves design intent, meets operator standards, and ensures commercial efficiency for clients.",
                "Integration with project schedules to support handover timelines.",
                "Preparation of detailed FF&E/OS&E lists and technical specifications.",
                "Vendor pre-qualification, bid management, and procurement negotiation.",
                "Coordination with designers, project teams, and logistics partners.",
                "Factory inspections, sample approvals, and shipment tracking.",
                "Budget monitoring and progressive procurement reporting.",
                "Integration with project schedules to support handover timelines."
            ]
        }
    ];

    // Enhanced Hero Animation
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 }
        )
            .fromTo(
                heroTitleRef.current,
                { opacity: 0, y: 80, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1 },
                "-=0.3"
            )
            .fromTo(
                heroSubtitleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(
                heroTagsRef.current?.children || [],
                { opacity: 0, y: 30, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.08
                },
                "-=0.4"
            );
    });

    useGSAP(() => {
        if (!cardsContainerRef.current) return;

        const cards = cardsContainerRef.current.querySelectorAll(".service-card");

        if (cards.length === 0) return;

        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsContainerRef.current,
                    start: "top 80%",
                    once: true
                }
            }
        );
    }, { dependencies: [mainServices], scope: cardsContainerRef });

    // Enhanced CTA Animation
    useGSAP(() => {
        if (!ctaRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 85%",
                once: true
            }
        });

        tl.fromTo(
            ctaRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" }
        )
            .fromTo(
                ctaTitleRef.current,
                { opacity: 0, y: 60, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
                "-=0.3"
            )
            .fromTo(
                ctaSubtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                "-=0.5"
            )
            .fromTo(
                ctaButtonRef.current,
                { opacity: 0, scale: 0.8, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                },
                "-=0.4"
            );
    });

    useGSAP(
        () => {
            if (!modalRef.current) return;

            gsap.fromTo(
                modalRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
            );
        },
        { dependencies: [selectedService] }
    );

    return (
        <div className="min-h-screen  mt-28" style={{ backgroundColor: '#f9fafb' }}>
            {/* Hero */}
            <div ref={heroRef} style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #163A5F 100%)' }} className="text-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 ref={heroTitleRef} className="text-5xl font-bold mb-6">Our Consulting Services</h1>
                    <p ref={heroSubtitleRef} className="text-xl opacity-90 mb-8">
                        Beetles Consulting is a specialist hospitality advisory & project control firm experienced in delivering end-to-end solutions; from feasibility, design management & brand engagement to consultant onboarding, execution governance, procurement, testing, commissioning & handover. We function as an extension of the Client’s office, safeguarding Time, Cost, Quality, Sustainability & Commercial success across the entire asset lifecycle.
                    </p>
                    {/* <div ref={heroTagsRef} className="flex flex-wrap justify-center gap-3 mt-8">
                        {consultingServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
                            >
                                <span>{service.icon}</span>
                                <span className="text-sm font-semibold">{service.name}</span>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1F4E79' }}>
                    Specialized Service Offerings
                </h2>
                <p className="text-center text-lg mb-12" style={{ color: '#6B7280' }}>
                    Click any service to explore detailed information
                </p>

                <div
                    ref={cardsContainerRef}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainServices.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedService(index)}
                            className="service-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                    style={{ backgroundColor: '#1F4E79' }}>
                                    {index + 1}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#1F4E79' }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm font-semibold mb-4 text-justify" style={{ color: '#6B7280' }}>
                                    {service.subtitle.slice(0, 150)}{" "}
                                    <span
                                        className="font-bold hover:underline cursor-pointer"
                                        style={{ color: '#1F4E79' }}
                                    >
                                        Read More...
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedService !== null && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-9999" onClick={() => setSelectedService(null)}>
                    <div ref={modalRef} className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="relative h-64">
                            <img
                                src={mainServices[selectedService].image}
                                alt={mainServices[selectedService].title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold hover:bg-gray-100"
                                style={{ color: '#1F4E79' }}
                            >
                                ✕
                            </button>
                            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white"
                                style={{ backgroundColor: '#1F4E79' }}>
                                0{selectedService + 1}
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: '#1F4E79' }}>
                                {mainServices[selectedService].title}
                            </h3>
                            <p className="text-base lg:text-lg font-semibold mb-6" style={{ color: '#6B7280' }}>
                                {mainServices[selectedService].subtitle}
                            </p>
                            <div className="space-y-3">
                                {mainServices[selectedService].points.map((point, idx) => (
                                    <div key={idx} className="flex gap-3">
                                        <span style={{ color: '#1F4E79' }} className="mt-1">•</span>
                                        <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div ref={ctaRef} style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #163A5F 100%)' }} className="py-16 px-6 mt-12">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 ref={ctaTitleRef} className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p ref={ctaSubtitleRef} className="text-xl mb-8 opacity-90">Let's discuss how we can bring your vision to life</p>
                    <Link to="/contact"
                        ref={ctaButtonRef}
                        className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300"
                        style={{ color: '#1F4E79' }}>
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Services;