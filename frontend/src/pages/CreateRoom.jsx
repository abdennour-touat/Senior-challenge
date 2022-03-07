import { useState, useEffect } from "react";
import StepBar from "../components/StepBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../features/player/roomSlice";
import roomCreate from "../assets/create room.svg";
export const CreateRoom = () => {
  let arr = [1, 2, 0];
  let dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const room = useSelector((state) => state.room);

  const navigate = useNavigate();
  const [name, setName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const typeName = (e) => {
    e.preventDefault();
    dispatch(
      createRoom({
        host: player.id,
        roomName: name,
        roomRounds: room.roomRounds,
      })
    );
  };
  useEffect(() => {
    if (!player.name) {
      navigate("/");
    }
    if (room.roomName) {
      navigate("/gameRoom");
    }
  }, [navigate, player, room.roomName]);
  return (
    <div className=" ">
      <div className=" flex justify-center mt-14">
        {arr.map((val) => {
          return <StepBar key={val} color={val ? "bg-fg2" : "bg-fg1"} />;
        })}
      </div>
      <img
        src={roomCreate}
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
