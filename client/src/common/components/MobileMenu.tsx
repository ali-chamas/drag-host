import { useContext, useState } from "react";

import { motion } from "framer-motion";
import { apiUrl } from "../../tools/api-url/apiUrl";

import Hamburger from "hamburger-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {
  DarkModeContext,
  DarkModeContextType,
} from "../../context/DarkModeContext";

const MobileMenu = ({ links, navigate, user }: any) => {
  const [open, setOpen] = useState(false);

  const { isDarkMode, toggleDarkMode } = useContext(
    DarkModeContext
  ) as DarkModeContextType;

  return (
    <div>
      <button
        type="button"
        className="text-4xl "
        onClick={() => setOpen((o) => !o)}
      >
        <Hamburger onToggle={(open) => !open} />
      </button>
      {open && (
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { delay: 0.2, stiffness: 20 } }}
          className="flex flex-col bg-primary  p-5 w-[180px] absolute top-18 right-2 text-md rounded-md items-center gap-5 z-40"
        >
          <nav className="flex flex-col items-center gap-5">
            {links.map((link: any, i: number) => (
              <button
                key={i}
                className=" hover:opacity-80 transition-all duration-300"
                onClick={() => navigate(link.destination)}
              >
                {link.name}
              </button>
            ))}
            {user && (
              <button
                className="hover:opacity-80 transition-all duration-300"
                onClick={() => navigate("/games")}
              >
                games
              </button>
            )}
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={20}
            />
          </nav>

          {!user ? (
            <button
              className="btn-primary-white"
              onClick={() => navigate("/auth")}
            >
              Login
            </button>
          ) : (
            <img
              src={`${apiUrl}/${user.avatar}`}
              className=" w-[60px] rounded-full"
              onClick={() => navigate("/profile")}
              alt="profile"
            />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
