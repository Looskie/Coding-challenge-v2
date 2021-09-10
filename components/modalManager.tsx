import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import styled from "styled-components";
import { activeModal } from "../state/modal";
import { modals } from "../state/modal/modals";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  width: 80%;
  max-width: 500px;
  min-height: 300px;
  max-height: 80%;
  border-radius: 8px;
  padding: 14px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px;
`;

const Title = styled.h1``;

export const ModalManager = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useAtom(activeModal);
  const modal = currentModal && modals[currentModal];

  return (
    <AnimatePresence>
      {modal && (
        <Wrapper>
          <Container>
            <Title>{modal.title}</Title>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
