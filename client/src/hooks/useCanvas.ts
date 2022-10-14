import { useEffect, useRef } from "react"

function useCanvas(width: number, height: number, animate: (ctx: CanvasRenderingContext2D) => void) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    canvas.width = width;
    canvas.height = height;

    

    return () => {

    }
  }, [])
  return canvasRef;
}

export default useCanvas;