import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SelectNoticiasInativo } from "../../lib/data";
import ButtonsGerenciar from "../../components/ButtonsGerenciar";
import Link from "next/link";

export default async function Gerenciador() {
  const session = await getServerSession();
  if (!session) {
    return redirect("/");
  }

  const noticiasinativas = await SelectNoticiasInativo();

  function redirectDesativadas() {
    redirect("/gerenciador/desativadas");
  }

  console.log("noticiasinativas", noticiasinativas.rows[0].imagemlink);

  return (
    <div className="flex flex-col w-full justify-center px-5">
      <div className="w-full flex justify-center m-3">
        <h1 className="text-2xl">
          Olá, <span className="font-semibold">{session.user.name}</span>!
        </h1>
      </div>

      <div className="container bg-blue-100 mt-3 p-3 rounded-md ">
        <div className="flex justify-center space-x-4 py-1.5">
          <ButtonsGerenciar />
        </div>
      </div>
      <div className="pt-6 container " />
      <div className="container flex flex-col w-full justify-center bg-blue-100 rounded-md px-14 p-5">
        <ul>
          {noticiasinativas.rows.map((noticia) => (
            <li key={noticia.slug}>
              <div className="container bg-blue-200 rounded-lg py-2 grid grid-cols-2 mb-1">
                <div className="w-full flex justify-center">
                  <div className="w-1/2 flex flex-row items-center">
                    <Image
                      src={noticia.imagemlink}
                      width={64}
                      height={64}
                      alt="imagem"
                      className="border border-gray-500 "
                    />
                    <div className="pl-4">
                      <h1 className="font-bold ">{noticia.nome}</h1>
                      <p>{noticia.dono}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="w-1/2 flex flex-row items-center justify-center">
                    <div className="grid justify-items- gap-2 ">
                      <Link
                        className="hover:text-green-500"
                        href={`/editar-noticia/${noticia.slug}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                          <path
                            d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1
                                                        .25-.25-1.25v-9.5Z"
                          />
                        </svg>
                      </Link>
                      <Link
                        className="hover:text-red-500"
                        href={`/deletar-noticia/${noticia.slug}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
