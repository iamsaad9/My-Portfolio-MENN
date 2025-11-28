import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const ProjectCard = () => {
  return (
    <div className="h-full w-7xl flex flex-col gap-5 p-10 rounded-2xl border-2 border-[#333] mx-auto">
      <img src="/assets/pics/project.png" alt="" />
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold">Tasty</h1>
          <div>
            <ul className="flex gap-2">
              <li>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h1>as</h1>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/50 w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            veritatis asperiores nulla iusto officiis expedita voluptate atque
            vero rerum, minus non quod, rem totam consequatur. Voluptas autem
            voluptates quo laboriosam.
          </p>

          <div className="flex gap-5 px-5 items-center justify-center">
            <a href="">
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaGithub
                    size={30}
                    className="hover:scale-110 transition-all duration-200"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </a>
            <a href="">
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiVercel
                    size={30}
                    className="hover:scale-110 transition-all duration-200"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Vercel</p>
                </TooltipContent>
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
