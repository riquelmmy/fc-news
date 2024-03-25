import {SelectNoticiaBySlug} from "../../lib/data";
import FormDeleteNoticia from "../../components/FormDeleteNoticia";

export default async function DeletarNoticia({params}) {

    const noticia = await SelectNoticiaBySlug(params.slug);

    return (
        <div>
            <FormDeleteNoticia noticia={noticia}/>
        </div>
    )
}