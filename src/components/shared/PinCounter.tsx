import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ACTIONS, event, getTotal } from "../../storage";
const PinCounterContainer = styled.span`
  font-weight: bolder;
`;
export const PinCounter = () => {
  const [counter, setCounter] = useState(getTotal());

  useEffect(() => {
    event.on(ACTIONS.UPDATE_TOTAL, () => {
      setCounter(getTotal());
    });
    return;
  }, []);

  return <PinCounterContainer>{counter}</PinCounterContainer>;
};
