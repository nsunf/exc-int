import styled from "styled-components";

const DiscriptionBlock = styled.div`
  margin: 4px 0;

  &:first-child > div:first-child {
    background: ${({ theme }) => theme.color.blue1};
  }

  &:nth-child(2) > div:first-child {
    background: ${({ theme }) => theme.color.blue2};
  }

  &:nth-child(3) > div:first-child {
    background: ${({ theme }) => theme.color.blue3};
  }

  overflow: hidden;
  &>div {
    float: left;
  }
`;

const Box = styled.div`
  width: 24px;
  height: 24px;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.color.main};
  font-size: 13px;
  line-height: 24px;
  margin-left: 8px;
`;

interface DescriptionProps {
  text: string;
}

function Description({ text }: DescriptionProps) {
  return (
    <DiscriptionBlock>
      <Box></Box>
      <Label>{text}</Label>
    </DiscriptionBlock>
  )
}

const InternationalGraphDescBlock = styled.div`
  margin: 16px;
`;

function InternationalGraphDesc() {
  return (
    <InternationalGraphDescBlock>
      <Description text="5년 이하"/>
      <Description text="5년 이상 8.5년 이하"/>
      <Description text="8.5년 이상"/>
    </InternationalGraphDescBlock>
  )
}

export default InternationalGraphDesc;