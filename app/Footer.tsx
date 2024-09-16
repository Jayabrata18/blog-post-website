import {
    DiscordLogoIcon,
    GitHubLogoIcon,
    GlobeIcon,
    HeartFilledIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon
} from "@radix-ui/react-icons";
import React from "react";

const Footer = () => {
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
                        <GitHubLogoIcon className="w-6 h-6" />
                        <LinkedInLogoIcon className="w-6 h-6" />
                        <DiscordLogoIcon className="w-6 h-6" />
                        <TwitterLogoIcon className="w-6 h-6" />
                        <InstagramLogoIcon className="w-6 h-6" />
                        <GlobeIcon className="w-6 h-6" />
                    </div>
                </div>
                <h2> &copy; 2024 All right reserved</h2>
            </div>
        </footer>
    );
};

export default Footer;
