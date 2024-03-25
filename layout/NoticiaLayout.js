import Image from "next/image";
import Divisor from "../app/components/Divisor";

const NoticiaLayout = ({
  Nome,
  Dono,
  Descricao,
  Tags,
  ImagemLink,
  DataCriada,
}) => (
  <div className="w-full flex flex-col justify-center">
    <div className="w-full h-2/4 m-2 flex justify-center">
      <Image
        alt={Nome}
        src={ImagemLink}
        className="object-cover object-center md:h-36 lg:h-48"
        width={544}
        height={306}
      />
    </div>
    <div className="w-full flex flex-col m-2">
      <div className="flex w-full justify-center">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {Nome}
        </h2>
      </div>
      <div className="w-full bg-gray flex flex-row justify-between items-center py-2 px-4">
        <div>
          <h3 className="text-xl font-bold">Criado por {Dono}</h3>
        </div>
        <div className="text-sm">
          <Date>{DataCriada}</Date>
        </div>
        <div className="flex">
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {Tags}
          </span>
        </div>
      </div>
      <Divisor color="lightgray" thickness={1} marginVertical={10} />
      <div className="w-full bg-gray-100 m-2">{Descricao}</div>
    </div>
  </div>
);

export default NoticiaLayout;
