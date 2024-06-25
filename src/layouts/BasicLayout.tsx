import { Outlet, NavLink } from "react-router-dom";
import { Logo } from "@/components/Icons";
import { cn } from "@/utils";

const BasicLayout = () => {
  const links = [
    {
      path: "/components/card-hover-effect",
      text: "Card Hover Effect",
    },
    {
      path: "/components/parallax-scroll",
      text: "Parallax Scroll",
    },
    {
      path: "/components/meteors",
      text: "Meteors",
    },
    {
      path: "/components/sticky-scroll-reveal",
      text: "Sticky Scroll Reveal",
    },
  ];
  return (
    <>
      <aside id="sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <nav className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <NavLink to={`/`} className="flex items-center ps-2.5 mb-5 font-bold">
            <span className="h-6 me-3 sm:h-7" title="Framer Motion Demos">
              <Logo width={28} height={28} />
            </span>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Framer Motion Demo</span>
          </NavLink>
          <ul className="space-y-2 font-medium">
            {links.map((link) => (
              <li key={link.path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) => cn("block w-full h-full", (isActive ? "text-blue-700" : isPending ? 'pending' : ""))}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div id="detail" className="p-4 sm:ml-72">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default BasicLayout;
