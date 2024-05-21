import { FaUsers } from "react-icons/fa";
import { TeamIcon } from "../icons/teamIcon";
import { ProjectsIcon } from "../icons/projectsIcon";
import { TotalProjectsIcon } from "../icons/totalProjectsIcon";

export const CompanyDetailsUtils = [
    {
        title: "Teams",
        number: 10,
        icon: <FaUsers size={25} />
    },
    {
        title: "Members",
        number: 100,
        icon: <TeamIcon size={25} />
    },
    {
        title: "Active Projects",
        number: 10,
        icon: <ProjectsIcon size={25} />
    },
    {
        title: "Active Projects",
        number: 10,
        icon: <TotalProjectsIcon size={25} />
    },
]