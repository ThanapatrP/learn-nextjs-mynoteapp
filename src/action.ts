"use server";

import db from "./libs/db";
import NoteRecord from "./types/NoteRecord";
import { generateRandomTimeId } from "./utils/TimeId";

export async function getNotes() {
  const [rows] = await db.execute<NoteRecord[]>("SELECT * FROM notes");
  return rows;
}

export async function newNote(content: string) {
  const noteId = generateRandomTimeId();
  db.execute<NoteRecord[]>(
    // `INSERT INTO notes (id, content) VALUES ('${noteId}', '${content}');` <- (OLD) SQL injection risk
    "INSERT INTO notes (id, content) VALUES ('?', '?');",
    [noteId, content],
  );
}

export async function deleteNote(id: string) {
  // db.execute<NoteRecord[]>(`DELETE FROM notes WHERE id = '${id}';`); <- (OLD) SQL injection risk
  db.execute<NoteRecord[]>("DELETE FROM notes WHERE id = '?';", [id]);
}
