import { Link } from '@inertiajs/react';
import { Facebook, Instagram, LinkedinIcon as LinkedIn, Twitter } from 'lucide-react';
import Logo from '../../components/logo';

const Footer = () => {
    return (
        <footer className="text-white bg-primary-dark" style={{ backgroundColor: '#05081b' }}>
            <div className="container px-6 py-12 mx-auto lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Logo variant="full-white" />
                        <p className="mt-4 text-sm opacity-80">We're human, meet us offline.</p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>123 Tech Street</li>
                            <li>Innovation City, IC 12345</li>
                            <li>+1 (555) 123-4567</li>
                            <li>contact@elevatetech.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>
                                <Link href="/about" className="hover:opacity-100">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:opacity-100">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:opacity-100">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:opacity-100">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="transition-opacity hover:opacity-80">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="transition-opacity hover:opacity-80">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="transition-opacity hover:opacity-80">
                                <LinkedIn className="w-5 h-5" />
                            </a>
                            <a href="#" className="transition-opacity hover:opacity-80">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 mt-12 text-sm border-t border-white/20 opacity-80">
                    <p>© {new Date().getFullYear()} Elevate Tech Dynamics Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
