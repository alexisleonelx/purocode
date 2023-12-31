import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ togglePlayer }) => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <nav>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="flex justify-around p-2 md:pt-7 fixed top-0 w-full  z-10 rounded-lg shadow-lg shadow-second max-md:hidden backdrop-blur-sm">
            <ul className="flex flex-row space-x-14">
              <li>
                <Link
                  href="/#inicio"
                  className="text-xl md:text-2xl font-bold  hover:text-primary hover:text-opacity-80 "
                >
                  <p className="">PRACTICA</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/#acerca"
                  className="text-xl md:text-2xl font-bold hover:bg-blend-color hover:text-second "
                >
                  QUIZ
                </Link>
              </li>
              <li>
                <button
                  onClick={togglePlayer}
                  className=" hover:scale-125 border rounded-full border-transparent hover:border-new2 active:focus:border-new2 transform transition-transform "
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_30_6)">
                      <path
                        d="M39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20Z"
                        fill="#323232"
                      />
                      <path
                        d="M32 19.5L13.25 30.3253V8.67468L32 19.5Z"
                        fill="#FCF932"
                      />
                      <path d="M22 19.5L33 16V23L22 19.5Z" fill="#3475D7" />
                    </g>
                    <path
                      d="M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5Z"
                      stroke="black"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-xl md:text-2xl font-bold hover:bg-blend-color hover:text-second"
                >
                  CONTACTO
                </Link>
              </li>
              <li>
                <Link
                  href="/#mas"
                  className="text-xl md:text-2xl font-bold hover:bg-blend-color hover:text-primary hover:text-opacity-80"
                >
                  MAS
                </Link>
              </li>
            </ul>
          </div>{" "}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
