import { Button } from "@/components/ui/button";
import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";
import { Switch } from "@/components/ui/switch";
import DeleteAlert from "./DeleteAlert";
import { getBlogs } from "@/lib/actions/blogApi";
// import SwitchForm from "./SwitchForm";

interface Blog {
    _id: string;
    title: string;
    content: string;
    image_url: string;
    createdAt: string;
    updatedAt: string;
}
const Blogtable = async () => {
    const response = await getBlogs();
    const blogs = response?.data || [];
    return (
        <div className="overflow-x-auto">
            <div className="border bg bg-gradient-dark rounded-md w-[900px] md:w-full">
                <div className="grid grid-cols-5 p-5 text-gray-500 border-b">
                    <h1 className="col-span-2">Title</h1>
                    <h1>Premium</h1>
                    <h1>Publish</h1>
                </div>
                {blogs?.map((blog: Blog, id: number) => {
                    return (
                        <div className="grid grid-cols-5 p-5" key={id}>
                            <h1 className="col-span-2">{blog.title}</h1>
                            {/* <SwitchForm checked={blog.is_published} name = "published" /> */}
                            <Switch checked={false} />
                            <Switch checked={true} />
                            <Actions id={blog._id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Actions = ({ id }: { id: string }) => {
    return (
        <div className="flex items-center gap-5 flex-wrap">
            <Button variant="outline" className="flex items-center gap-2">
                <EyeOpenIcon />
                View
            </Button>
            <DeleteAlert blogId={id} />
            <Button variant="outline" className="flex items-center gap-2">
                <Pencil1Icon />
                edit
            </Button>{" "}
        </div>
    );
};
export default Blogtable;
