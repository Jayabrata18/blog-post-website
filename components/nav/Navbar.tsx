import Link from "next/link";
import React from "react";
import Login2 from "./Login2";
import { Button } from "../ui/button";
import { DashboardIcon } from "@radix-ui/react-icons";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="group">
                <Link href="/" className="text-2xl font-bold">
                    DailyBlog By Joy
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
            </div>
            {/* <LoginForm /> */}
            <Login2 />
            {/* <Link href="/dashboard">
                <Button variant="ghost" className="w-full flex items-center justify-between" >
                    Dashboard
                    <DashboardIcon />
                </Button>
            </Link> */}
        </nav>
    );
};

export default Navbar;
