import { useEffect } from "react";
import { useMatch } from "react-router-dom";
import ExchangeDetailPresenter from "../presenters/ExchangeDetailPresenter";

function ExchangeDetailContainer() {
  const match = useMatch("/exchange/:unit");

  useEffect(() => {
    // console.log(match?.params.unit);
  }, [match])

  return (
    <ExchangeDetailPresenter
    />
  )
}

export default ExchangeDetailContainer;