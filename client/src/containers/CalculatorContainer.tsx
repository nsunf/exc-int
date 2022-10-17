import { useEffect, useState } from "react";
import CalculatorPresenter from "../presenters/CalculatorPresenter";
import { useAppSelector } from "../redux/hooks";

interface StateProps {
  imgSrc: string;
  countryName: string;
  unitKo: string;
  unitEn: string;
  deal_bas_r: string;
}

const initialState: StateProps = {
  imgSrc: "",
  countryName: "",
  unitKo: "",
  unitEn: "",
  deal_bas_r: ""
}

function CalculatorContainer() {
  const exchangeInfo = useAppSelector(state => state.exchange.selected?.info);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!exchangeInfo) return;
    const imgSrc = process.env.PUBLIC_URL + '/icon/flag/' + exchangeInfo.flag + '.png';

    const splittedCurNm = exchangeInfo.cur_nm.split(' '); 
    let countryName = splittedCurNm[0];
    if (countryName === '유로')
      countryName = '유럽연합';
    
    const unitKo = splittedCurNm[splittedCurNm.length - 1];
    const unitEn = exchangeInfo.cur_unit;

    const deal_bas_r = exchangeInfo.deal_bas_r;

    setState({ imgSrc, countryName, unitKo, unitEn, deal_bas_r });
  }, [exchangeInfo])

  return (
    <CalculatorPresenter
      imgSrc={state.imgSrc}
      countryName={state.countryName}
      unitKo={state.unitKo}
      unitEn={state.unitEn}
      deal_bas_r={state.deal_bas_r}
    />
  )
}

export default CalculatorContainer;