import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface Contact2Props {
    title?: string;
    description?: string;
    phone?: string;
    email?: string;
    web?: { label: string; url: string };
}

// Google Apps Script Web App URL for form submissions
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDMs04sl-0xBFZgDCbbBoMVde2C8eJB-OS0sTTP1Y4XjPZz-T37NqEV-g3KEINh-Ut/exec";

export const Contact2 = ({
    title = "Contact Us",
    description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
    phone = "(123) 34567890",
    email = "email@example.com",
    web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString(),
                }),
            });

            // Since we're using no-cors, we can't read the response
            // But if no error is thrown, we assume success
            setSubmitStatus("success");
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-32">
            <div className="container">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                                {title}
                            </h1>
                            <p className="text-muted-foreground">{description}</p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                                Contact Details
                            </h3>
                            <ul className="ml-4 list-disc">
                                <li>
                                    <span className="font-bold">Phone: </span>
                                    {phone}
                                </li>
                                <li>
                                    <span className="font-bold">Email: </span>
                                    <a href={`mailto:${email}`} className="underline">
                                        {email}
                                    </a>
                                </li>
                                <li>
                                    <span className="font-bold">Web: </span>
                                    <a href={web.url} target="_blank" className="underline">
                                        {web.label}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="firstname">First Name</Label>
                                <Input
                                    type="text"
                                    id="firstname"
                                    placeholder="First Name"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input
                                    type="text"
                                    id="lastname"
                                    placeholder="Last Name"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    type="tel"
                                    id="phone"
                                    placeholder="+91 9876543210"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                placeholder="Type your message here."
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Submit Button with States */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : submitStatus === "success" ? (
                                <>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Message Sent!
                                </>
                            ) : submitStatus === "error" ? (
                                <>
                                    <AlertCircle className="mr-2 h-4 w-4" />
                                    Failed - Try Again
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>

                        {/* Status Messages */}
                        {submitStatus === "success" && (
                            <p className="text-center text-green-600 font-medium">
                                Thank you! We'll get back to you soon.
                            </p>
                        )}
                        {submitStatus === "error" && (
                            <p className="text-center text-red-600 font-medium">
                                Something went wrong. Please try again or contact us directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
