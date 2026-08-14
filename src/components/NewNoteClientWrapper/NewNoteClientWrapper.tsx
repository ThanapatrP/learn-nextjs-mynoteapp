"use client";

import NewNoteButton from "../NewNoteButton/NewNoteButton";
import NewNoteModal from "../Modal/NewNoteModal/NewNoteModal";
import ModalDimmer from "../Modal/ModalDimmer";
import { useState } from "react";

export default function NewNoteClientWrapper() {
  const [modalOn, setModalOn] = useState(false);

  return (
    <>
      {modalOn ? (
        <>
          <ModalDimmer />
          <NewNoteModal modalOnDispatcher={setModalOn} />
        </>
      ) : (
        <></>
      )}
      <NewNoteButton modalOnDispatcher={setModalOn} />
    </>
  );
}
