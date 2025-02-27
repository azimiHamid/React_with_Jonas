import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      gap: 1.6rem;
      flex-direction: column;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
