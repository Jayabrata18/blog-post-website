"use client";
import BlogForm from "@/app/dashboard/components/Blogform";
import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { toast } from "@/hooks/use-toast";
import { updateBlogById } from "@/lib/actions/blogApi";
import { IBlogDetial } from "@/lib/types";
import { useRouter } from "next/navigation";
import React from "react";

const EditForm = ({ blog }: { blog: IBlogDetial }) => {
    const router = useRouter();
    const handleEdit = async (data: BlogFormSchemaType) => {
        try {
            const result = await updateBlogById(blog?._id!, data);
            console.log("Blog ID:", blog?._id);

            const parsedResult = typeof result === "string" ? JSON.parse(result) : result;
            const { error } = parsedResult;
            if (!error?.message) {
                toast({
                    title: "Blog edited successfully:",
                    description: (
                        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    )
                });
                router.push("/dashboard"); 
            } else {
                toast({
                    title: "Failed to edit the blog",
                    description: (
                        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                            <code className="text-white">{error.message}</code>
                        </pre>
                    )
                });
            }
        } catch (err) {
            toast({
                title: "An unexpected error occurred",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{(err as Error).message}</code>
                    </pre>
                )
            });
        }
    };

    return <BlogForm onHandleSubmit={handleEdit} blog={blog} />;
};

export default EditForm;
