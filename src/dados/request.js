// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjozfQ.fCrNX37jIo7N7L_P0jU69qGeTaDR8R0b8VqIF_ngrdc"

export async function request(url, method = "GET", token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjozfQ.fCrNX37jIo7N7L_P0jU69qGeTaDR8R0b8VqIF_ngrdc") {
    let retorno = await fetch("http://127.0.0.1:5000/" + url, {
        method: method,
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    })
    retorno = await retorno.json()
    return retorno
}