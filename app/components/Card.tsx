import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", options);
};

const Card = ({ titulo, descricao, tags, imgSrc, href, views, datacriada }) => {
  const formattedDate = formatDate(datacriada);

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrc && "h-full"
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${titulo}`}>
              <Image
                alt={titulo}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={100}
              />
            </Link>
          ) : (
            <Image
              alt={titulo}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${titulo}`}>
                {titulo}
              </Link>
            ) : (
              titulo
            )}
          </h2>
          <p className="prose sm:mb-3 sm:w-full text-gray-500 sm:truncate">
            {descricao}
          </p>
          <p className="prose mb-3 max-w-none text-gray-500">{tags}</p>
          <p className="prose mb-3 max-w-none text-black">
            Visualizações: {views}
          </p>
          <p className="prose mb-3 max-w-none text-black">
            Criado em: {formattedDate}
          </p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 "
              aria-label={`Link to ${titulo}`}
            >
              Leia a notícia completa &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
