import { json, LoaderFunction} from 'remix';
import pokemon from '../../lib/pokemon'

export const loader:LoaderFunction=({request})=>{
    const q = (new URL(request.url).searchParams.get('q') ?? "").toLowerCase()
    return json(
        pokemon.filter(({name})=> name.toLowerCase().includes(q)).slice(0)
    )
}