import ClientLogosCarousel from '@/components/client-logos-carousel';
import ScrollReveal from '@/components/scroll-reveal';
import GuestLayout from '@/layouts/guest-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cloud, Shield, Zap } from 'lucide-react';
import React from 'react';

const services = [
    {
        icon: Brain,
        title: 'AI-Powered Software Development',
        description: 'Custom AI solutions tailored to your business needs.',
        link: '/services#ai-software',
    },
    {
        icon: Zap,
        title: 'Intelligent Automation',
        description: 'Streamline repetitive tasks and improve efficiency with AI.',
        link: '/services#automation',
    },
    {
        icon: Cloud,
        title: 'Cloud Migration & Management',
        description: 'Optimize your cloud infrastructure and applications.',
        link: '/services#cloud',
    },
    {
        icon: Shield,
        title: 'Cybersecurity Consulting',
        description: 'Protect your data with AI-enhanced security solutions.',
        link: '/services#security',
    },
];

const projects = [
    {
        title: 'AI-Driven Customer Service Platform',
        description: 'Improved customer satisfaction by 40% with intelligent chatbots.',
        image: '/images/project1.jpg',
    },
    {
        title: 'Predictive Maintenance Solution',
        description: 'Reduced equipment downtime by 60% using IoT and machine learning.',
        image: '/images/project2.jpg',
    },
    {
        title: 'Blockchain-based Supply Chain',
        description: 'Created a transparent and secure supply chain tracking system.',
        image: '/images/project3.jpg',
    },
];

const clientLogos = [
    '/images/client1.png',
    '/images/client2.png',
    '/images/client3.png',
    '/images/client4.png',
    '/images/client5.png',
    '/images/client1.png',
    '/images/client2.png',
    '/images/client3.png',
];

const Homepage = () => {
    return (
        <React.Fragment>
            <Head title="Homepage">
                <meta
                    name="description"
                    content="Empowering businesses to thrive in the digital age. We build AI-powered solutions that transform businesses and drive innovation."
                />
            </Head>
            <GuestLayout>
                <div className="flex flex-col min-h-screen">
                    {/* Hero Section */}
                    <section className="relative pt-20 pb-32 overflow-hidden">
                        <div className="container px-6 mx-auto lg:px-8">
                            <div className="grid items-center gap-12 lg:grid-cols-2">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                                    <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl dark:text-white">
                                        Empowering businesses to thrive in the digital age.
                                    </h1>
                                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                                        We build AI-powered solutions that transform businesses and drive innovation.
                                    </p>
                                    <Link href="/contact" className="btn-primary">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="geometric-overlay"
                                >
                                    <img src="/images/hero-image.jpg" alt="Digital Transformation" className="rounded-2xl" />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Clients Section */}
                    <section className="py-16 bg-white dark:bg-gray-800">
                        <div className="container px-6 mx-auto lg:px-8">
                            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900 dark:text-white">Trusted by Leading Companies</h2>
                            <ClientLogosCarousel logos={clientLogos} />
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="py-24 bg-gray-50 dark:bg-gray-900">
                        <div className="container px-6 mx-auto lg:px-8">
                            <ScrollReveal>
                                <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl dark:text-white">Our Services</h2>
                            </ScrollReveal>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {services.map((service, index) => (
                                    <ScrollReveal key={index}>
                                        <Link href={service.link} className="block h-full">
                                            <div className="service-card group dark:border-gray-700 dark:bg-gray-800">
                                                <service.icon className="service-icon" />
                                                <h3 className="service-title dark:text-white">{service.title}</h3>
                                                <p className="service-description dark:text-gray-300 dark:group-hover:text-gray-100">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </ScrollReveal>
                                ))}
                            </div>
                            <div className="mt-12 text-center">
                                <Link href="/services" className="btn-primary">
                                    View All Services
                                    <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="py-24 bg-white dark:bg-gray-800">
                        <div className="container px-6 mx-auto lg:px-8">
                            <ScrollReveal>
                                <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl dark:text-white">Our Projects</h2>
                            </ScrollReveal>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {projects.map((project, index) => (
                                    <ScrollReveal key={index}>
                                        <div className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
                                            <img src={project.image} alt={project.title} height={300} className="object-cover w-full h-48" />
                                            {/* <ImageWithFallback
                                                src={project.image || '/images/placeholder.svg'}
                                                alt={project.title}
                                                height={300}
                                                className="object-cover w-full h-48"
                                                fallbackSrc="/images/placeholder.svg?height=300&width=400"
                                            /> */}
                                            <div className="flex flex-col flex-grow p-6">
                                                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                                                <p className="flex-grow text-gray-600 dark:text-gray-300">{project.description}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                            <div className="mt-12 text-center">
                                <Link href="/projects" className="btn-primary">
                                    View All Projects
                                    <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-24 bg-gray-50 dark:bg-gray-900">
                        <div className="container px-6 mx-auto text-center lg:px-8">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">Ready to transform your business?</h2>
                            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300">
                                Let's discuss how our AI-powered solutions can help your business thrive in the digital age.
                            </p>
                            <Link href="/contact" className="px-8 py-4 btn-primary">
                                Schedule a Consultation
                                <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
                            </Link>
                        </div>
                    </section>
                </div>
            </GuestLayout>
        </React.Fragment>
    );
};

export default Homepage;
