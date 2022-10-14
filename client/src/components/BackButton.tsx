import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackButtonBlock = styled.div`
  display: block;
  padding: 4px;
  margin: 16px;
`;

const Arrow = styled(BsArrowLeft)`
  color: ${({ theme }) => theme.color.main};
  font-size: 20px;
  padding: 8px;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.color.main};
  }
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <BackButtonBlock>
      <Arrow onClick={() => navigate(-1)}/>
    </BackButtonBlock>
  )
}

export default BackButton;