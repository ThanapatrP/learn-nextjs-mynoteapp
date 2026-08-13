"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function NewNoteButton({
  modalOnDispatcher,
}: {
  modalOnDispatcher: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const onNewNoteClick = () => {
    modalOnDispatcher(true);
  };

  return (
    <>
      <button
        className="bg-cyan-800 text-xl p-3 hover:bg-cyan-700 hover:cursor-pointer"
        onClick={() => {
          onNewNoteClick();
          router.refresh();
        }}
      >
        <h1 className="text-white">+ New Note</h1>
      </button>
    </>
  );
}
