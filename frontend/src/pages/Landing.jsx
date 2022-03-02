import { useState } from "react";
import title from "../assets/Rectangle 12.svg";
import { Progress } from "../components/Progress";
import StepBar from "../components/StepBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from "../features/player/playerSlice";

export const Landing = () => {
  let arr = [1, 0, 0];
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [player, setName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const typeName = (e) => {
    e.preventDefault();
    dispatch(addName(player));
    navigate("/avatar");
  };

  return (
    <div className=" ">
      <div className=" flex justify-center mt-14">
        {arr.map((val) => {
          return <StepBar color={val ? "bg-fg2" : "bg-fg1"} />;
        })}
      </div>
      {/* <StepBar /> */}
      <img className="w-6/12 mx-auto mt-24 mb-24" src={title} alt="title" />
      {/* <Progress /> */}
      <form onSubmit={typeName} className="border-2 w-fit m-auto">
        <input
          type="text"
          name="name"
          className=" bg-fg1 w-96 h-16 border-8 border-fg2 focus:outline-none text-center "
          onChange={changeName}
          value={player}
          onSubmit={typeName}
          required={true}
        />
      </form>
    </div>
  );
};
