import { useAtom } from "jotai";
import type { NextPage } from "next";
import styled from "styled-components";
import { activeModal } from "../state/modal";

const Home: NextPage = () => {
  const [modal, setModal] = useAtom(activeModal);
  return (
    <div>
      <button onClick={() => setModal("addReview")}>Open modal</button>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
