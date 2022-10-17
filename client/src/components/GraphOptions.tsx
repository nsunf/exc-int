import { lighten, darken } from "polished";
import styled, { css } from "styled-components";

const OptionButtonBlock = styled.div`
  width: 33.333%;
  border-left: 2px solid ${({ theme }) => theme.color.gray1};

  &:first-child {
    border: none;
  }
`;

const StyledButton = styled.input<{ selected: boolean }>`
  width: 100%;
  padding: 2px 8px;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;

  ${({ theme, selected }) => {
    if (selected) {
      return css`
        color: white;
        background: ${theme.color.main};
      `
    } else {
      return css`
        color: ${theme.color.gray1};
        background: ${theme.color.subBackground};
        &:hover {
          background: ${lighten(0.1, theme.color.main)};
          color: white;
        }
        &:active {
          background: ${darken(0.05, theme.color.main)};
        }
      `
    }
  }}
`;

interface OptionButtonProps {
  text: string;
  selected: boolean;
}

function OptionButton({ text, selected }: OptionButtonProps) {
  return (
    <OptionButtonBlock >
      <StyledButton type="button" value={text} selected={selected} />
    </OptionButtonBlock>
  )
}

const GraphOptionsBlock = styled.div`
`;

const ButtnWrap = styled.div`
  float: right;
  font-size: 0;

  display: flex;
  flex-direction: row;

  overflow: hidden;
  border-radius: 10px;
`;

function GraphOptions() {
  return (
    <GraphOptionsBlock>
      <ButtnWrap>
        <OptionButton text="1년" selected={false}/>
        <OptionButton text="1개월" selected={false}/>
        <OptionButton text="1주일" selected={true}/>
      </ButtnWrap>
    </GraphOptionsBlock>
  )
}

export default GraphOptions;