import InterestPresenter from "../presenters/InterestPresenter";
import { useAppSelector } from "../redux/hooks";

function InterestContainer() {
  const interestData = useAppSelector(state => state.interest.data);
  return (
    <InterestPresenter
      data={interestData}
    />
  )
}

export default InterestContainer;