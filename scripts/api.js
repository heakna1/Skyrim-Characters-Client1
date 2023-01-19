export const indexCharacter = () => {
    return fetch(`http://localhost:8005/characters`)
}

export const createCharacter = (data) => {
    return fetch(`http://localhost:8005/characters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCharacter = (id) => {
    return fetch(`http://localhost:8005/characters/${id}`)
}