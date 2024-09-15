// "use client";
// import MarkdownPreview from "@/components/markdown/MarkdownPreview";
// import { getBlogById } from "@/lib/actions/blogApi";
// import React, { useState } from "react";

// const BlogContent = async ({ blogId }: { blogId: string }) => {
//     const { data } = await getBlogById(blogId);
//     if (!data._id) {
//         return <h1 className="text-white">Not found</h1>;
//     }

//     const [blog, setBlog] = useState<{ id: string; title: string; content: string; createdAt: string } | null>();

//     return <MarkdownPreview content={blog?.content || ""} />;
// };

// export default BlogContent;
