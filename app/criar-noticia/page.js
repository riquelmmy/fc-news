import FormAddNoticia from "../components/FormAddNoticia";
import {SelectTags} from "../lib/data";
import {getServerSession} from "next-auth";

export default async function CriarNoticia() {

    const tags = await SelectTags();

    const session = await getServerSession();

    return (
        <FormAddNoticia tags={tags} session={session}/>
    )
}