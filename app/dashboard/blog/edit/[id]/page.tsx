import { getBlogById } from "@/lib/actions/blogApi";
import React from "react";
import EditForm from "./components/editForm";

const page = async ({ params }: { params: { id: string } }) => {
    const { data } = await getBlogById(params.id);
    return (
        <div>
            <EditForm blog={data} />
        </div>
    );
};

export default page;
