import Footer from './guest/footer';
import Header from './guest/header';

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
            <Header />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
        </div>
    );
};

export default GuestLayout;
