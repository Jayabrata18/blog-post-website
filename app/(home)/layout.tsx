import React, { ReactNode } from "react";
import Footer from "../Footer";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-5">
            {children}
            <Footer />
        </div>
    );
}
