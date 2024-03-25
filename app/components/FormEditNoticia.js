'use client'
import axios from 'axios';
import Link from "next/link";

export default function FormEditNoticia({tags, session, news}) {

    console.log('news', news)
    console.log(news.rows[0].slug)

    async function updateNoticia(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const noticia = {
            Slug: news.rows[0].slug,
            Nome: form.get('nomenoticia'),
            Dono: session.user.name,
            Imagemlink: form.get('imagemnoticia'),
            Descricao: form.get('conteudonoticia'),
            Tags: form.get('tags'),
        }
        const response = await axios.put('/api/update-noticias/', JSON.stringify(noticia), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <form onSubmit={updateNoticia}>
            <div className="space-y-12 container">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notícia</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Notícia a ser apresentada para todos que
                        visitarem o site.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="nomenoticia" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome da Notícia
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="nomenoticia"
                                    id="nomenoticia"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="imagemnoticia"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Link da Imagem
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="imagemnoticia"
                                    id="imagemnoticia"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="conteudonoticia"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Conteudo
                            </label>
                            <div className="mt-2">
                                <textarea
                                    name="conteudonoticia"
                                    id="conteudonoticia"
                                    autoComplete="conteudonoticia"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                                Tags
                            </label>
                            <div className="mt-2">
                                <select
                                    id="tags"
                                    name="tags"
                                    autoComplete="tags"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {tags.rows.map((tag) => (
                                        <option key={tag.slug}>{tag.nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link type="button" className="text-sm font-semibold leading-6 text-gray-900" href='/gerenciador'>
                    Cancelar
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Confirmar
                </button>
            </div>
        </form>
    )
}