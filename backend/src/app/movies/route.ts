// export async function GET() {
//     return new Response("Hello from backend.");
// }

import { NextRequest } from "next/server";
import { movies } from "./db";


//! GET
// export async function GET() {
//     return Response.json(movies);
// }
 
 
//! POST
export async function POST(req:Request) {
    const mov = await req.json();

    const newMovie = { ...mov };
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie));
}

//! Querying
export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    const filteredMoves = query
    ?movies.filter(m=> m.name.toLowerCase().includes(query))
    : movies;

    return new Response(JSON.stringify(filteredMoves));
}

