"use client";

import { IconType } from "react-icons";
import { toast } from "react-toastify";

interface ShareHeaderItemProps {
    isPointer: boolean;
    Icon: IconType;
    name: string;
} 

export function SharedHeaderItem({ isPointer, Icon, name }: ShareHeaderItemProps) {
    const redeployHook = async () => {
        await fetch("/api/redeploy", {
            method: "POST"
        });

        toast.info("redeployの実行中です", {
            theme: "colored",
            autoClose: 2000
        });
    }

    return (
        <button className={ isPointer ? "flex cursor-pointer" : "flex cursor-not-allowed" } onClick={ name === "redeploy" ? redeployHook : () => {} }>
            <Icon size={24} /><span className="font-bold ml-1 ">{ name }</span>
        </button>
    )
}