("");
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const Login2 = () => {
    const { userId } = auth();
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
                    </>
                )}
            </ul>
        </div>
    );
};

export default Login2;
