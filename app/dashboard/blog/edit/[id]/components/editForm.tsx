"use client";
import BlogForm from "@/app/dashboard/components/Blogform";
import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { toast } from "@/hooks/use-toast";
import { updateBlogById } from "@/lib/actions/blogApi";
import { IBlogDetial } from "@/lib/types";
import { useRouter } from "next/navigation";
import React from "react";

const editForm = ({ blog }: { blog: IBlogDetial }) => {
    const router = useRouter();
    const handleEdit = async (data: BlogFormSchemaType) => {
        const result = await updateBlogById(blog?.id!, data);
        console.log("id", blog?.id);

        console.log("result", result);
        const parsedResult = typeof result === "string" ? JSON.parse(result) : result;
        const { error } = parsedResult;

        if (!error?.message) {
            toast({
                title: "You submitted the following values for edit :",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                )
            });
        } else {
            toast({
                title: "Failed to Edit the blog",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{error.message}</code>
                    </pre>
                )
            });
            router.push("/dashboard");
        }
    };

    return <BlogForm onHandleSubmit={handleEdit} blog={blog} />;
};

export default editForm;
