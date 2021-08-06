import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modal, addToKeep } from "./keepSlice";

function Modal(props) {
  const dispatch = useDispatch();
  const [placeholder] = useState("Please Remember!!\nThis ...\nThat ...");
  const [data, setData] = useState("");
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="w-full inline-block align-bottom bg-gray-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-100">
            <div className="sm:flex sm:items-start">
              <textarea
                value={data}
                required
                onChange={(e) => setData(e.target.value)}
                name="item"
                cols="30"
                rows="10"
                className="w-full  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-gray-100"
                placeholder={placeholder}
              ></textarea>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={(e) => dispatch(addToKeep(data))}
              type="button"
              className="disabled:opacity-50 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-500 sm:ml-3 sm:w-auto sm:text-sm"
              disabled={
                data.toString().length <= 0 || data.toString().length > 5000
              }
            >
              Save
            </button>
            <button
              onClick={(e) => dispatch(modal())}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
