import { useState } from 'react';

interface ImageWithFallbackProps {
    src: string;
    fallbackSrc?: string;
    alt?: string;
    [key: string]: string | number | boolean | undefined;
}

const ImageWithFallback = ({ src, fallbackSrc = '/images/placeholder.svg', alt, ...rest }: ImageWithFallbackProps) => {
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <img
            {...rest}
            src={imgSrc || '/images/placeholder.svg'}
            alt={alt}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};
export default ImageWithFallback;
