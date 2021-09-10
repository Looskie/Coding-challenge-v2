import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import styled from "styled-components";
import { activeModal } from "../state/modal";
import { modals } from "../state/modal/modals";

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1``;

export const ModalManager = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useAtom(activeModal);
  const modal = currentModal && modals[currentModal];

  return (
    <AnimatePresence>
      {modal && (
        <Container>
          <Title>{modal.title}</Title>
        </Container>
      )}
    </AnimatePresence>
  );
};
