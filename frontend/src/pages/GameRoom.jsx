import { useRef, useState } from "react";
import girl from "../assets/girl.svg";
import purple from "../assets/purple.svg";
import bald from "../assets/bald.svg";

import CanvasDraw from "react-canvas-draw";

const GameRoom = () => {
  const [avatars, setAvatars] = useState([purple, bald, girl, bald]);
  const [color, setColor] = useState("#000000");
  const canvasRef = useRef();
  const canvas = canvasRef.current;
  console.log(color);
  return (
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
            ref={canvasRef}
            canvasWidth={1000}
            canvasHeight={window.screen.height / 2 + 20}
            brushRadius={2}
            brushColor={color}
          />

          <div className=" w-3/12  bg-gr basis-1/4 border-2 "> </div>
        </div>
      </div>
      <div className="flex justify-between m-4">
        <div
          className="text-center  basis-2/12 mx-2.5 border-2"
          style={{ background: "#fff" }}
        >
          FALLING STAR
        </div>

        <div className="text-center basis-11/12 bg-gr border-2">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button onClick={() => canvas.undo()}>delete</button>
          <button onClick={() => canvas.clear()}>deleteAll</button>
        </div>
      </div>
    </div>
  );
};

export default GameRoom;
