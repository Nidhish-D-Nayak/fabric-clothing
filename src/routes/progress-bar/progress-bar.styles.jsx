import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  z-index: 9;
  overflow-y: hidden;
  display: flex;
  align-items: flex-end;
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  font-family: 'Bebas Neue', sans-serif;
  position: fixed;
  background-color: #ececec;
  height: 100%;
  width: 100%;
`

export const Loader = styled.div`
  z-index: 10;
  height: 200px;
  width: 0;
  background-color: black;
  position: relative;
  animation: expandWidth 4s cubic-bezier(0.42, 0, 0.58, 1) forwards;

  &::after {
    content: attr(data-text);
    color: white;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-75%, -50%);
  }

  @keyframes expandWidth {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }

  }

`;
