import { useAtom } from "jotai";
import type { NextPage } from "next";
import styled from "styled-components";
import { activeModal } from "../state/modal";

const Home: NextPage = () => {
  const [currentModal, setCurrentModal] = useAtom(activeModal);
  return (
    <div>
      <button onClick={() => setCurrentModal("addReview")}>Open modal</button>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
