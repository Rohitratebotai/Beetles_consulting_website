import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/beetles.jpg'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const LeftlinkRef = useRef<HTMLDivElement>(null);
    const RightlinkRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: 'Projects', label: 'PROJECTS', leftmenu: true },
        { href: 'Services', label: 'SERVICES', leftmenu: true },
        { href: 'consultants', label: 'CONSULTANTS', rightmenu: true },
        { href: 'contact', label: 'CONTACT', rightmenu: true },
    ];

    const leftLinks = navLinks.filter(link => link.leftmenu);
    const rightLinks = navLinks.filter(link => link.rightmenu);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
        tl.from(LeftlinkRef.current, { y: -20, opacity: 0, stagger: 0.1 });
        tl.from(RightlinkRef.current, { y: -20, opacity: 0, stagger: 0.1 });
    }
    );

    return (
        <header className=" w-full bg-white shadow">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-6  py-4">
                {/* Left Navigation */}
                <div ref={LeftlinkRef} className="flex items-center space-x-8 ">
                    {leftLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold uppercase tracking-widest hover:text-gray-600 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Center Logo */}
                <div className="flex items-center justify-center mx-12">
                    <div className="text-center">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                </div>

                {/* Right Navigation */}
                <div ref={RightlinkRef} className="flex items-center space-x-8 ">
                    {rightLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold uppercase tracking-widest hover:text-gray-600 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Header */}
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Hamburger Menu */}
                <button
                    onClick={toggleMenu}
                    className="text-2xl text-gray-800"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-gray-600"
                >
                    <FaTimes />
                </button>

                {/* Logo in Sidebar */}
                <div className="p-6 border-b flex justify-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 w-auto object-contain"
                    />
                </div>


                {/* Navigation Links */}
                <nav className="flex flex-col p-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="py-4 border-b text-base font-semibold tracking-widest text-gray-800 hover:text-gray-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

            </div>

            {/* Mobile Menu Overlay */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )
            }
        </header >
    );
};

export default Navbar;