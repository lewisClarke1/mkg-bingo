"use client";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function GameBoard() {
  const gameBoardSize = 5000;
  const initialScale = 0.75;
  const centerX = (window.innerWidth - gameBoardSize * initialScale) / 2;
  const centerY = (window.innerHeight - gameBoardSize * initialScale) / 2;

  return (
    <TransformWrapper
      initialScale={initialScale}
      maxScale={3}
      minScale={0.5}
      limitToBounds={false}
      centerOnInit={false}
      wheel={{ step: 0.2 }}
      initialPositionX={centerX}
      initialPositionY={centerY}
      onPanning={(ref) => {
        const instance = ref.instance;
        if (!instance) {
          return;
        }

        // Get viewport size
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const { positionX, positionY, scale } = instance.transformState;

        // Define bounds - values go negative so the max is 0 which is left/top
        const maxX = 0; // Left boundary
        const maxY = 0; // Top boundary
        const minX = -(gameBoardSize * scale - viewportWidth); // Right boundary
        const minY = -(gameBoardSize * scale - viewportHeight); // Bottom boundary

        // Restrict panning
        const clampedX = Math.min(maxX, Math.max(minX, positionX));
        const clampedY = Math.min(maxY, Math.max(minY, positionY));

        // Apply corrected position
        if (clampedX !== positionX || clampedY !== positionY) {
          instance.setTransformState(scale, clampedX, clampedY);
        }
      }}
      onZoom={(ref) => {
        const instance = ref.instance;
        if (!instance) {
          return;
        }

        // Get viewport size
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const { positionX, positionY, scale } = instance.transformState;

        // Define bounds - values go negative so the max is 0 which is left/top
        const maxX = 0; // Left boundary
        const maxY = 0; // Top boundary
        const minX = -(gameBoardSize * scale - viewportWidth); // Right boundary
        const minY = -(gameBoardSize * scale - viewportHeight); // Bottom boundary

        // Restrict panning
        const clampedX = Math.min(maxX, Math.max(minX, positionX));
        const clampedY = Math.min(maxY, Math.max(minY, positionY));

        // Apply corrected position
        if (clampedX !== positionX || clampedY !== positionY) {
          instance.setTransformState(scale, clampedX, clampedY);
        }
      }}
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
            <div
              id="gameBoard"
              className="h-[5000px] w-[5000px] relative border-2 border-black"
            >
              <div className="tile absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-slate-400 flex flex-col justify-evenly text-center">
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
