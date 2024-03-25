import {InsertNoticia} from "../../lib/data";
import {NextResponse} from "next/server";

export async function POST(request) {
    const noticia = await request.json();
    console.log('noticia', noticia)
    try {
        const result = await InsertNoticia(noticia);
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
