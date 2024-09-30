import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Blogtable from "./components/Blogtable";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const { userId } = auth();
    const isAuth = !!userId;
    // const user =  await currentUser();

    if (!isAuth) {
        redirect("/");
    }

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Blogs</h1>
                <Link href="/dashboard/blog/create">
                    <Button variant="outline">
                        Create <PlusIcon />
                    </Button>
                </Link>
            </div>
            <Blogtable />
        </div>
    );
};

export default Dashboard;
