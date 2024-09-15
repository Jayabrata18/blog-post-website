"use client";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import React from "react";

const SwitchForm = ({ checked, toggle, name }: { checked: boolean; toggle: () => Promise<string>; name: string }) => {
    const onSubmit = async () => {
        const { error } = JSON.parse(await toggle());
        if (error?.message) {
            toast({
                title: "Fail to update blog " + name
            });
            //add css
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Switch checked={checked} />
        </form>
    );
};

export default SwitchForm;
