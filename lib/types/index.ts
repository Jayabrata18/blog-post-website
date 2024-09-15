export type IBlogDetial = {
    created_at: string;
    _id: string;
    image_url: string;
    // is_premium: boolean;
    // is_published: boolean;
    title: string;
    // blog_content: {
    //     blog_id: string;
    //     content: string;
    //     created_at: string;
    // };
    content: string;
} | null;