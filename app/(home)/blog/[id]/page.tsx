import { getBlogById } from "@/lib/actions/blogApi";
import Image from "next/image";
import React from "react";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { data: blog } = await getBlogById(params.id);

    return {
        title: blog?.title,
        authors: {
            name: "Jayabrata Pramanik"
        },
        openGraph: {
            title: blog?.title,
            url: `${process.env.CLIENT_URL}/blog/` + params.id,
            siteName: "Daily Blog By Joy",
            images: blog?.image_url,
            type: "website"
        },
        keywords: [
            "Daily Blog By Joy",
            "Daily tech blog",
            "Computer science blog",
            "Technology blog",
            "Software development tips",
            "AI innovations",
            "Startup tech trends",
            "Tech stack comparisons",
            "GitHub best practices",
            "LeetCode solutions",
            "Coding interview prep",
            "Tech interview process",
            "Hiring trends in tech",
            "Developer salary insights",
            "Programming tutorials",
            "System design guides",
            "Web development tips",
            "AI and machine learning",
            "Tech industry news",
            "Career in software development",
            "Tech job search advice",
            "Tech startup advice",
            "Best programming languages",
            "Full-stack development tips",
            "Frontend vs backend development",
            "Cloud computing trends",
            "DevOps best practices",
            "Software engineering blogs",
            "Open source contributions",
            "Tech career growth",
            "Remote developer jobs",
            "Machine learning tutorials",
            "Data science insights",
            "Coding bootcamp guides",
            "Agile development methods",
            "Tech job interview tips",
            "Programming challenges",
            "Database optimization tips",
            "API development tutorials",
            "Cybersecurity practices",
            "Blockchain technology trends",
            "Microservices architecture",
            "Kubernetes deployment guides",
            "AI and automation in tech",
            "Tech product management",
            "Developer productivity tools",
            "Career advice for developers",
            "Software testing techniques",
            "Best development frameworks",
            "Version control with Git",
            "Continuous integration and delivery"
        ]
    };
}

const page = async ({ params }: { params: { id: string } }) => {
    const { data: blog } = await getBlogById(params.id);
    if (!blog?._id) {
        return <h1 className="text-white">Not found</h1>;
    }
    return (
        <div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
            <div className="sm:px-10 space-y-5">
                <h1 className=" text-3xl font-bold dark:text-gray-200">{blog?.title}</h1>
                <p className="text-sm dark:text-gray-400">{blog?.createdAt ? new Date(blog.createdAt).toDateString() : "Date not Available"}</p>
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
