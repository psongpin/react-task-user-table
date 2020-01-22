import React from "react";
import styled from "styled-components";
import tx from "tailwind.macro";

const circleCss = [
  { top: "63", left: "63", animationDelay: "-0.036" },
  { top: "68", left: "56", animationDelay: "-0.072" },
  { top: "71", left: "48", animationDelay: "-0.108" },
  { top: "72", left: "40", animationDelay: "-0.144" },
  { top: "71", left: "32", animationDelay: "-0.18" },
  { top: "68", left: "24", animationDelay: "-0.216" },
  { top: "63", left: "17", animationDelay: "-0.252" },
  { top: "56", left: "12", animationDelay: "-0.288" }
];

const generateCircleCss = () => {
  let str = "";

  circleCss.map((css, index) => {
    str += `
      div:nth-child(${index + 1}) {
        animation-delay: ${css.animationDelay}s;

        &:after {
          top: ${css.top}px;
          left: ${css.left}px;
        }
      }
    `;

    return null;
  });

  return str;
};

const Overlay = styled.div`
  ${tx`w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-50`};
  background: rgba(254, 254, 254, 0.8);
`;

const RollerWrapper = styled.div`
  ${tx`fixed z-50`};
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const Roller = styled.div`
  ${tx`inline-block relative`};
  width: 80px;
  height: 80px;

  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;

    &:after {
      ${tx`block absolute bg-green-400`};
      content: " ";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin: -4px 0 0 -4px;
    }
  }

  ${generateCircleCss()}

  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <>
    <Overlay />
    <RollerWrapper>
      <Roller>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Roller>
    </RollerWrapper>
  </>
);

export default Loader;
