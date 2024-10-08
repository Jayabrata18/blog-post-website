"use client";

import { cn } from "@/lib/utils";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
    const pathname = usePathname();
    const links = [
        {
            href: "/dashboard",
            text: "Dashboard",
            Icon: ReaderIcon
        },
        {
            href: "/dashboard/user",
            text: "user",
            Icon: PersonIcon
        }
    ];
    return (
        <div className="flex items-center gap-5 border-b pb-2">
            {links.map(({ href, text, Icon }, index) => {
                return (
                    <Link
                        key={index}
                        href={href}
                        className={cn("flex items-center gap-1 hover:underline transition-all", { "text-green-500 underline": pathname === href })}
                    >
                        <Icon />/{text}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLink;
