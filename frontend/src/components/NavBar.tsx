// import Lottie from "lottie-react";
// import portfolioIcon from "../assets/icons/portfolio_logo.json";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { RotatingText } from "./ui/shadcn-io/rotating-text";

// export const NavBar = () => {
//   return (
//     <div>
//       <nav
//         className="w-full p-2 px-5  flex justify-between items-center"
//         style={{ backdropFilter: "blur(0px)" }}
//       >
//         <div className=" h-full flex gap-5 items-center justify-center ">
//           <Lottie
//             animationData={portfolioIcon}
//             loop={true}
//             style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
//             className="hover:scale-110 transition-all duration-200"
//           />

//           <RotatingText
//             text={["Saad Masood", "Full-Stack Developer"]}
//             duration={4000}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             style={{ fontFamily: "Poiret One, sans-serif", fontWeight: "600" }}
//             className="text-black/70"
//           />
//         </div>

//         <div>
//           <ul>
//             <li className="flex gap-5">
//               <a className="text-3xl text-black transition-all duration-300 hover:scale-120  cursor-pointer">
//                 <FaGithub />
//               </a>

//               <a className="text-3xl text-black transition-all duration-300 hover:scale-120  cursor-pointer">
//                 <FaLinkedin />
//               </a>

//               <a className="text-3xl text-black transition-all duration-300 hover:scale-120  cursor-pointer">
//                 <FaTwitter />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <div>
      <nav
        className="w-full h-[10vh] flex justify-center items-center relative z-50"
        style={{ backdropFilter: "blur(30px)" }}
      >
        <ul>
          <li className="flex gap-10 px-5">
            <a className="text-md  cursor-pointer hover:scale-110 transition-all duration-200">
              HOME
            </a>

            <a className="text-md  cursor-pointer hover:scale-110 transition-all duration-200 ">
              PROJECTS
            </a>
            <a className="text-md  cursor-pointer hover:scale-110 transition-all duration-200 ">
              ABOUT
            </a>
            <a className="text-md  cursor-pointer hover:scale-110 transition-all duration-200 ">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
