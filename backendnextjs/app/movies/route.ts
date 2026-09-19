import { error } from "console";
import { movies } from "./db";
import { NextRequest } from "next/server";

// export async function GET() {
//     return Response.json(movies)
// }
export async function POST(req:Request) {
    const movie = await req.json();
    const newMovie = {...movie};
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie));
}

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredMovies = query ? movies.filter(m => m.name.toLowerCase().includes(query))
    : movies;
    return new Response(JSON.stringify(filteredMovies))
}