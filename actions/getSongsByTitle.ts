import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import getSongs from "./getSongs"

//this function will get the songs from the db based on title for the search
const getSongsByTitle = async (title:string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    if(!title){ //no title return all songs
        const allSongs = await getSongs()
        return allSongs
    }

    const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title',`%${title}%`) //find title that matches
    .order('created_at', {ascending:false})

    if(error){
        console.log(error)
    }

    return (data as any) || []
}

export default getSongsByTitle