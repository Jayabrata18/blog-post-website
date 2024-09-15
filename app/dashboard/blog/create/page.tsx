"use client";
import React from "react";
import BlogForm from "../../components/Blogform";
import { BlogFormSchemaType } from "../../schema";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createBlog } from "@/lib/actions/blogApi";

export default function Page() {
    const router = useRouter();
    const handleCreate = async (data: BlogFormSchemaType) => {
        const result = await createBlog(data);
        const parsedResult = typeof result === "string" ? JSON.parse(result) : result;
        const { error } = parsedResult;

        if (!error?.message) {
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                )
            });
            router.push("/dashboard");
        } else {
            toast({
                title: "Failed to create the blog",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{error.message}</code>
                    </pre>
                )
            });
            router.push("/dashboard");
        }
    };
    return <BlogForm onHandleSubmit={handleCreate} />;
}
