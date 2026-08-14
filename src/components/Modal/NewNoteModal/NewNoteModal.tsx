"use client";

import { newNote } from "@/action";
import { X } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function NewNoteModal({
  modalOnDispatcher,
}: {
  modalOnDispatcher: Dispatch<SetStateAction<boolean>>;
}) {
  const [content, setContent] = useState<string>("");

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onNewNoteCreate = () => {
    newNote(content);

    modalOnDispatcher(false);
    setContent("");
  };

  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center">
        <div id="new-note-modal" className="h-90 w-120 bg-white p-5">
          <div className="flex flex-col h-full gap-2">
            <div className="relative">
              <h1 className="text-3xl text-center">NewNote</h1>
              <X
                className="absolute top-0 right-0 hover:cursor-pointer"
                onClick={() => {
                  modalOnDispatcher(false);
                }}
              />
            </div>
            <textarea
              className="bg-gray-200 border-gray-400 border-2 flex-1 resize-none"
              value={content}
              onChange={onTextareaChange}
            />
            <button
              className="bg-cyan-700 text-white hover:cursor-pointer hover:bg-cyan-600"
              onClick={onNewNoteCreate}
            >
              Create Note!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
