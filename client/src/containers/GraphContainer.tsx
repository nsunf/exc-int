import { useCallback, useEffect, useRef, useState } from "react";
import Graph from "../canvas/Graph";
import GraphPresenter from "../presenters/GraphPresenter";
import { useAppSelector } from "../redux/hooks";


function GraphContainer() {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [wrapSize, setWrapSize] = useState({ width: 0, height: 0 });
  const [graphMode, setGraphMode] = useState<GraphMode>('Week');

  const dealBasData = useAppSelector(state => state.exchange.selected?.deal_bas_r_arr ?? []);

  const onClickMode = useCallback((mode: GraphMode) => {
    setGraphMode(mode);
  }, []) 

  useEffect(() => {
    const canvasWrap = canvasWrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvasWrap || !canvas || !ctx) return;

    canvasWrap.style.position = 'relative';
    canvas.style.position = 'absolute';

    const resize = () => {
      canvas.width = wrapSize.width;
      canvas.height = wrapSize.height;
    };
    resize();

    let graph = new Graph(canvas.width/2, canvas.height/2, canvas.width*0.8, canvas.height * 0.5, dealBasData);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      graph.update(ctx);
    };


    const interval = setInterval(animate, 1000/60);
    window.addEventListener('resize', resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    }
  }, [dealBasData, wrapSize])

  useEffect(() => {
    const resizeEvent = () => {
      if (canvasWrapRef.current) {
        setWrapSize({
          width: canvasWrapRef.current.clientWidth,
          height: canvasWrapRef.current.clientHeight
        })
      }
    }
    resizeEvent();
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    }
  }, [])


  return (
    <GraphPresenter
      canvasWrapRef={canvasWrapRef}
      canvasRef={canvasRef}
      mode={graphMode}
      onClickMode={onClickMode}
    />
  )
}

export default GraphContainer;