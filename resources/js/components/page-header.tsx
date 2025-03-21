import ScrollReveal from './scroll-reveal';

interface PageHeaderProps {
    title: string;
    description?: string;
    className?: string; // Allow custom styles
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
    return (
        <div className="py-16 mb-12 text-white bg-primary">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <ScrollReveal>
                    <h1 className="mb-4 text-4xl font-extrabold text-left md:text-5xl">{title}</h1>
                    {description && <p className="max-w-3xl text-lg font-medium text-left opacity-90">{description}</p>}
                </ScrollReveal>
            </div>
        </div>
    );
};

export default PageHeader;
