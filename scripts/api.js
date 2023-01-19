export const indexCharacter = () => {
    return fetch(`http://localhost:8000/characters`)
}

export const createCharacter = (data) => {
    return fetch(`http://localhost:8000/characters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCharacter = (id) => {
    return fetch(`http://localhost:8000/characters/${id}`)
}

export const updateCharacter = (data, id) => {
    return fetch(`http://localhost:8000/characters/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteCharacter = () => {
    return fetch(`http://localhost:8000/characters/${id}`, {
        method: "DELETE"
    })
}