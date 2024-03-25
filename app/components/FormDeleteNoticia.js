'use client'
import axios from 'axios';
import Link from "next/link";

export default function FormDeleteNoticia({noticia}) {

    async function deleteNoticia(event) {
        event.preventDefault();
        console.log('deletar noticia')
        const result = await axios.put('/api/delete-noticias', noticia);
    }

    return (
        <div className='bg-slate-100 flex flex-col justify-center items-center'>
            <h1>Deletar Notícia</h1>
            <p>Tem certeza que deseja deletar a notícia?</p>
            <div>
                <button className='border-2 border-black m-5 hover:bg-slate-600 pr-2 pl-2' onClick={deleteNoticia}>Sim
                </button>
                <Link className='border-2 border-black m-5 hover:bg-slate-600 pr-2 pl-2' href='/gerenciador'>Não</Link>
            </div>
        </div>
    )
}