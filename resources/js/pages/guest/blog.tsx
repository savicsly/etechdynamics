import PageHeader from '@/components/page-header';
import ScrollReveal from '@/components/scroll-reveal';
import GuestLayout from '@/layouts/guest-layout';
import { Link } from '@inertiajs/react';
import React from 'react';

const blogPosts = [
    {
        title: 'The Future of AI in Business',
        excerpt: 'Explore how artificial intelligence is reshaping the business landscape and what it means for your company.',
        date: '2023-06-15',
        author: 'John Doe',
        image: '/images/blog1.jpg',
        slug: 'future-of-ai-in-business',
    },
    {
        title: 'Implementing Machine Learning in Your Workflow',
        excerpt: 'Learn how to integrate machine learning models into your existing business processes for improved efficiency.',
        date: '2023-06-10',
        author: 'Jane Smith',
        image: '/images/blog2.jpg',
        slug: 'implementing-machine-learning-workflow',
    },
    {
        title: 'The Importance of Data Security in the Digital Age',
        excerpt: 'Discover why data security is crucial for businesses and how to protect your valuable information.',
        date: '2023-06-05',
        author: 'Mike Johnson',
        image: '/images/blog3.jpg',
        slug: 'importance-of-data-security',
    },
];

const BlogPage = () => {
    return (
        <React.Fragment>
            <GuestLayout>
                <PageHeader title="Our Blog" description="Insights, trends, and knowledge from our experts in AI and digital transformation." />

                <div className="container px-4 pb-24 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <ScrollReveal key={index}>
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <div className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
                                        <img
                                            src={post.image || '/placeholder.svg'}
                                            alt={post.title}
                                            width={300}
                                            height={200}
                                            className="object-cover w-full h-48"
                                        />
                                        <div className="flex flex-col flex-grow p-6">
                                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
                                            <p className="flex-grow mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                                            <div className="flex items-center justify-between mt-auto text-sm text-gray-500 dark:text-gray-400">
                                                <span>{post.author}</span>
                                                <span>{post.date}</span>
                                            </div>
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
export default BlogPage;
