import { IBlog } from "@/lib/types";
import Image from "next/image";
// import React from "react";

// const page = async ({ params }: { params: { id: string } }) => {
//     const { data: blog } = await fetch(`${process.env.CLIENT_URL}/blog?id=${params.id}`).then((res) => res.json()) as {data:IBlog};

//     return (
//         <div className="max-w-5xl mx-auto min-h-screen pt-10 space-y-10">
//             <div>
//                 <h1>{blog.title}</h1>
//                 <p>{blog.content}</p>
//             </div>
//         </div>
//     );
// };

// export default page;
export default async function page({ params }: { params: { id: string } }) {
    const { data: blog } = (await fetch(process.env.CLIENT_URL + "/blog?id=" + params.id).then((res) => res.json())) as { data: IBlog };

    if (!blog?._id) {
        return <h1 className="text-white">Not found</h1>;
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
                    src={blog?.image_url!}
                    alt="cover"
                    fill
                    className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            {/* <Content blogId={params.id} /> */}
        </div>
    );
}