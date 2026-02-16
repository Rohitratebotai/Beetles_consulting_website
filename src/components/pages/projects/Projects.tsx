import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    year?: string;
    workingStatus?: string;
}

// completed projects 
import grandHyatt from '../../../assets/projectImages/grand_hyatt_muscat.jpg'
import grandDelhi from '../../../assets/projectImages/the_grand_new_delhi.webp'
import radisson from '../../../assets/projectImages/radisson_muscat.jpg'

// ongoing projects 
import westin from '../../../assets/projectImages/Westin Vishkapatnam.jpeg'
import grandHyattHyd from '../../../assets/projectImages/Grand Hyatt Hyderabad (1).jpeg'
import parkInn from '../../../assets/projectImages/parkInn_chennai.webp'
import sterlingthomasgate from '../../../assets/projectImages/Thomasgate Karjat (3).jpeg'
// the below images are not related to project name 
import grandHyattQatar from '../../../assets/projectImages/Rosewood Qatar.jpg'
import Sheraton from '../../../assets/projectImages/VIEW_06.png'

const Projects = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
    const heroSubtitleRef = useRef<HTMLParagraphElement | null>(null);
    const completedTitleRef = useRef<HTMLDivElement | null>(null);
    const completedCardsRef = useRef<HTMLDivElement | null>(null);
    const upcomingTitleRef = useRef<HTMLDivElement | null>(null);
    const upcomingCardsRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const experienceTitleRef = useRef<HTMLDivElement | null>(null);
    const experienceGridRef = useRef<HTMLDivElement | null>(null);
    const experienceFooterRef = useRef<HTMLParagraphElement | null>(null);

    // Modal state
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const completedProjects = [
        {
            id: 1,
            title: "Grand Hyatt Muscat",
            description: "A luxurious beachfront hotel nestled along the Arabian Sea, blending Omani heritage with contemporary elegance. Featuring world-class dining, stunning architecture, and panoramic sea views, it offers refined accommodations, exceptional hospitality, and premium leisure facilities — making it one of Muscat's most iconic destinations for business and leisure travelers.",
            image: grandHyatt,
            location: "Muscat, Oman",
            year: "Completed"
        },
        {
            id: 2,
            title: "The Grand New Delhi",
            description: "A five-star luxury hotel located in Vasant Kunj, offering a perfect blend of elegance and comfort. With spacious rooms, award-winning dining, rejuvenating spa experiences, and lush landscaped surroundings, it provides a serene retreat in the heart of the city for business and leisure travelers alike.",
            image: grandDelhi,
            location: "New Delhi, India",
            year: "Completed"
        },
        {
            id: 3,
            title: "Radisson Muscat",
            description: "Contemporary comfort in the heart of Oman's capital. Ideally located near business hubs and cultural landmarks, it features stylish rooms, international dining, a serene pool, and modern meeting facilities — making it a preferred choice for both business and leisure travelers seeking convenience and elegance.",
            image: radisson,
            location: "Muscat, Oman",
            year: "Completed"
        }
    ];

    const upcomingProjects = [
        {
            id: 1,
            title: "The Westin by Marriott – 300 Keys",
            description: "A landmark 7.5 lakh sq. ft. luxury hospitality development in Vishakapatnam, designed to deliver world-class guest experiences under an internationally renowned brand.",
            image: westin,
            location: "Vishakapatnam, India",
            workingStatus: "Ongoing"
        },
        {
            id: 2,
            title: "Grand Hyatt – 300 Keys",
            description: "A premium 5 lakh sq. ft. luxury hotel project in Hyderabad, envisioned with refined architecture, upscale amenities, and global hospitality standards.",
            image: grandHyattHyd,
            location: "Hyderabad, India",
            workingStatus: "Ongoing"
        },
        {
            id: 3,
            title: "Park Inn by Radisson – 100 Keys",
            description: "A 1.1 lakh sq. ft. contemporary hotel in Chennai featuring efficient layouts, modern interiors, and thoughtfully designed guest experiences.",
            image: parkInn,
            location: "Chennai, India",
            workingStatus: "Ongoing"
        },
        {
            id: 4,
            title: "Sterling Thomasgate Resort & Gated Villas – 100 Keys",
            description: "A 2.5 lakh sq. ft. integrated resort and gated villa community at Kashele, Karjat, blending leisure hospitality with premium villa living.",
            image: sterlingthomasgate,
            location: "Kashele, Karjat, India",
            workingStatus: "Ongoing"
        },
        {
            id: 5,
            title: "72-Key Boutique Hotel – Tirupati",
            description: "A 70,000 sq. ft. boutique hospitality project in Tirupati, currently under operator signing, designed to offer curated luxury and personalized guest experiences.",
            image: grandHyattQatar,
            location: "Tirupati, India",
            workingStatus: "Operator Signing in Progress"
        },
        {
            id: 6,
            title: "200-Key 4-Star Hotel – MHAPE, Navi Mumbai",
            description: "A 2 lakh sq. ft. upscale 4-star hotel development in MHAPE, Navi Mumbai, with operator signing in progress, positioned to serve business and transit travelers.",
            image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
            location: "MHAPE, Navi Mumbai, India",
            workingStatus: "Operator Signing in Progress"
        },
        {
            id: 7,
            title: "Urban Resort – Igatpuri, Nasik",
            description: "A large-scale urban resort project set in the scenic landscape of Igatpuri, Nasik, combining hospitality and villa living with operator signing in progress.",
            image: Sheraton,
            location: "Igatpuri, Nasik, India",
            workingStatus: "Operator Signing in Progress"
        },
        {
            id: 8,
            title: "Luxury Villa Development – Alibaug",
            description: "A 50,000 sq. ft. gated development comprising 10 luxury villas in Alibaug, designed for exclusive coastal living and premium lifestyle experiences.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            location: "Alibaug, India",
            workingStatus: "Ongoing"
        }
    ];

    const priorExperience = [
        "Grand Hyatt Oman",
        "Hotel Safari Radisson Blu Alkhuwair, Oman",
        "Grand Delhi",
        "Hyatt Regency Mumbai",
        "Hyatt Regency Kolkata",
        "Park Hyatt Goa",
        "Four Seasons Mumbai",
        "Grand Hyatt Goa",
        "Fairmont Abu Dhabi",
        "Grand Hyatt Qatar",
        "Hilton Shillim Resort & Spa, Lonavala",
        "Le Méridien Kovalam, Kerala",
        "Hyatt Regency Pune",
        "Lalit London",
        "Sheraton Oman, Muscat",
        "JW Marriott Kolkata",
        "Mandarin Oriental Kuala",
        "Lumpur",
        "Conrad Bangalore",
        "Rosewood Qatar"
    ];

    // Modal functions
    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    // Hero Animation
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 }
        )
            .fromTo(heroTitleRef.current,
                { opacity: 0, y: 60, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1 },
                "-=0.3"
            )
            .fromTo(
                heroSubtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.5"
            );
    });

    // Completed Projects Section Animation
    useGSAP(() => {
        if (!completedTitleRef.current || !completedCardsRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: completedTitleRef.current,
                start: "top 80%",
                once: true
            }
        });

        tl.fromTo(
            completedTitleRef.current.children,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );

        const cards = completedCardsRef.current.querySelectorAll(".project-card");

        gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: completedCardsRef.current,
                    start: "top 75%",
                    once: true
                }
            }
        );
    });

    // Upcoming Projects Section Animation
    useGSAP(() => {
        if (!upcomingTitleRef.current || !upcomingCardsRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: upcomingTitleRef.current,
                start: "top 80%",
                once: true
            }
        });

        tl.fromTo(
            upcomingTitleRef.current.children,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );

        const cards = upcomingCardsRef.current.querySelectorAll(".project-card");

        gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: upcomingCardsRef.current,
                    start: "top 75%",
                    once: true
                }
            }
        );
    });

    // Experience Section Animation
    useGSAP(() => {
        if (!experienceRef.current || !experienceTitleRef.current || !experienceGridRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: experienceRef.current,
                start: "top 80%",
                once: true
            }
        });

        // Animate background
        tl.fromTo(
            experienceRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" }
        )
            // Animate title and subtitle
            .fromTo(
                experienceTitleRef.current.children,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
                "-=0.3"
            );

        // Animate grid items
        const gridItems = experienceGridRef.current.querySelectorAll(".experience-item");

        gsap.fromTo(
            gridItems,
            { opacity: 0, scale: 0.8, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                stagger: {
                    amount: 1.2,
                    from: "start",
                    ease: "power2.out"
                },
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: experienceGridRef.current,
                    start: "top 75%",
                    once: true
                }
            }
        );

        // Animate footer text
        gsap.fromTo(
            experienceFooterRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: experienceFooterRef.current,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
            {/* Hero Section */}
            <div ref={heroRef} style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #163A5F 100%)' }} className="text-white py-20 px-6 text-center">
                <h1 ref={heroTitleRef} className="text-5xl font-bold mb-4">Our Projects</h1>
                <p ref={heroSubtitleRef} className="text-xl max-w-2xl mx-auto opacity-90">Transforming visions into reality through innovation and excellence</p>
            </div>

            {/* Completed Projects */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div ref={completedTitleRef} className="mb-12">
                    <h2 className="text-4xl font-bold mb-2" style={{ color: '#1F4E79' }}>Completed Projects</h2>
                    <div className="w-20 h-1 rounded" style={{ backgroundColor: '#1F4E79' }}></div>
                </div>

                <div ref={completedCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {completedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                            onClick={() => openModal(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-0 w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 z-10 group-hover:bg-white/30  transition-all duration-300 flex items-center justify-center">
                                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2"
                                        style={{ backgroundColor: '#1F4E79' }}>
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#d1fae5', color: '#065f46' }}>
                                    Completed
                                </span>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F4E79' }}>{project.title}</h3>
                                <p className="mb-4 line-clamp-3" style={{ color: '#6B7280' }}>{project.description.slice(0, 35)}...</p>
                                <div className="flex justify-between text-sm" style={{ color: '#6B7280' }}>
                                    <span>📍 {project.location}</span>
                                    <span>📅 {project.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Upcoming Projects */}
                <div ref={upcomingTitleRef} className="mb-12">
                    <h2 className="text-4xl font-bold mb-2" style={{ color: '#1F4E79' }}>Upcoming Projects</h2>
                    <div className="w-20 h-1 rounded" style={{ backgroundColor: '#1F4E79' }}></div>
                </div>

                <div ref={upcomingCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                            onClick={() => openModal(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-0 w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 z-10 group-hover:bg-white/30  transition-all duration-300 flex items-center justify-center">
                                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2"
                                        style={{ backgroundColor: '#1F4E79' }}>
                                        View Details
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>
                                    {project.workingStatus}
                                </span>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F4E79' }}>{project.title}</h3>
                                <p className="mb-4 line-clamp-3" style={{ color: '#6B7280' }}>{project.description.slice(0, 35)}...</p>
                                <div className="flex justify-between text-sm" style={{ color: '#6B7280' }}>
                                    <span>📍 {project.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Prior Experience Section */}
            <div ref={experienceRef} style={{ backgroundColor: '#1F4E79' }} className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div ref={experienceTitleRef} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-white">Team's Prior Experience</h2>
                        <p className="text-xl text-white opacity-90">Trusted by world-class hospitality brands across continents</p>
                    </div>
                    <div ref={experienceGridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {priorExperience.map((project, index) => (
                            <div
                                key={index}
                                className="experience-item bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <p className="text-white font-semibold text-sm">{project}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <p ref={experienceFooterRef} className="text-white/80 italic">...and several other notable hotels and resorts across South Asia, the Middle East, and Africa.</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 bg-opacity-75"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="relative">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-96 object-cover rounded-t-lg"
                            />
                        </div>

                        <div className="p-8">
                            <div className="mb-4">
                                <span
                                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3"
                                    style={selectedProject.year ?
                                        { backgroundColor: '#d1fae5', color: '#065f46' } :
                                        { backgroundColor: '#fef3c7', color: '#92400e' }
                                    }
                                >
                                    {selectedProject.year || selectedProject.workingStatus}
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1F4E79' }}>
                                {selectedProject.title}
                            </h2>

                            <div className="flex items-center gap-6 mb-6 text-sm" style={{ color: '#6B7280' }}>
                                <span className="flex items-center gap-2">
                                    <span>📍</span>
                                    <span>{selectedProject.location}</span>
                                </span>
                                {selectedProject.year && (
                                    <span className="flex items-center gap-2">
                                        <span>📅</span>
                                        <span>{selectedProject.year}</span>
                                    </span>
                                )}
                            </div>

                            <div className="prose max-w-none">
                                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                                    {selectedProject.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Projects;