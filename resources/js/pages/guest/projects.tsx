import PageHeader from '@/components/page-header';
import ScrollReveal from '@/components/scroll-reveal';
import GuestLayout from '@/layouts/guest-layout';
import { Link } from '@inertiajs/react';
import React from 'react';

const projects = [
    {
        title: 'AI-Driven Customer Service Platform',
        description: 'Developed an intelligent chatbot system that improved customer satisfaction by 40%.',
        image: '/images/project1.jpg',
        link: '/projects/ai-customer-service',
    },
    {
        title: 'Predictive Maintenance Solution',
        description: 'Implemented IoT sensors and machine learning algorithms to predict equipment failures, reducing downtime by 60%.',
        image: '/images/project2.jpg',
        link: '/projects/predictive-maintenance',
    },
    {
        title: 'Blockchain-based Supply Chain Management',
        description: 'Created a transparent and secure supply chain tracking system using blockchain technology.',
        image: '/images/project3.jpg',
        link: '/projects/blockchain-supply-chain',
    },
    {
        title: 'AI-Powered Financial Forecasting Tool',
        description: 'Developed a machine learning model that improved financial forecasting accuracy by 35%.',
        image: '/images/blog1.jpg',
        link: '/projects/financial-forecasting',
    },
];

const ProjectPage = () => {
    return (
        <React.Fragment>
            <GuestLayout>
                <PageHeader title="Our Projects" description="Discover how we've helped businesses transform through innovative AI solutions." />

                <div className="container px-4 pb-24 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <ScrollReveal key={index}>
                                <Link href={project.link} className="block h-full">
                                    <div className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
                                        <img
                                            src={project.image || '/placeholder.svg'}
                                            alt={project.title}
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-48"
                                        />
                                        <div className="flex-grow p-6">
                                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                                            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </GuestLayout>
        </React.Fragment>
    );
};
export default ProjectPage;
