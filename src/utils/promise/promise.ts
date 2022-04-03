import { Fetch, InitOption } from "./api";


export default function PromiseGet(endpoint:string){
    const options:InitOption = {
        method: "GET",
    }
    return Fetch(endpoint, options, false)
}