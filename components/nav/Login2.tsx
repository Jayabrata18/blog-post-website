import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { DashboardIcon } from "@radix-ui/react-icons";

const Login2 = async () => {
    const { userId } = auth();
    const user = await currentUser();
    return (
        <div>
            <ul className="flex justify-between py-4 px-5">
                {!userId ? (
                    <>
                        <SignInButton />
                    </>
                ) : (
                    <>
                        <UserButton />
                        {user.privateMetadata.role === "admin" && (
                            <div className="p-2 space-y-3 md:m-1 divide-y">
                                <Link href="/dashboard">
                                    <Button variant="ghost" className="w-full flex items-center justify-between hover:bg-green-500">
                                        Dashboard 
                                        <DashboardIcon />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </ul>
        </div>
    );
};

export default Login2;
