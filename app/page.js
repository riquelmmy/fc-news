import Hero from "../app/components/Hero";
import FeedForSearch from "../app/components/FeedForSearch";
import Search from "./components/Search";

export default function Home({ searchParams }) {
  const query = searchParams?.query || "";

  return (
    <>
      <div className="container flex flex-col w-full">
        <Hero />
        <div className="w-full flex justify-center">
          <div className="w-1/2 m-3">
            <Search placeholder="Procure por algo" />
          </div>
        </div>
        <FeedForSearch query={query} />
      </div>
    </>
  );
}
