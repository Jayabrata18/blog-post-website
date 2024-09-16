"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import React, { useTransition } from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/Alert-dialog";
import { toast } from "@/hooks/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { deleteBlogById } from "@/lib/actions/blogApi";
import { cn } from "@/lib/utils";

interface DeleteAlertProps {
    blogId: string;
}

const DeleteAlert: React.FC<DeleteAlertProps> = ({ blogId }) => {
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            try {
                const result = await deleteBlogById(blogId);
                const { success, message } = result;

                if (success) {
                    toast({
                        title: "Blog deleted successfully",
                        description: (
                            <pre className="mt-2 w-full rounded-md bg-slate-700 p-4">
                                <code className="text-white">{JSON.stringify(result, null, 2)}</code>
                            </pre>
                        )
                    });
                } else {
                    toast({
                        title: "Failed to delete the blog",
                        description: (
                            <pre className="mt-2 w-full rounded-md bg-slate-700 p-4">
                                <code className="text-white">{message}</code>
                            </pre>
                        )
                    });
                }
            } catch (error) {
                toast({
                    title: "An error occurred",
                    description: (
                        <pre className="mt-2 w-full rounded-md bg-slate-700 p-4">
                            <code className="text-white">{(error as Error).message}</code>
                        </pre>
                    )
                });
            }
        });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    <TrashIcon />
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your blog and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form onSubmit={onSubmit}>
                        <Button type="submit" className="flex gap-2 items-center">
                            <AiOutlineLoading3Quarters
                                className={cn("animate-spin", {
                                    hidden: !isPending
                                })}
                            />
                            Continue
                        </Button>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteAlert;
