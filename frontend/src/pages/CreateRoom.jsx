import { useState } from "react";
import StepBar from "../components/StepBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRoomName } from "../features/player/playerSlice";
import createRoom from "../assets/create room.svg";

export const CreateRoom = () => {
  let arr = [1, 2, 0];
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const typeName = (e) => {
    e.preventDefault();
    dispatch(addRoomName(name));
    navigate("/gameRoom");
  };

  return (
    <div className=" ">
      <div className=" flex justify-center mt-14">
        {arr.map((val) => {
          return <StepBar key={val} color={val ? "bg-fg2" : "bg-fg1"} />;
        })}
      </div>
      <img
        src={createRoom}
        alt="create room"
        className=" w-6/12 mx-auto mt-24 mb-24"
      />
      <form onSubmit={typeName} className="border-2 w-fit m-auto">
        <input
          placeholder="ROOM NAME"
          type="text"
          name="name"
          className=" bg-fg1 w-96 h-16 border-8 border-fg2 focus:outline-none text-center "
          onChange={changeName}
          value={name}
          onSubmit={typeName}
          required={true}
        />
      </form>
    </div>
  );
};
