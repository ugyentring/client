import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  //data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books = await response.json();


  return (
    <>
      <Banner />
      <BookList books={books}/>
    </>
  );
}
