export const indexCharacter = () => {
    return fetch(`http://localhost:8005/players`)
}

export const createCharacter = (data) => {
    return fetch(`http://localhost:8005/players`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCharacter = (id) => {
    return fetch(`http://localhost:8005/players/${id}`)
}