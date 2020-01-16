import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const PageWrapper = styled.div`
  ${tw`h-screen bg-gray-800`}
`;

export default function() {
  return <PageWrapper>Testing</PageWrapper>;
}
