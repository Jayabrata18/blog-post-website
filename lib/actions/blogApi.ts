'use server'

import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { UserSchemaType } from "@/app/dashboard/user/schema";

// import { IBlog } from "../types";

export async function createBlog(data: BlogFormSchemaType) {
    try {
        const response = await fetch("http://localhost:5555/api/v1/create-blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        console.log("Blog created:", result);
        return { success: true, message: "Blog created successfully", data: result };
    } catch (error) {
        console.error("Failed to create blog:", error);
        return { success: false, message: (error as Error).message };
    }
}

export async function getBlogs() {
    try {
        const response = await fetch("http://localhost:5555/api/v1/get-blogs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
        const blogs = await response.json();
        // // Sort blogs by `createdAt` in ascending order
        // const sortedBlogs = blogs.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        // console.log("Blogs fetched and sorted successfully:", sortedBlogs);
        return {
            success: true,
            // data: sortedBlogs,
            // data: { blogs: blogs }
            blogs,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error fetching blogs:", error.message); // Error log
        } else {
            console.error("Error fetching blogs:", error); // Error log
        }
    }
}
export async function deleteBlogById(blogId: string) {
    try {
        const response = await fetch(`http://localhost:5555/api/v1/delete-blog/${blogId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error(`Failed to delete the blog: ${response.statusText}`);
        const data = await response.json();
        console.log("Blog deleted successfully:", data);
        return { success: true, message: "Blog deleted successfully", data };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error deleting blog:", error.message || "Unknown error");
            return { success: false, message: error.message || "Unknown error" };
        }
    }
}

export async function updateBlogById(blogId: string, updatedData: BlogFormSchemaType) {
    try {
        const response = await fetch(`http://localhost:5555/api/v1/update-blog/${blogId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) throw new Error(`Failed to update the blog: ${response.statusText}`);
        const data = await response.json();
        console.log("Blog updated successfully:", data);
        return { success: true, message: "Blog updated successfully", data };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error updating blog:", error.message || "Unknown error");
            return { success: false, message: error.message || "Unknown error" };
        }
    }
}
export async function getBlogById(id: string) {
    try {
        const response = await fetch(`http://localhost:5555/api/v1/get-blog/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error(`Failed to fetch the blog: ${response.statusText}`);
        const data = await response.json();
        console.log("Blog fetched successfully:", data);
        return { success: true, data };
    } catch (error: unknown) {
        if (error instanceof Error) {

            console.error("Error fetching blog:", error.message || "Unknown error");
            return { success: false, message: error.message || "Unknown error" };
        }
    }

}
export async function createUser(user: UserSchemaType){
    try {
        const response = await fetch("http://localhost:5555/api/v1/create-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        console.log("User created:", result);
        return { success: true, message: "User created successfully", data: result };
    } catch (error) {
        console.error("Failed to create user:", error);
        return { success: false, message: (error as Error).message };
    }

}