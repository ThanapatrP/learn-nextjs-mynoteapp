"use client";

import { newNote } from "@/action";
import { useRouter } from "next/navigation";

export default function NewNoteButton({ noteCount }: { noteCount: number }) {
  const router = useRouter();
  const onNewNoteClick = () => {
    newNote(String(noteCount));
  };

  return (
    <button
      className="bg-cyan-800 text-xl p-3 hover:bg-cyan-700 hover:cursor-pointer"
      onClick={() => {
        onNewNoteClick();
        router.refresh();
      }}
    >
      <h1 className="text-white">+ New Note</h1>
    </button>
  );
}
