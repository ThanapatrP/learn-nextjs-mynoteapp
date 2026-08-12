"use client";
import { Trash } from "lucide-react";
import { deleteNote } from "@/action";
import { useRouter } from "next/navigation";

interface NoteCardProps {
  id: string;
  content: string;
}

export default function NoteCard({ id, content }: NoteCardProps) {
  const router = useRouter();

  const onDelete = () => {
    deleteNote(id);
    router.refresh();
  };

  const onEdit = () => {};

  return (
    <div className="relative bg-blue-200 mb-3 p-2">
      <div
        className="absolute top-0 left-0 opacity-0 hover:opacity-100 w-full h-full hover:cursor-text"
        onClick={(_e: React.MouseEvent) => {
          onEdit();
        }}
      >
        <button
          className="hover:cursor-pointer"
          onClick={(_e: React.MouseEvent<HTMLButtonElement>) => {
            onDelete();
          }}
        >
          <Trash className="absolute top-2 right-2 text-red-500" />
        </button>
      </div>
      <p>{content}</p>
    </div>
  );
}
