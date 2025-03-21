import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ClientLogosCarouselProps {
    logos: string[];
    autoSlideInterval?: number;
}

const ClientLogosCarousel = ({ logos, autoSlideInterval = 3000 }: ClientLogosCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Number of logos to show per slide based on screen size
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(logos.length / itemsPerSlide);

    useEffect(() => {
        // if (isPlaying) {
        //     timerRef.current = setInterval(() => {
        //         setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        //     }, autoSlideInterval);
        // }
        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, autoSlideInterval);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [totalSlides, autoSlideInterval, itemsPerSlide]);

    const getVisibleLogos = () => {
        const startIndex = currentIndex * itemsPerSlide;
        return logos.slice(startIndex, startIndex + itemsPerSlide);
    };

    return (
        <div className="relative w-full py-8 overflow-hidden">
            <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16"
                    >
                        {getVisibleLogos().map((logo, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <img
                                    src={logo || '/placeholder.svg'}
                                    alt={`Client ${currentIndex * itemsPerSlide + index + 1}`}
                                    width={120}
                                    height={50}
                                    className="w-auto h-12"
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* <div className="flex items-center justify-center gap-2 mt-6">
                <button
                    onClick={handlePrevious}
                    className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-1 mx-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button onClick={handleNext} className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary" aria-label="Next slide">
                    <ChevronRight className="w-5 h-5" />
                </button>

                <button
                    onClick={togglePlayPause}
                    className="p-1 ml-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
            </div> */}
        </div>
    );
};
export default ClientLogosCarousel;
