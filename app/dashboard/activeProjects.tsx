import { Spacer } from "@nextui-org/react";
import { ActiveProjectsUtils } from "../utils/activeProjectsUtils";
import Project from "./project";

const ActiveProjects = () => {
  return (
    <div className="w-full flex flex-col rounded-lg border-[0.5px] border-borderColor1/50 py-4 px-6 bg-background2 justify-center">
      <div className="text-cardHeadingColor text-md md:text-lg font-bold">Active Projects</div>
      <Spacer y={4} />
      <div className="w-full flex overflow-x-auto gap-2">
        {
          ActiveProjectsUtils.map((p, index) => (
            <Project key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default ActiveProjects;
