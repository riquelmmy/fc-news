import { SelectTags } from "../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Tags() {
  const tags = await SelectTags();
  console.log(tags.rows);

  if (!tags) {
    return notFound();
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center">
        <h1 className="self-center text-2xl font-bold bg-sky-200 rounded px-4 py-1">
          Esses são os assuntos que nós publicamos
        </h1>
        <div className="w-full h-2/4 flex flex-col justify-center gap-4">
          {tags.rows.map((tag) => (
            <Link
              key={tag.slug}
              className="self-center"
              href={`/tags/${tag.slug}`}
            >
              <h2 className="inline-block hover:bg-gray-200 bg-gray-100 rounded px-4 py-1 text-sm font-semibold">
                {tag.slug}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
