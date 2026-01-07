import { Briefcase, ChefHat, UtensilsCrossed } from 'lucide-react';

export const NAV_LINKS = ['About', 'Resume', 'Portfolio', 'Services'];

export const HERO_CONTENT = {
    subtitle: "Culinary Architect",
    titlePart1: "Eli's.",
    titlePart2: "Cuisine",
    bio: "Culinary professional blending expertise in Japanese regional cuisine with modern creativity. Dedicated to delivering exceptional dining experiences.",
    ctaButton: "Get in Touch",
    portfolioLink: "See Portfolio",
    badgeTitle: "Sushi Specialist",
    badgeSubtitle: "Menu Planning & Design"
};

export const ABOUT_CONTENT = {
    subtitle: "My Philosophy",
    titlePart1: "Precision in",
    titlePart2: "Every",
    titlePart3: "Action",
    quote: "\"Fine dining is not just food; it is a conversation between the chef, the ingredient, and the guest. I bring my culinary expertise, creativity, and discipline to every dish.\"",
    description: "I specialize in creating immersive culinary experiences with a focus on Japanese Regional Cuisine. Whether leading a kitchen staff or planning a menu, my goal is perfection in simplicity."
};

export const SERVICES_CONTENT = {
    subtitle: "Expertise & Availability",
    title: "Services",
    items: [
        { icon: Briefcase, title: "Menu Consulting", desc: "Developing concept-driven menus and operational workflows for high-end establishments." },
        { icon: ChefHat, title: "Private Chef", desc: "Exclusive culinary experiences for private events, utilizing the finest seasonal ingredients." },
        { icon: UtensilsCrossed, title: "Pop-Up Collaborations", desc: "Partnering with restaurants and brands for unique, limited-time dining events." }
    ]
};

export const PORTFOLIO_CONTENT = {
    subtitle: "Selected Works",
    title: "Culinary Portfolio"
};

export const RESUME_CONTENT = {
    subtitle: "Career Timeline",
    title: "Professional Experience",
    link: {
        text: "Download Resume",
        url: "/docs/Jose%20Elias%20Allard%20Updated%20Resume.pdf"
    }
};

export const GALLERY_CONTENT = {
    subtitle: "Visual Diary",
    title: "The Pass"
};

export const INQUIRE_MODAL_CONTENT = {
    subtitle: "Work with Chef Eli",
    title: "Start a Conversation",
    form: {
        nameLabel: "Your Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email Address",
        emailPlaceholder: "email@example.com",
        purposeLabel: "Purpose of Inquiry",
        purposePlaceholder: "Select a purpose...",
        purposeOptions: [
            { value: "private-event", label: "Private Event / Dining" },
            { value: "consulting", label: "Menu Consulting" },
            { value: "popup", label: "Pop-Up Collaboration" },
            { value: "job-offer", label: "Job Offer / Executive Role" },
            { value: "other", label: "Other" }
        ],
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your event or proposal...",
        submitButton: "Send Inquiry"
    }
};

export const FOOTER_CONTENT = {
    brandName: "ELI'S CUISINE",
    brandDesc: "Dedicated to the preservation and evolution of culinary arts.",
    contactTitle: "Get in Touch",
    contactDesc: "For inquiries regarding consulting, employment, or press.",
    email: "Mrjose.allard@gmail.com",
    location: "Based in Fort Lauderdale, Hollywood, and Miami Area (Open to Travel)",
    copyright: "Eli's Cuisine. All Rights Reserved."
};
