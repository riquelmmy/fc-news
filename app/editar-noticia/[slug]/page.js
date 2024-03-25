import FormEditNoticia from "../../components/FormEditNoticia";
import {SelectNoticiaBySlug, SelectTags} from "../../lib/data";
import {getServerSession} from "next-auth";

export default async function EditarNoticias({params}) {

    const tags = await SelectTags();

    const session = await getServerSession();

    const noticia = await SelectNoticiaBySlug(params.slug);

    return (
        <FormEditNoticia tags={tags} session={session} news={noticia}/>
    )
}