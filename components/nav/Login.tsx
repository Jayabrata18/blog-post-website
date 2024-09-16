"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { DashboardIcon, LockOpen2Icon } from "@radix-ui/react-icons";

const LoginForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            {" "}
            <PopoverTrigger onClick={handleOpen}>
                {" "}
                {/* <Button variant="outline" className="flex items-center gap-2">
                    <SiGithub />
                    Login
                </Button> */}
                <div className="flex items-center gap-2 border border-b-slate-900 rounded px-4 py-2 hover:bg-zinc-800 cursor-pointer">
                    <SiGithub />
                    Login
                </div>
            </PopoverTrigger>
            <PopoverContent className="p-2 space-y-3 divide-y">
                <Link href="/dashboard">
                    <Button variant="ghost" className="w-full flex items-center justify-between" onClick={handleClose}>
                        Dashboard
                        <DashboardIcon />
                    </Button>
                </Link>
                <Button variant="ghost" className="w-full flex items-center justify-between">
                    LogOut
                    <LockOpen2Icon />
                </Button>
            </PopoverContent>
        </Popover>
    );
};

export default LoginForm;
