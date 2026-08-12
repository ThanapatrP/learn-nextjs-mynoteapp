import { getNotes } from "@/action";
import NewNoteButton from "@/components/NewNoteButton/NewNoteButton";
import NotesContainer from "@/components/NotesContainer/NotesContainer";
import { generateRandomTimeId } from "@/utils/TimeId";

export default async function Home() {
  const allNotes = await getNotes();
  const noteCount: number = allNotes.length;
  console.log(generateRandomTimeId());

  return (
    <>
      <div
        id="mainPanel"
        className="flex flex-col bg-white w-96 h-128 m-auto p-2"
      >
        <h1 className="text-3xl text-center">NOTEs</h1>
        <div className="border-2 border-b border-gray-400 my-1"></div>
        <NotesContainer notes={allNotes} />
        <NewNoteButton noteCount={noteCount + 1} />
      </div>
    </>
  );
}
