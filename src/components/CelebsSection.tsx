import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const celebImages = [
    "/optimized/Celebs/Prajakta mali -medium.webp",
    "/optimized/Celebs/Yashraj mukhate-medium.webp",
    "/optimized/Celebs/Rajesh kawa-medium.webp",
    "/optimized/Celebs/IMG_0396_jpg-medium.webp",
    "/optimized/Celebs/6D5A9982-medium.webp",
    "/optimized/Celebs/DSC_7917-medium.webp",
    "/optimized/Celebs/Picture48-medium.webp",
    "/optimized/Celebs/Picture49-medium.webp",
    "/optimized/Celebs/99FCEC7E-EC93-4A88-B9ED-3B22B914982B-medium.webp",
];

const CelebsSection = () => {
    return (
        <ImageAutoSlider
            images={celebImages}
            title="Sharing the Stage with Stars"
            subtitle="From Bollywood icons to industry leaders — Emcee Manoj has shared the spotlight with some of the biggest names in entertainment."
        />
    );
};

export default CelebsSection;
