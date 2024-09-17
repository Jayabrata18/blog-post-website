import { getBlogs } from "@/lib/actions/blogApi";
import { IBlog } from "@/lib/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
    const response = await getBlogs();

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
            {response?.blogs?.map((blog: IBlog, index: number) => {
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
                        <div className="flex md:items-end flex-col md:flex-row mx-auto  justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-400">
                                    {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </p>
                                <h1 className="text-xl font-bold">{blog.title}</h1>
                            </div>
                            <div>
                                <Heart color="#22c55e" style={{ fill: "#22c55e" }} />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default page;
