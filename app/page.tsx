"use client";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function GameBoard() {
  return (
    <TransformWrapper
      initialScale={0.75}
      maxScale={3}
      minScale={0.5}
      centerOnInit={true}
      wheel={{ step: 0.2 }}
    >
      {({ zoomIn, zoomOut }) => (
        <>
          <div className="controls absolute top-4 left-4 z-10 flex flex-col items-center">
            <button
              onClick={() => zoomIn(0.4)}
              className="bg-blue-300 rounded-md w-8 h-8"
            >
              +
            </button>
            <button
              onClick={() => zoomOut(0.4)}
              className="bg-blue-300 rounded-md w-8 h-8"
            >
              -
            </button>
          </div>
          <TransformComponent>
            <div id="gameBoard" className="h-[100vh] w-[100vw] relative">
              <div className="tile absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-slate-400 flex flex-col justify-evenly text-center">
                <p>Obtain any pet</p>
                <div>Placeholder completed</div>
              </div>

              <div className="tile absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-slate-400 flex flex-col justify-evenly text-center">
                <p>Initial skilling tile</p>
                <div>Placeholder completed</div>
              </div>
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
