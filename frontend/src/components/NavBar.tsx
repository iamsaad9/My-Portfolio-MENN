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
