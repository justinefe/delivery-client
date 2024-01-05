import { useRef } from "react";
import { log_out } from "../../store/userAction";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../../helpers";

type Props = {};

const Navbar = ({}: Props) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const dispatch: any = useDispatch();

  const handMenu = () => {
    menuRef?.current!.classList.toggle("hidden");
  };
  const { user } = useSelector(({ auth }) => auth) || {};

  const handleLogOut = () => {
    dispatch(log_out());
  };
  return (
    <nav className="h-16 bg-white sticky top-0 z-10">
      <NavLink to="/" className="absolute left-2 top-2 h-12 w-12">
        <img
          src="https://programonaut.b-cdn.net/wp-content/uploads/2022/07/programonaut-logo-180x180.png"
          alt="avatar"
          className="h-full w-full"
        />
      </NavLink>
      <div
        id="nav-container"
        className="bg-white p-2 flex flex-col items-end border-b border-dark-grey-150 "
      >
        <div onClick={handMenu} className="h-12 w-12 p-2 group md:hidden">
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-full w-full group-hover:fill-[#577c9e] "
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <ul
          ref={menuRef}
          className="hidden w-full space-y-2 pr-3 font-semibold text-xl text-right md:h-12 md:flex md:flex-row md:items-center md:justify-end md:space-x-5 md:space-y-0"
        >
          {user ? (
            <>
              <li>
                <span className="text-base font-inter">
                  <strong className=" text-[#577c9e] font-medium">
                    {capitalizeFirstLetter(user?.firstName)}{" "}
                    {capitalizeFirstLetter(user?.lastName)}
                  </strong>
                </span>
              </li>
              <li onClick={handleLogOut}>
                {" "}
                <NavLink to="/">
                  <span className="text-base font-inter">
                    <strong className=" text-[#577c9e] font-medium">
                      log out
                    </strong>
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <NavLink to="/signup">
                  <span className="text-base font-inter">
                    <strong className=" text-[#577c9e] font-medium">
                      Sign Up
                    </strong>
                  </span>
                </NavLink>
              </li>
              <NavLink to="/login">
                <span className="text-light-grey-900 text-base font-inter">
                  <strong className=" text-[#577c9e] font-medium">
                    Log In
                  </strong>
                </span>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
