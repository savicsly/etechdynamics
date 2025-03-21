import PageHeader from '@/components/page-header';
import ScrollReveal from '@/components/scroll-reveal';
import GuestLayout from '@/layouts/guest-layout';
import { Brain, Cloud, Lightbulb, Rocket, Shield, Zap } from 'lucide-react';

const services = [
    {
        icon: Brain,
        title: 'AI-Powered Software Development',
        description:
            'Custom AI solutions tailored to your business needs, including predictive analytics, NLP tools, and automated decision-making systems.',
        id: 'ai-software',
    },
    {
        icon: Zap,
        title: 'Intelligent Automation',
        description: 'Implement robotic process automation (RPA) powered by AI to streamline repetitive tasks and improve efficiency.',
        id: 'automation',
    },
    {
        icon: Cloud,
        title: 'Cloud Migration & Management',
        description: 'Assist in migrating to cloud platforms, optimizing cloud infrastructure, and managing cloud-based applications.',
        id: 'cloud',
    },
    {
        icon: Shield,
        title: 'Cybersecurity Consulting',
        description: 'Offer AI-enhanced cybersecurity solutions to protect client data and infrastructure from evolving cyber threats.',
        id: 'security',
    },
    {
        icon: Lightbulb,
        title: 'AI Integration & Optimization',
        description: 'Evaluate existing business processes to identify areas where AI can be integrated for optimization and innovation.',
        id: 'optimization',
    },
    {
        icon: Rocket,
        title: 'Product Development & Innovation',
        description: 'Develop and launch proprietary SaaS products that solve common business challenges using AI.',
        id: 'product-development',
    },
];

const ServicePage = () => {
    return (
        <>
            <GuestLayout>
                <PageHeader
                    title="Our Services"
                    description="Explore our comprehensive range of AI-powered solutions designed to transform your business."
                />

                <div className="container px-4 pb-24 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ScrollReveal key={index}>
                                <div
                                    id={service.id}
                                    className="flex flex-col h-full p-6 transition-transform duration-300 transform bg-white border rounded-lg shadow-lg border-primary/20 group hover:border-primary/20 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <service.icon className="w-12 h-12 mb-4 text-blue-500 service-icon" />
                                    <h2 className="mb-2 text-lg font-semibold text-gray-800 service-title dark:text-white">{service.title}</h2>
                                    <p className="text-sm text-gray-600 service-description dark:text-gray-300 dark:group-hover:text-gray-100">
                                        {service.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </GuestLayout>
        </>
    );
};

export default ServicePage;
