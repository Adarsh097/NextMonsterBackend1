import { json } from "stream/consumers";
import { movies } from "../db";
import { error } from "console";

//! you put underscore to depict that you are aware of the parameter but you are intentially not using it
export async function GET(_req : Request, {params}: {params : {id: string}}) {
    const {id} = await params;
    const movie = movies.find(m=>m.id === +id);

    return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found",{status : 404});
}


export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const movieId = +id;

    // Check if the movie exists
    const movie = movies.find(m => m.id === movieId);
    if (!movie) {
        return new Response(JSON.stringify({ error: "Movie Not Found" }), {
            status: 404,
        });
    }

    try {
        const updateMovie = await req.json();

        // Find index of the movie
        const index = movies.findIndex(m => m.id === movieId);

        // Update movie
        movies[index] = { ...movie, ...updateMovie };

        return new Response(JSON.stringify(movies[index]), {
            status: 200,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to parse JSON" }),
            { status: 400 }
        );
    }
}


export async function DELETE(req:Request , {params} : {params : {id : string}}) {
    const { id } = await params;
    const movieId = +id;

    //!find the index
    const index = movies.findIndex(m=>m.id === movieId);

    if(index===-1){
        return new Response(JSON.stringify({error :"Movie not found"}),{
            status : 404
        })
    }

    movies.splice(index,1);

    return new Response(JSON.stringify({message :"Movie deleted successfully"}),{status:200})

}