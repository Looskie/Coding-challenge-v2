import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import styled from "styled-components";
import { activeModal } from "../state/modal";
import { modals } from "../state/modal/modals";
import { RatingModal } from "./modals";

/* We're using React-icons because it has a better API by far, + it has types */
import { FaTimes } from "react-icons/fa";
import { useModalHook } from "../hooks/modalHook";
import { useRef } from "react";

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

const Container = styled(motion.div)`
  width: 80%;
  max-width: 450px;
  min-height: 250px;
  max-height: 80%;
  border-radius: 15px;
  padding: 30px 35px;
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

/* Animations */

const wrapperAnimation = {
  initial: {
    "opacity": 0,
    "background": "rgba(0, 0, 0, 0)",
    "backdrop-filter": "blur(0)",
  },
  isOpen: {
    "opacity": 1,
    "background": "rgba(0, 0, 0, 0.1)",
    "backdrop-filter": "blur(1.2px)",
  },
  exit: {
    "opacity": 0,
    "background": "rgba(0, 0, 0, 0)",
    "backdrop-filter": "blur(0)",
  },
};

const containerAnimation = {
  initial: {
    opacity: 0,
    transform: "scale(.94)",
  },
  isOpen: {
    opacity: 1,
    transform: "scale(1)",
  },
  exit: {
    opacity: 0,
    transform: "scale(.94)",
  },
};

export const ModalManager = (): JSX.Element => {
  const [currentModal, setCurrentModal] = useAtom(activeModal);
  const modal = currentModal && modals[currentModal];
  const containerRef = useRef<HTMLDivElement | null>(null);

  useModalHook(containerRef, () => setCurrentModal(null));

  return (
    <AnimatePresence>
      {modal && (
        <Wrapper
          initial={"initial"}
          exit={"exit"}
          animate={"isOpen"}
          transition={{ duration: 0.18 }}
          variants={wrapperAnimation}
        >
          <Container
            transition={{ duration: 0.18 }}
            variants={containerAnimation}
            ref={containerRef}
          >
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
