import DarkModeToggle from '@/components/dark-mode-toggle';
import Logo from '@/components/logo';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = window.location.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 shadow-lg backdrop-blur-md' : ''}`}
        >
            <nav className="container px-6 mx-auto lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center flex-shrink-0">
                        <Logo variant="full" />
                        {/* <Logo variant={isScrolled ? 'symbol' : 'full'} /> */}
                    </Link>
                    <div className="items-center hidden space-x-4 md:flex">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                        pathname === item.href ? 'text-primary font-bold' : 'hover:text-primary text-gray-900 dark:text-white'
                                    }`}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <DarkModeToggle />
                    </div>
                    <div className="flex items-center md:hidden">
                        <DarkModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 ml-4 rounded-md text-primary hover:bg-primary/10 focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="shadow-lg bg-background md:hidden"
                >
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block rounded-md px-3 py-2 text-base font-medium ${
                                    pathname === item.href
                                        ? 'bg-primary font-bold text-white'
                                        : 'hover:bg-primary/10 hover:text-primary text-gray-900 dark:text-white'
                                }`}
                                onClick={() => setIsOpen(false)}
                                aria-current={pathname === item.href ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
