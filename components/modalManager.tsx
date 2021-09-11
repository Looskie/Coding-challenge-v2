import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import styled from "styled-components";
import { activeModal } from "../state/modal";
import { modals } from "../state/modal/modals";
import { RatingModal } from "./modals";

/* We're using React-icons because it has a better API by far, + it has types */
import { FaTimes } from "react-icons/fa";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  backdrop-filter: blur(1.5px);
  background: rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  width: 80%;
  max-width: 500px;
  min-height: 300px;
  max-height: 80%;
  border-radius: 15px;
  padding: 35px;
  overflow: scroll;
  background: white;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 9px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  flex-grow: 1;
`;

export const ModalManager = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useAtom(activeModal);
  const modal = currentModal && modals[currentModal];

  return (
    <AnimatePresence>
      {modal && (
        <Wrapper>
          <Container>
            <TitleBar>
              <Title>{modal.title}</Title>
              <FaTimes
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentModal(null)}
              />
            </TitleBar>

            {/* Modals */}
            {currentModal === "addReview" && <RatingModal />}
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
