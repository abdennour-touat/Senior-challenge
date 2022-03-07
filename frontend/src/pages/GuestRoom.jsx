import { useEffect, useRef, useState } from "react";
import girl from "../assets/girl.svg";
import purple from "../assets/purple.svg";
import bald from "../assets/bald.svg";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import CanvasDraw from "react-canvas-draw";
import { useNavigate } from "react-router-dom";

const GuestRoom = () => {
  const [avatars, setAvatars] = useState([purple, bald, girl, bald]);

  const canvasRef = useRef(null);
  const [boardData, setBoardData] = useState({});
  const room = useSelector((state) => state.room);
  const player = useSelector((state) => state.player);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = io.connect("http://localhost:8000", {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd",
    },
  });
  useEffect(() => {
    if (!player.name) {
      navigate("/");
    }
    const stream = async () => {
      if (player.id === room.host) {
        await socket.emit("canvas-data", boardData);
      } else {
        await socket.on("canvas-data", (data) => {
          setBoardData(data);
        });
      }
    };
    stream();
  }, [player, navigate, room.host, socket, boardData]);

  return (
    <>
      <div className=" h-full">
        <div className="flex justify-between mx-4 border-2 bg-gr">
          <div className=" flex-1 ">
            <p>
              Abdenour SCORE: <span>69</span>
            </p>
          </div>
          <div className=" flex-initial " style={{ background: "#fff" }}>
            <p>Round : 10</p>
          </div>
          <div className=" flex-initial " style={{ background: "#fff" }}>
            <p>Timer: 80 s</p>
          </div>
          <div className=" flex-initial">
            <p>HOME</p>
          </div>
        </div>
        <div className=" flex justify-between m-4 h-full">
          <div className=" bg-gr border-2  basis-2/12 mr-2.5">
            {avatars.map((av, index) => (
              <img
                key={index}
                className={`w-16 h-24 my-4`}
                src={av}
                alt="purple"
              />
            ))}
          </div>
          <div className=" flex basis-11/12 justify-between ">
            {/* <Canvas draw={draw} /> */}
            <CanvasDraw
              onChange={(e) => {
                if (player.id === room.host) {
                  setTimeout(() => {
                    setBoardData(canvasRef.current.getSaveData());
                  }, 1000);
                }
              }}
              disabled={true}
              saveData={player.id !== room.host ? boardData : null}
              ref={canvasRef}
              canvasWidth={1000}
              canvasHeight={window.screen.height / 1.5}
            />

            <div className=" w-3/12  bg-gr basis-1/4 border-2 "> </div>
          </div>
        </div>
        <div className="flex justify-between m-4">
          <div
            className="text-center  basis-2/12 mx-2.5 border-2"
            style={{ background: "#fff" }}
          >
            {room.word}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestRoom;
