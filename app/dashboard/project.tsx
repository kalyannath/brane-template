import { Button, Divider, Image, Progress } from "@nextui-org/react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";

const Project = ({ ...props }) => {
  return (
    <div className="max-w-fit flex flex-col px-2 py-2 pt-4 bg-cardBodyBackground text-contentIconsColor rounded-xl items-center justify-between gap-2">
      <Image
        className="w-20 md:w-28 lg:w-36"
        alt="NextUI hero Image"
        src="/images/drone.png"
        isBlurred
      />
      <div className="w-full bg-background3 px-4 py-2 rounded-xl flex flex-col justify-center gap-2">
        <div className="text-titleColor font-semibold text-xs md:text-sm text-center">{props.title}</div>
        <Divider orientation="horizontal" />
        <Progress
          size="sm"
          radius="md"
          classNames={{
            label: "text-[10px] text-titleColor",
            value: "text-[10px] text-titleColor",
          }}
          color="success"
          label="Overall completed"
          value={props.progress}
          showValueLabel={true}
        />
        <Divider orientation="horizontal" />
        <div className="flex justify-between">
          <Button size="sm" radius="full" isIconOnly className="bg-foreground text-sideBarIconsColor">
            <AiOutlineMessage size={20} />
          </Button>
          <Button size="sm" radius="full" isIconOnly className="bg-foreground text-sideBarIconsColor">
            <FaListUl size={20} />
          </Button>
          <Button size="sm" radius="full" isIconOnly className="bg-foreground text-sideBarIconsColor">
            <LuMoveUpRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
