import { cn } from "@/lib/utils";
import {
    DiscordLogoIcon,
    GitHubLogoIcon,
    GlobeIcon,
    HeartFilledIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const links = [
        {
            href: "/others/privacy",
            text: "Privacy"
        },
        {
            href: "/others/terms",
            text: "Terms"
        },
        {
            href: "/others/guideLine",
            text: "Guideline"
        }
    ];
    return (
        <footer className="border-t py-10">
            <div className="max-w-7xl py-10 px-5 md:p-0 space-y-5 mx-auto flex justify-between md:items-end flex-col md:flex-row">
                <div className="space-y-10">
                    <div className="space-y-2 w-full sm:w-96">
                        <h1 className="text-2xl font-bold"> Daily Blog By Joy</h1>
                        <h4 className="text-sm font-bold flex gap-1">
                            Made by Jayabrata Pramanik With <HeartFilledIcon className="w-4 h-4"></HeartFilledIcon>
                        </h4>
                    </div>
                    <div className="flex item-center gap-2">
                        <GitHubLogoIcon className="w-6 h-6 hover:ring-2  ring-green-500 transition-all rounded-full" />
                        <LinkedInLogoIcon className="w-6 h-6 hover:ring-2 ring-green-500 transition-all" />
                        <DiscordLogoIcon className="w-6 h-6 hover:ring-2  ring-green-500 transition-all rounded-full" />
                        <TwitterLogoIcon className="w-6 h-6 hover:ring-2 ring-green-500 transition-all rounded-md" />
                        <InstagramLogoIcon className="w-6 h-6 hover:ring-2 ring-green-500 transition-all rounded-md" />
                        <GlobeIcon className="w-6 h-6 hover:ring-2  ring-green-500 transition-all rounded-full" />
                    </div>
                </div>
                <div>
                    <h2>
                        {" "}
                        &copy; 2024{" "}
                        <a
                            href="https://jayabratapramanik.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold transition-all hover:text-green-500"
                            style={{ textShadow: "0 0 5px rgba(0, 255, 0, 0.7)" }}
                        >
                            JayabrataPramanik.me
                        </a>{" "}
                        All rights reserved
                    </h2>
                    <div className="flex items-center gap-6 justify-center my-2">
                        {links.map(({ href, text }, index) => (
                            <Link key={index} href={href} className="flex items-center gap-1 hover:text-green-500 hover:underline transition-all">
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
