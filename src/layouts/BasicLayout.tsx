import { Outlet, NavLink } from "react-router-dom";

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
  ];
  return (
    <>
      <div id="sidebar">
        <h1>Framer Motion Demo</h1>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) => (isActive ? "active" : isPending ? 'pending' : "")}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default BasicLayout;
