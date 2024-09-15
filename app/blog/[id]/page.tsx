import { getBlogById } from "@/lib/actions/blogApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { BlogContentLoading } from "./components/blogLoadin";

const page = async ({ params }: { params: { id: string } }) => {
    const [loading, setLoading] = useState(true);

    const { data: blog } = await getBlogById(params.id);
    if (!blog?._id) {
        return <h1 className="text-white">Not found</h1>;
    }
    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <BlogContentLoading />;
    }
    return (
        <div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
            <div className="sm:px-10 space-y-5">
                <h1 className=" text-3xl font-bold dark:text-gray-200">{blog?.title}</h1>
                <p className="text-sm dark:text-gray-400">{new Date(blog?.createdAt!).toDateString()}</p>
            </div>
            <div className="w-full h-96 relative">
                <Image
                    priority
                    src={blog?.image_url || "/"}
                    alt="cover"
                    fill
                    className=" object-cover object-center rounded-md border-[0.5px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px):50vw, 33vw"
                />
            </div>
            <MarkdownPreview content={blog?.content || ""} />;
        </div>
    );
};
export default page;
