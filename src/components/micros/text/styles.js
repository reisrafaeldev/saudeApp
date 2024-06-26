import styled, { css } from "styled-components/native";

export const Text = styled.Text`
  color: ${(props) => props.color || "#08506F"};
  width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.textAlign || "center"};
  ${(props) => props.variant === "Title1" && title1};
  ${(props) => props.variant === "Title2" && title2};
  ${(props) => props.variant === "Title3" && title3};
  ${(props) => props.variant === "Title4" && title4};
  ${(props) => props.variant === "Title5" && title5};
  ${(props) => props.variant === "Title6" && title6};
  ${(props) => props.variant === "Title7" && title7};
  ${(props) => props.variant === "Title8" && title8};
  ${(props) => props.variant === "Title9" && title9};
  ${(props) => props.variant === "Title10" && title10};
`;

const title1 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #000e08;
`;

const title2 = css`
  font-size: 36px;
  letter-spacing: 0.1px;
  color: #797c7b;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 65%;
`;

const title3 = css`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.0096px;
`;

const title4 = css`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1.504px;
`;

const title5 = css`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 2px;
`;

const title6 = css`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 3.008px;
`;
const title7 = css`
  font-style: normal;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0.015em;
`;

const title8 = css`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.015em;
`;
const title9 = css`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;
const title10 = css`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
