// Type declaration for Instagram embed script
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

export { };
