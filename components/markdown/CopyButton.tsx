"use client";

import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function CopyButton({ id }: { id: string }) {
    const [onCopy, setOnCopy] = useState(false);
    const [onSuccess, setSuccess] = useState(false);
    const [copiedMessage, setCopiedMessage] = useState(false);

    const handleCopy = async () => {
        const text = document.getElementById(id)!.textContent;
        try {
            await navigator.clipboard.writeText(text!);
            setOnCopy(true);
            setCopiedMessage(true);

            // Hide the "Copied!" message after 2 seconds
            setTimeout(() => {
                setCopiedMessage(false);
            }, 500);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="relative hover:scale-105 hover:bg-zinc-700 p-2 rounded-md cursor-pointer" onClick={handleCopy}>
            <IoCheckmarkOutline
                className={`cursor-pointer transition-all w-5 h-5 text-green-500 ${onSuccess ? "scale-100" : "scale-0"}`}
                onTransitionEnd={() => {
                    setTimeout(() => {
                        setSuccess(false);
                        setOnCopy(false);
                    }, 500);
                }}
            />

            <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center">
                <BsCopy
                    className={`transition-all ${onCopy ? "scale-0" : "scale-100"}`}
                    onTransitionEnd={() => {
                        if (onCopy) {
                            setSuccess(true);
                        }
                    }}
                />
            </div>

            {copiedMessage && <div className="absolute top-full mt-1 text-sm text-green-500">Copied!</div>}
        </div>
    );
}
