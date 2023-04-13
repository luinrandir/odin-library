import { Book } from "./types/book";

export function addBook(
  title: string,
  author: string,
  genre: string,
  read: boolean
): Book {
  return { title, author, genre, read } as Book;
}
