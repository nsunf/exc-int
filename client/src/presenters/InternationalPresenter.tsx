import styled from "styled-components";
import InternationalGraph from "../components/InternationalGraph";
import InternationalGraphDesc from "../components/InternationalGraphDesc";

const InternationalPresenterBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GraphWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

interface InternationalPresenterProps {
  data: International[][];
}

function InternationalPresenter({ data }: InternationalPresenterProps) {
  return (
    <InternationalPresenterBlock>
      <InternationalGraphDesc />
      <GraphWrap>
        {data.map(d => {
          let flagSrc = process.env.PUBLIC_URL + "/icon/flag/";
          switch (d[0].cur_fund) {
            case "USD":
              flagSrc += 'πΊπΈ.png'; 
              break;
            case "EUR":
              flagSrc += 'πͺπΊ.png'; 
              break;
            case "JPY":
              flagSrc += 'π―π΅.png'; 
              break;
            default:
              break;
          }
          return (
            <InternationalGraph
              key={d[0].cur_fund}
              name={d[0].cur_fund}
              flag={flagSrc}
              values={d.map(a => Number(a.int_r))}
            />
          )
        }
        )}
      </GraphWrap>
    </InternationalPresenterBlock>
  )
}

export default InternationalPresenter;