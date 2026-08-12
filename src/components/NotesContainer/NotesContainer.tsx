"use client";
import NoteCard from "../NoteCard/NoteCard";
import NoteRecord from "@/types/NoteRecord";

export default function NotesContainer({ notes }: { notes: NoteRecord[] }) {
  return (
    <div id="noteContainer" className="flex-1 overflow-scroll mb-2">
      {notes.map((note: NoteRecord) => (
        <NoteCard key={"note_" + note.id} id={note.id} content={note.content} />
      ))}
    </div>
  );
}
