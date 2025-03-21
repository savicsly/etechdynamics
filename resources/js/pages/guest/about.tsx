import PageHeader from '@/components/page-header';
import ScrollReveal from '@/components/scroll-reveal';
import GuestLayout from '@/layouts/guest-layout';
import { Head } from '@inertiajs/react';

const AboutPage = () => {
    return (
        <>
            <Head title="About Elevate Tech Dynamics">
                <meta name="description" content="Learn about our mission, vision, and the values that drive our innovation." />
            </Head>

            <GuestLayout>
                <PageHeader
                    title="About Elevate Tech Dynamics"
                    description="Learn about our mission, vision, and the values that drive our innovation."
                />
                <div className="container px-4 pb-24 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 mb-16 md:grid-cols-2">
                        <ScrollReveal>
                            <img src="/images/team.jpg" alt="Elevate Tech Team" width={600} height={400} className="rounded-lg shadow-lg" />
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className="mb-4 text-2xl font-semibold text-primary">Our Vision</h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-400">
                                To be a global leader in technology innovation, providing AI-driven software solutions, transforming industries
                                through our commitment to excellence, creativity, and sustainable solutions.
                            </p>
                            <h2 className="mb-4 text-2xl font-semibold text-primary">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                To empower businesses with cutting-edge technology solutions that drive digital transformation, enhance operational
                                efficiency, and foster sustainable growth.
                            </p>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal width="100%">
                        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">Our Core Values</h2>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {[
                                {
                                    title: 'Innovation',
                                    description: "Constantly pushing the boundaries of what's possible with AI and technology.",
                                },
                                {
                                    title: 'Excellence',
                                    description: 'Delivering high-quality solutions that exceed client expectations.',
                                },
                                {
                                    title: 'Collaboration',
                                    description: 'Working closely with our clients to understand and meet their unique needs.',
                                },
                                {
                                    title: 'Integrity',
                                    description: 'Maintaining the highest ethical standards in all our business practices.',
                                },
                                {
                                    title: 'Sustainability',
                                    description: 'Developing solutions that promote long-term business and environmental sustainability.',
                                },
                                {
                                    title: 'Continuous Learning',
                                    description: 'Staying at the forefront of technological advancements through ongoing education and research.',
                                },
                            ].map((value, index) => (
                                <div key={index} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <h3 className="mb-2 text-xl font-semibold text-primary">{value.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </GuestLayout>
        </>
    );
};
export default AboutPage;
