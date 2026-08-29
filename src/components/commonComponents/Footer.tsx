import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logobgremove.png'

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                backgroundColor: "var(--color-secondary)",
                borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
            className="py-12"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Company Name */}
                    <div>
                        <img className="w-24 h-32 object-cover" src={logo} alt="" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3
                            className="text-lg font-medium mb-4"
                            style={{ color: "var(--color-primary)" }}
                        >
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:underline"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:underline"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="hover:underline"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:underline"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3
                            className="text-lg font-medium mb-4"
                            style={{ color: "var(--color-primary)" }}
                        >
                            Contact
                        </h3>
                        <p
                            className="text-sm mb-2"
                            style={{ color: "var(--color-accent)" }}
                        >
                            +91 9152356519
                        </p>
                        <p
                            className="text-sm"
                            style={{ color: "var(--color-accent)" }}
                        >
                            ajit.thomas@beetles.in
                        </p>
                    </div>

                </div>

                {/* Bottom Section */}
                <div
                    className="mt-10 pt-6 text-center text-xs"
                    style={{
                        borderTop: "1px solid rgba(0,0,0,0.08)",
                        color: "var(--color-accent)",
                    }}
                >
                    © {new Date().getFullYear()} Beetles Consulting. All Rights Reserved. <br />
                    Website developed by{" "}
                    <a
                        href="https://ratebotai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--color-primary)" }}
                        className="font-medium"
                    >
                        RatebotAI
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;