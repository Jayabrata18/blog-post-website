/* eslint-disable @typescript-eslint/no-unused-vars */
import { icons } from "../../lib/icon";
import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/atom-one-dark.min.css";
import { cn } from "@/lib/utils";
import { PiTerminalThin } from "react-icons/pi";
import CopyButton from "./CopyButton";

export default function MarkdownPreview({ content, className = "sm:p-10" }: { content: string; className?: string }) {
    return (
        <Markdown
            className={cn("dark:text-gray-200 space-y-8", className)}
            rehypePlugins={[rehypeHighlight]}
            components={{
                h1: ({ node, ...props }) => {
                    return <h1 {...props} className="text-3xl font-bold" />;
                },
                h2: ({ node, ...props }) => {
                    return <h2 {...props} className="text-2xl font-bold mt-10 mb-10" />;
                },
                h3: ({ node, ...props }) => {
                    return <h3 {...props} className="text-xl font-bold mt-10 mb-10" />;
                },
                code: ({ node, className, children, ...props }) => {
                    // Extract language from className (e.g., class="language-js")
                    const match = /language-(\w+)/.exec(className || "");
                    const id = `code-block-${Math.random().toString(36).substring(7)}`;

                    if (match) {
                        const language = match[1];
                        let Icon = PiTerminalThin;

                        // Check if there's a custom icon for the language
                        if (icons.hasOwnProperty(language)) {
                            Icon = icons[language as keyof typeof icons];
                        }

                        return (
                            <div className="bg-gradient-dark text-gray-200 border-[0.5px] rounded-md border-zinc-300">
                                <div className="flex items-center justify-between px-5 py-2 border-b-[0.5px] border-zinc-500">
                                    <div className="flex items-center gap-2">
                                        <Icon />
                                        <p className="text-sm text-gray-400">{language.toUpperCase()}</p>
                                    </div>
                                    <CopyButton id={id} />
                                </div>
                                <div className="overflow-x-auto w-full">
                                    <div className="p-5" id={id}>
                                        <pre className={className} {...props}>
                                            {children}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <code className="text-lg break-words bg-zinc-700 px-1 rounded-sm" {...props}>
                            {children}
                        </code>
                    );
                }
            }}
        >
            {content}
        </Markdown>
    );
}
