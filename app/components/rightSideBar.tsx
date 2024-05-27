"use client"

import { useState } from "react";
import { Accordion, AccordionItem, Image, Input } from "@nextui-org/react";
import { IoSearchOutline } from "react-icons/io5";
import { RightSideBarUtils } from "../utils/rightSideBardData";

const RightSideBar = () => {
    const [accordionItemIdx, setAccordionItemIdx] = useState<number | null>(0);

    const handleAccordionItemClick = (itemIdx: number) => {
        console.log(itemIdx);
        setAccordionItemIdx(itemIdx === accordionItemIdx ? null : itemIdx);
    }
    return (
        <div className="mt-4 xl:mt-0 flex flex-col gap-4 w-full xl:w-4/12 h-full rounded-lg border-[0.5px] border-borderColor1/50 py-6 px-4 bg-background2">
            <div className="w-full flex justify-between items-center gap-5">
                <div className="min-w-fit text-cardHeadingColor text-xs md:text-sm lg:text-md font-bold">Autonomy Engineers</div>
                <Input
                    isClearable
                    type="text"
                    startContent={
                        <IoSearchOutline className="text-titleColor" />
                    }
                    className="flex-1 max-w-64"
                />
            </div>
            <div className="w-full flex-1 overflow-y-auto">
                <Accordion variant="light" defaultExpandedKeys={["0"]} showDivider={false}>
                    {
                        RightSideBarUtils.map((item, index) => (
                            <AccordionItem
                                hideIndicator
                                className="px-4 py-2 text-titleColor text-xs sm:text-sm bg-cardBodyBackground/20 rounded-lg border-[0.5px] border-borderColor1/50 mb-2"
                                textValue={`${item.name}, ${item.designation}`}
                                onPress={() => { handleAccordionItemClick(index) }}
                                key={index}
                                title={
                                    <div className={`text-titleColor text-xs sm:text-sm flex gap-4 items-center ${accordionItemIdx === index ? "flex-col justify-center" : ""}`}
                                    >
                                        <Image
                                            className={`w-${accordionItemIdx === index ? "16" : "12"} rounded-full`}
                                            src={item.picUrl}
                                        />
                                        <div className={`flex flex-col ${accordionItemIdx === index ? "items-center" : ""}`}>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="">{item.designation}</div>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="text-center flex flex-col gap-4 justify-center items-center">
                                    <div className="flex gap-4 items-start">
                                        <div className="flex flex-col justify-center flex-1">
                                            <div className="text-titleColor/70 text-xs">Company</div>
                                            <div className="font-semibold">{item.company}</div>
                                        </div>
                                        <div className="flex flex-col justify-center flex-1">
                                            <div className="text-titleColor/70 text-xs">Employee ID</div>
                                            <div className="font-semibold">{item.employeeId}</div>
                                        </div>
                                        <div className="flex flex-col justify-center flex-1">
                                            <div className="text-titleColor/70 text-xs">Team</div>
                                            <div className="font-semibold">{item.team}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-titleColor/70 text-xs">Email</div>
                                        <div className="font-semibold">{item.email}</div>
                                    </div>
                                </div>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default RightSideBar;