import { BsPersonFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMonetizationOn } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

const Widget = ({ type }) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <BsPersonFill
                        className="icon"
                        style={{
                            color: "crison",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }} />

                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all users",
                icon: (

                    <MdOutlineShoppingCart
                        className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                        }} />


                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MdMonetizationOn
                        className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                        }} />


                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (

                    <IoWalletOutline
                        className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                        }} />




                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className="flex bg-slate-200 justify-between flow-1 p-3 shadow-lg rounded-xl w-[20vw] h-[130px]">
            <div className="flex flex-col justify-between">
                <span className="font-bold text-[14px]">{data.title}</span>
                <span className="text-[28px]">{data.isMoney && "$"} {amount}</span>
                <span className="text-[12px] border-b">{data.link}</span>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex items-center text-[14px]">
                    <IoIosArrowUp />
                    {diff} %
                </div>
                <div className="self-end text-[18px] p-1 rounded-md ali">

                    {data.icon}
                </div>
            </div>
        </div>
    )
}

export default Widget;