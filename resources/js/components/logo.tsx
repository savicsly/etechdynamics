interface LogoProps {
    variant?: 'full' | 'symbol' | 'full-white' | 'full-all-blue';
    className?: string;
}

const Logo = ({ variant = 'full', className = '' }: LogoProps) => {
    const logoSrc = {
        full: '/images/logo-full-blue.png',
        // symbol: '/images/logo-symbol-blue.png',
        symbol: '/images/logo-full-blue.png',
        'full-white': '/images/logo-full-white.png',
        'full-all-blue': '/images/logo-full-all-blue.png',
    };

    const logoWidth = variant.includes('full') ? 200 : 40;
    const logoHeight = variant.includes('full') ? 50 : 40;

    return (
        <img
            src={logoSrc[variant] || '/images/placeholder.svg'}
            alt="Elevate Tech Dynamics"
            width={logoWidth}
            height={logoHeight}
            className={`h-auto ${className}`}
        />
    );
};

export default Logo;
