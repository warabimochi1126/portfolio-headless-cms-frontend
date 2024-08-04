"use client";

import { ImAccessibility } from "react-icons/im";
import { GrDeploy } from "react-icons/gr";
import { SharedHeaderItem } from "../layouts/SharedHeaderItem";

export function ProductsHeader() {
    return (
        <div className="py-10 px-10 flex justify-between">
            <SharedHeaderItem isPointer={true} Icon={GrDeploy} name="redeploy" />
            <SharedHeaderItem isPointer={false} Icon={ImAccessibility} name="私について の編集" />
        </div>
    )
}