import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/nav/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { dark } from "@clerk/themes";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Loading from "./loading";
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.CLIENT_URL!),
    title: {
        template: "%s | Daily Blog by Joy",
        default: "Daily Blog by Joy"
    },
    description:
        "[Daily Blog by Joy is a daily tech blog dedicated to delivering insightful and actionable content on computer science, technology, and software development. We cover a wide range of topics, including AI innovations, startup culture, tech stacks, GitHub best practices, LeetCode challenges, and interview preparation. Whether you're navigating the interview process, exploring company hiring trends, or comparing industry salaries, our blog offers practical advice and in-depth analysis. Tailored for developers, tech enthusiasts, and job seekers alike, we aim to keep you informed and empowered in the fast-evolving tech landscape.",
    openGraph: {
        type: "website",
        url: "process.env.CLIENT_URL",
        title: "Daily Blog by Joy",
        siteName: "Daily Blog by Joy",
        description:
            "[Daily Blog by Joy is a daily tech blog dedicated to delivering insightful and actionable content on computer science, technology, and software development. We cover a wide range of topics, including AI innovations, startup culture, tech stacks, GitHub best practices, LeetCode challenges, and interview preparation. Whether you're navigating the interview process, exploring company hiring trends, or comparing industry salaries, our blog offers practical advice and in-depth analysis. Tailored for developers, tech enthusiasts, and job seekers alike, we aim to keep you informed and empowered in the fast-evolving tech landscape.]"
        //   images: [
        //       {
        //           url: "https://dailyblogbyjoy.com/og-image.png",
        // }
        //   ]
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

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <html lang="en" suppressHydrationWarning>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <ClerkLoading>
                        <div className="flex items-center justify-center h-screen text-2xl">
                            <Loading />
                        </div>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                            <main className="max-w-7xl mx-auto p-10 space-y-10">
                                <Navbar />
                                {children}
                            </main>
                            <Toaster />
                        </ThemeProvider>
                    </ClerkLoaded>
                </body>
            </html>
        </ClerkProvider>
    );
}
