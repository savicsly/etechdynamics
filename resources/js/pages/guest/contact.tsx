import ImageWithFallback from '@/components/image-with-fallback';
import PageHeader from '@/components/page-header';
import ScrollReveal from '@/components/scroll-reveal';
import GuestLayout from '@/layouts/guest-layout';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };
    return (
        <React.Fragment>
            <GuestLayout>
                <PageHeader
                    title="Contact Us"
                    description="Get in touch with our team to discuss how we can help transform your business with AI-powered solutions."
                />

                <div className="container px-4 pb-24 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <ScrollReveal>
                            <div className="h-full p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Send Us a Message</h2>

                                {submitSuccess && (
                                    <div className="p-4 mb-6 text-green-700 rounded-lg bg-green-50 dark:bg-green-900/30 dark:text-green-300">
                                        Thank you for your message! We'll get back to you soon.
                                    </div>
                                )}

                                {submitError && (
                                    <div className="p-4 mb-6 text-red-700 rounded-lg bg-red-50 dark:bg-red-900/30 dark:text-red-300">
                                        {submitError}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Project Discussion">Project Discussion</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Support">Support</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex items-center justify-center w-full py-3 btn-primary"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg
                                                        className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="relative h-48">
                                    <ImageWithFallback
                                        src="/images/contact-map.jpg"
                                        alt="Office Location"
                                        fill
                                        className="object-cover"
                                        fallbackSrc="/placeholder.svg?height=300&width=600"
                                    />
                                    <div className="absolute inset-0 bg-primary/20"></div>
                                </div>

                                <div className="flex-grow p-8">
                                    <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <MapPin className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-primary" />
                                            <div>
                                                <h3 className="font-medium text-gray-900 dark:text-white">Our Office</h3>
                                                <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                    123 Tech Street
                                                    <br />
                                                    Innovation City, IC 12345
                                                    <br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <Phone className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-primary" />
                                            <div>
                                                <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                                <p className="mt-1 text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <Mail className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-primary" />
                                            <div>
                                                <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                                <p className="mt-1 text-gray-600 dark:text-gray-300">contact@elevatetech.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </GuestLayout>
        </React.Fragment>
    );
};
export default ContactPage;
