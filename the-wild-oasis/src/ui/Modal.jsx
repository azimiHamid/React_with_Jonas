/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import {
  useState,
  createContext,
  useContext,
  cloneElement,
  useEffect,
  useRef,
} from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

// Styled Modal Box
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

// Background Overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

// Close Button
const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

// 1. Create a Context to manage modal state
const ModalContext = createContext();

// 2. Define the Parent `Modal` Component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  // Function to open a modal by setting its name
  const open = (name) => setOpenName(name);
  // or
  // const open = setOpenName;

  // Function to close the modal by resetting `openName`
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. Create reusable child components

// `Open` Component: Triggers modal opening
function Open({ children, opens: openedWindowName }) {
  const { open } = useContext(ModalContext);

  // `cloneElement` creates a copy of the given `children` element (Button in this case)
  // and manually adds an `onClick` prop to it.
  // This allows us to inject behavior (opening the modal) into the child component without modifying it directly.
  // When the button inside `<Modal.Open>` is clicked, it triggers `open(openedWindowName)`,
  // which updates the `openName` state via `setOpenName`, effectively opening the modal.
  return cloneElement(children, {
    onClick: () => open(openedWindowName), // Calls `open('cabin-form')`, setting `openName = 'cabin-form'`
  });
}

// `Window` Component: Displays modal content
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close); // Get the ref from the hook

  // Render modal only if `openName` matches this window's `name`
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}> 
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

// 4. Attach child components to `Modal`
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
