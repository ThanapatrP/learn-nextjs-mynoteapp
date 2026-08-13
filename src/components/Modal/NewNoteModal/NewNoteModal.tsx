"use client";

import { Dispatch, SetStateAction } from "react";

export default function NewNoteModal() {
  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center">
        <div id="new-note-modal" className="h-90 w-120 bg-white p-5">
          <div className="flex flex-col h-full gap-2">
            <h1 className="text-3xl text-center">NewNote</h1>
            <textarea className="bg-gray-200 border-gray-400 border-2 flex-1 resize-none" />
            <button className="bg-cyan-700 text-white hover:cursor-pointer hover:bg-cyan-600">
              Create Note!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
