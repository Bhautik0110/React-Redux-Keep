import React from "react";
import { useSelector } from "react-redux";
import Keep from "./Keep";
import { keep } from "../selector";
import empty from "../assets/empty.svg";

function noKeeps() {
  return (
    <div className="mt-32">
      <div className="w-full flex justify-center">
        <img src={empty} alt="No Keeps" className="w-64 md:w-96" />
      </div>
      <div className="text-center mt-16 text-2xl">No Keeps</div>
    </div>
  );
}

function getKeeps(keeps) {
  return keeps.data.length > 0
    ? keeps.data.map((keep, index) => (
        <Keep key={index} index={index} data={keep} />
      ))
    : noKeeps();
}

function Keeps() {
  const data = useSelector(keep);
  return <div>{getKeeps(data)}</div>;
}

export default Keeps;
