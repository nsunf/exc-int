import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styled from "styled-components";
import ExchangeContainer from "../containers/ExchangeContainer";

const BodyBlock = styled(TransitionGroup)`
  flex-grow: 1;
  overflow: hidden;

  .body-transition-enter {
    transform: translateY(10%);
    opacity: 0;
  }

  .body-transition-enter-active {
    transform: translateY(0%);
    opacity: 1;
    transition: 1s;
  }
`;

const TransitionWrapper = styled.div`
  width: 100%;
  height: 100%;
`;


function Body() {
  const location = useLocation();
  const ref = useRef(null);
  return (
    <BodyBlock>
      <CSSTransition nodeRef={ref} key={location.key} classNames="body-transition" timeout={200}>
        <TransitionWrapper ref={ref}>
          <Routes location={location}>
            <Route path="/*" element={<ExchangeContainer />} />
            <Route path="/exchange/:unit" element={<></>} />
            <Route path="/interest" element={<></>} />
            <Route path="/international" element={<></>} />
          </Routes>
        </TransitionWrapper>
      </CSSTransition>
    </BodyBlock>
  )
}

export default Body;