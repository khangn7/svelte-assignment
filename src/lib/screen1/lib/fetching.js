import { api_url } from "./api";

// "key": [endpoint, options]
const OPTIONS = {
    "post": {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    },
    "get": {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        }
    },
    "put": {
        method: "PUT",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: 0
    }

};


// method: string "post", "get", "put"
// endpoint: string,
// data: object

// returns new endpoint if method is "post" ex. h ttps://jsonblob.com/api/jsonBlob/5226571730043f8b22dadc20
export async function myfetch(method, endpoint, data)
{
    // console.log(OPTIONS)
    let options = JSON.parse(JSON.stringify(OPTIONS[method]));
    if (method === "put")
    {
        options.body = JSON.stringify(data);
    }

    let response;

    response = await fetch(api_url + endpoint, options);

    if (method === "post")
    {
        return response.headers.get("Location");
    }

    let obj = await response.json();

    return obj; 
}
