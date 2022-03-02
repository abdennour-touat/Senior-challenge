import StepBar from "../components/StepBar";
import girl from "../assets/girl.svg";
import purple from "../assets/purple.svg";
import bald from "../assets/bald.svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAvatar } from "../features/player/playerSlice";
import { useNavigate } from "react-router-dom";
const PickAvatar = () => {
  let arr = [1, 2, 0];
  const player = useSelector((state) => state.player);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatars, setAvatars] = useState([purple, bald, girl]);

  const [rounds, setRounds] = useState(1);
  const [roomCode, setRoomCode] = useState("");
  const change = (e) => {
    setRoomCode(e.target.value);
  };

  useEffect(() => {
    if (!player.name) {
      navigate("/");
    }
  }, [navigate, player]);

  const pickThis = (avatar) => {
    return () => {
      switch (avatar) {
        case 0:
          setAvatars([avatars[1], avatars[0], avatars[2]]);
          break;
        case 2:
          setAvatars([avatars[0], avatars[2], avatars[1]]);
          break;
        default:
          break;
      }
    };
  };
  dispatch(addAvatar(avatars[1]));

  return (
    <div className=" ">
      <div className=" flex justify-center mt-14">
        {arr.map((val) => {
          return <StepBar key={val} color={val ? "bg-fg2" : "bg-fg1"} />;
        })}
      </div>
      <div className=" mt-11 flex justify-around w-1/2 mx-auto ">
        {avatars.map((av, index) => (
          <button key={index} onClick={pickThis(index)}>
            <img
              key={index}
              className={index !== 1 ? ` w-24 h-36` : `w-40 h-52`}
              src={av}
              alt="purple"
            />
          </button>
        ))}
      </div>
      <h2 className="text-center">{player.name}</h2>

      <div className="flex justify-center mt-11">
        <button className=" bg-fg1 w-96 h-16 border-x-4 border-y-8 border-fg2 focus:outline-none text-center mx-2.5 ">
          ROOM CODE
        </button>
        <button
          onClick={() => {
            navigate("/createroom");
          }}
          className=" bg-fg1 w-96 h-16 border-x-4 border-y-8 border-fg2 focus:outline-none text-center  mx-2.5"
        >
          CREATE ROOM
        </button>
      </div>
      <div className=" flex justify-around items-baseline mt-14">
        <button className=" bg-opacity-0 h-8 w-20 border-4 focus:outline-none text-center  mx-2.5">
          &lt;-
        </button>
        <div className="flex justify-center items-center  ">
          <button
            className=" bg-fg1 w-14 h-16 border-x-4 border-y-8 border-fg2 focus:outline-none text-center  mx-2.5"
            onClick={() => (rounds > 1 ? setRounds(rounds - 1) : setRounds(1))}
          >
            -
          </button>
          <div className=" bg-fg1 w-28 h-20 border-x-4 border-y-8 border-fg2 focus:outline-none text-center  mx-2.5">
            <h5>ROUNDS</h5>
            <p>{rounds}</p>
          </div>
          <button
            className=" bg-fg1 w-14  h-16 border-x-4 border-y-8 border-fg2 focus:outline-none text-center  mx-2.5"
            onClick={() => (rounds < 8 ? setRounds(rounds + 1) : setRounds(8))}
          >
            +
          </button>
        </div>
        <button className="bg-fg2 h-8 w-20 border-4  focus:outline-none text-center  mx-2.5">
          -&gt;
        </button>
      </div>
    </div>
  );
};

export default PickAvatar;
