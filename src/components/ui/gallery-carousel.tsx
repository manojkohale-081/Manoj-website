"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface GalleryCarouselProps {
    images: string[];
    onImageClick?: (image: string) => void;
}

function GalleryCarousel({ images, onImageClick }: GalleryCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        const interval = setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 2500);

        return () => clearTimeout(interval);
    }, [api, current]);

    return (
        <div className="w-full py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center">
                        Gallery & BTS
                    </h3>
                    <Carousel
                        setApi={setApi}
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {images.map((image, index) => (
                                <CarouselItem
                                    className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                                    key={index}
                                >
                                    <div
                                        className="aspect-square rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:scale-105 cursor-pointer"
                                        onClick={() => onImageClick?.(image)}
                                    >
                                        <img
                                            src={`/optimized/Bts/${image}`}
                                            alt={`Behind the scenes ${index + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <p className="font-accent text-muted-foreground text-center italic">
                        "You can feel the energy even in pictures."
                    </p>
                </div>
            </div>
        </div>
    );
}

export { GalleryCarousel };
