import { FcHome } from "react-icons/fc";
import { ImAccessibility } from "react-icons/im";
import { SharedHeaderItem } from "./SharedHeaderItem";

export function ProductsHeader() {
    return (
        <div className="py-10 px-10 flex justify-between">
            <SharedHeaderItem url="/" Icon={FcHome} name="home の編集" />
            <SharedHeaderItem url="/aboutme" Icon={ImAccessibility} name="私について の編集" />
        </div>
    )
}