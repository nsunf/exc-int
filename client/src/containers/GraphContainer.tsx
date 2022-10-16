import { useEffect, useRef } from "react";
import Graph from "../canvas/Graph";
import GraphPresenter from "../presenters/GraphPresenter";
import { useAppSelector } from "../redux/hooks";

function GraphContainer() {
  // 년 월 주 선택 버튼 만들기
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dealBasData = useAppSelector(state => state.exchange.selected?.deal_bas_r_arr ?? []);

  useEffect(() => {
    const canvasWrap = canvasWrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvasWrap || !canvas || !ctx) return;

    let graph = new Graph(canvas.width/2, canvas.height/2, canvas.width*0.8, canvas.height * 0.5, dealBasData);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      graph.update(ctx);
    };

    const resize = () => {
      canvas.width = canvasWrap.clientWidth;
      canvas.height = canvasWrap.clientHeight;
    };

    const interval = setInterval(animate, 1000/60);
    resize();
    window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
    }
  }, [dealBasData])


  return (
    <GraphPresenter
      canvasWrapRef={canvasWrapRef}
      canvasRef={canvasRef}
    />
  )
}

export default GraphContainer;