import { RowDataPacket } from "mysql2";

export default interface NoteRecord extends RowDataPacket {
  id: string;
  content: string;
}
