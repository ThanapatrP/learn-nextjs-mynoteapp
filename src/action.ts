"use server";

import db from "./libs/db";
import NoteRecord from "./types/NoteRecord";
import { generateRandomTimeId } from "./utils/TimeId";
import { revalidatePath } from "next/cache";

export async function getNotes() {
  const [rows] = await db.execute<NoteRecord[]>("SELECT * FROM notes");
  return rows;
}

export async function newNote(content: string) {
  const noteId = generateRandomTimeId();
  await db.execute<NoteRecord[]>(
    "INSERT INTO notes (id, content) VALUES (?, ?);",
    [noteId, content],
  );
  revalidatePath("/");
}

export async function deleteNote(id: string) {
  await db.execute<NoteRecord[]>("DELETE FROM notes WHERE id = ?;", [id]);
  revalidatePath("/");
}
