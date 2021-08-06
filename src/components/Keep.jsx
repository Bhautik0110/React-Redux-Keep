import React from "react";
import PropTypes from "prop-types";
import "./styles/shared.css";
import { useDispatch } from "react-redux";
import { deleteFromKeep } from "./keepSlice";

export default function Keep(props) {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-4 shadow-md mt-4 rounded-md relative hover:bg-gray-100 keep dark:bg-gray-500 ">
      <pre className="font-sans break-words whitespace-pre text dark:text-white hover:text-black">
        {props.data}
      </pre>
      <button
        id="delete"
        onClick={(e) => dispatch(deleteFromKeep(props.index))}
        className="font-sans hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#EF4444"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
        </svg>
      </button>
    </div>
  );
}

Keep.propTypes = {
  data: PropTypes.string,
  index: PropTypes.number,
};
