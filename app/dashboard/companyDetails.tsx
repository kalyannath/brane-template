import { Spacer } from "@nextui-org/react";
import React from "react";
import { CompanyDetailsUtils } from "../utils/companyDetailsUtils";

const CompanyDetails = () => {
  return (
    <div className="flex flex-col rounded-lg border-[0.5px] border-borderColor1/50 py-4 px-6 bg-background2 flex-1">
      <div className="text-titleColor/30 text-sm font-bold">Company name</div>
      <div className="text-titleColor text-md md:text-lg font-bold">Brane Enterpirses Private Limited</div>
      <Spacer y={4} />
      <div className="grid grid-cols-2 gap-4">
        {CompanyDetailsUtils.map((c, index) => (
          <div key={index} className="flex flex-col bg-background3 text-contentIconsColor rounded-lg border border-borderColor1 p-2 gap-2">
            {c.icon}
            <div className="flex justify-between items-end">
              <div className="text-xs sm:text-sm font-bold text-labelColor">{c.title}</div>
              <div className="text-sm sm:text-md md:text-lg font-bold">{c.number}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyDetails;
