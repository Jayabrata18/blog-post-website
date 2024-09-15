import { getBlogById } from "@/lib/actions/blogApi";
import React from "react";
import EditForm from "./components/editForm";
import { IBlogDetial } from "@/lib/types";

const page = async ({ params }: { params: { id: string } }) => {
    const { data } = await getBlogById(params.id);
    return (
        <div>
            <EditForm blog={data as IBlogDetial} />
        </div>
    );
};

export default page;
