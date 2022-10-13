import { useState, useEffect } from "react";
import ExchangePresenter from "../presenters/ExchangePresenter";
import { useAppSelector } from "../redux/hooks";

function ExchangeContainer() {
  const exchangeData = useAppSelector(state => state.exchange.todays);
  const [numOfCard, setNumOfCard] = useState<1 | 2>(window.innerWidth > 1180 ? 2 : 1);

  useEffect(() => {
    const resizeEvent = () => {
      setNumOfCard(window.innerWidth > 1180 ? 2 : 1);
    };
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
    <ExchangePresenter
      exchangeData={exchangeData}
      numOfCard={numOfCard}
    />
  )
}

export default ExchangeContainer;