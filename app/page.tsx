import { Button } from "@/components/ui/button";
import { getBlogs } from "@/lib/actions/blogApi";
import { IBlog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";

const page = async () => {
    const response = await getBlogs();

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
            {response?.data?.blogs?.map((blog: IBlog, index: number) => {
                return (
                    <Link
                        href={"/blog/" + blog._id}
                        key={index}
                        className="w-full border rounded-md bg-gradient-dark p-5 hover:ring-2 ring-green-500 transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3"
                    >
                        <div className="relative w-full h-72 md:h-64 xl:h-96">
                            <Image
                                priority
                                src={blog.image_url}
                                alt="cover"
                                fill
                                className="object-cover object-center "
                                sizes="(max-width: 768px) 100vw, (max-width:1200px): 50vw, 33vw"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400">{new Date(blog.createdAt).toDateString()}</p>
                            <h1 className="text-xl font-bold">{blog.title}</h1>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default page;
