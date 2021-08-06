import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { modal, changeLanguage } from "./keepSlice";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import LocalContext from "../LocalContext";
import Feedback from "./Feedback";

function toggleLanguageButton(language) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => dispatch(changeLanguage())}
      className="sm:w-auto flex-none bg-white text-green-600 text-md font-semibold py-2 px-4 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-900 focus:outline-none transition-colors duration-200"
    >
      {language === "ENGLISH" ? "ગુજરાતી" : "ENGLISH"}
    </button>
  );
}
export default function Header(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const locale = useContext(LocalContext);

  return (
    <header className="w-full">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-sans text-xl text-green-600 font-bold dark:text-green-400">
          {props.title}
        </h1>
        {location.pathname === "/" && (
          <div className="flex items-center">
            <div>
              <Feedback />
            </div>
            &nbsp;&nbsp; {toggleLanguageButton(locale)}
            &nbsp;&nbsp;
            <button
              onClick={(e) => dispatch(modal())}
              className="sm:w-auto flex-none bg-green-600 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-900 focus:outline-none transition-colors duration-200"
            >
              {locale === "ENGLISH" ? "ADD KEEP" : "ઉમેરો"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
