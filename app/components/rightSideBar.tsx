"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";

const RightSideBar = () => {
    return (
        <div className="w-full xl:w-3/12 overflow-y-auto h-3/6 xl:h-full pt-4 xl:pt-0">
            <div className="overflow-y-auto h-full">
                <Accordion>
                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default RightSideBar;