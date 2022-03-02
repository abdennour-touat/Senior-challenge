import React from "react";
export function Avatar({ pickThis, avatar, index }) {
  return (
    <button onClick={pickThis}>
      <img className=" w-28 h-44" src={avatar} alt="purple" />
    </button>
  );
}
