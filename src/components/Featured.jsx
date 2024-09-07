import { CircularProgressbar } from "react-circular-progressbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
    return (
        <div className=" shadow-xl border w-[28vw]  p-3">
            <div className="flex items-center justify-between">

                <h1 className="text-[16px]">Total Revenue</h1>
                <BsThreeDotsVertical />


            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4">
                <div className="w-[100px]  h-[100px]">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="font-normal">Total sales made today</p>
                <p className="text-[30px] font-bold">$420</p>
                <p className="text-center">
                    Previous transactions processing. Last payments may not be included.
                </p>

                <div className="w-[100%] flex items-center justify-between">
                    <div className="text-center mt-3 flex gap-24">
                        <div className="flex flex-col ">

                            <div className="text-[19px]">Target</div>
                            <div className="items-center flex flex-col negative">
                                <MdKeyboardArrowDown />

                                <div className="font-semibold text-xl">$12.4k</div>
                            </div>
                        </div>
                        <div className="text-center  flex flex-col">
                            <div className="text-[19px]">Target</div>
                            <div className="items-center flex flex-col positive">
                                <MdKeyboardArrowDown />
                                <div className="font-semibold text-xl">$12.4k</div>
                            </div>
                        </div>
                        <div className="text-center flex flex-col ">
                            <div className="text-[19px]">Target</div>
                            <div className="items-center flex flex-col positive">
                                <MdKeyboardArrowDown />
                                <div className="font-semibold text-xl">$12.4k</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured
