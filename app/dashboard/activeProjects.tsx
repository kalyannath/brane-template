import { Spacer } from "@nextui-org/react";
import { ActiveProjectsUtils } from "../utils/activeProjectsUtils";
import Project from "./project";

const ActiveProjects = () => {
  return (
    <div className="duration-[500ms] w-full h-full flex flex-col rounded-lg border-[0.5px] border-borderColor1/50 py-4 px-6 bg-background2">
      <div className="text-cardHeadingColor text-sm md:text-md lg:text-lg font-bold">Active Projects</div>
      <Spacer y={4} />
      <div className="h-full w-full flex overflow-x-auto gap-2">
        {
          ActiveProjectsUtils.map((p, index) => (
            <Project key={index} progress={p.completed} title={p.title}/>
          ))
        }
      </div>
    </div>
  );
}

export default ActiveProjects;
