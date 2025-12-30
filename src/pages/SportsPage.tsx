import ServicePageLayout from "@/components/ServicePageLayout";

const SportsPage = () => {
    return (
        <ServicePageLayout
            title="Sports & Cricket Hosting"
            tagline="He keeps the crowd roaring higher than the scoreboard."
            description="High-energy commentary, team hype, live emotion. From Maharashtra Premier League to university leagues, Emcee Manoj brings the stadium experience to life. With his dynamic presence and cricket knowledge, he keeps fans on the edge of their seats and creates unforgettable match-day memories."
            heroImage="/optimized/Mpl/Sports & Cricket Hosting-medium.webp"
            color="from-green-500/20 to-emerald-500/10"
            galleryImages={[
                "/optimized/Mpl/Sports & Cricket Hosting-medium.webp",
                "/optimized/Mpl/MPL Hosting-medium.webp",
            ]}
            testimonials={[
                {
                    text: "Saw anchor manoj host an event recently, he is absolutely amazing! Full of energy, great crowd connect, and such a natural on stage. Made the whole event flow so smoothly. Highly recommend!",
                    by: "Arya Joshi"
                },
                {
                    text: "Zero dull seconds with Emcee Manoj on stage. The crowd was engaged from start to finish!",
                    by: "Sports Event Organizer"
                },
                {
                    text: "His energy during the cricket match hosting was incredible. The crowd was on their feet the entire time!",
                    by: "Tournament Director"
                },
            ]}
        />
    );
};

export default SportsPage;
