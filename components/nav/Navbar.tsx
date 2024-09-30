import Link from "next/link";
import React from "react";
import Login2 from "./Login2";
// import LoginForm from "./Login"; 

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
            <Login2/>
        </nav>
    );
};

export default Navbar;
