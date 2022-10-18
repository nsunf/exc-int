import InternationalPresenter from "../presenters/InternationalPresenter";
import { useAppSelector } from "../redux/hooks";

function InternationalContainer() {
  const internationalData = useAppSelector(state => state.international.data);
  const data = [
    internationalData.filter(inter => inter.cur_fund === "USD"),
    internationalData.filter(inter => inter.cur_fund === "EUR"),
    internationalData.filter(inter => inter.cur_fund === "JPY")
  ]
  
  return (
    <InternationalPresenter
      data={data}
    />
  )
}

export default InternationalContainer;