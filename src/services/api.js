const URL_API = 'http://localhost:3131'

export async function getPosts(page = 1) {
  try {
    const res = await fetch(`${URL_API}/posts?page=${page}`)
    if (!res.ok) {
      throw new Error('Failed to retrieve posts')
    }
    return res.json()
  } catch (err) {
    console.error('Error retrieving posts', err)
    throw err
  }
}

export async function getUserPosts(username, page = 1) {
  try {
    const res = await fetch(`${URL_API}/posts/${username}?page=${page}`)
    if (!res.ok) {
      throw new Error('Failed to retrieve user posts')
    }
    return res.json()
  } catch (err) {
    console.error('Error retrieving user posts', err)
    throw err
  }
}

export async function getUserInfo(username) {
  try {
    const res = await fetch(`${URL_API}/profile/${username}`)
    if (!res.ok) {
      throw new Error('Failed to retrieve user profile')
    }
    return res.json()
  } catch (err) {
    console.error('Error retrieving user profile', err)
    throw err
  }
}

export async function signin(data) {
  try {
    const res = await fetch(`${URL_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      throw new Error('Datos incorrectos')
    }
    return res.json()
  } catch (err) {
    console.error('Login error', err)
    throw err
  }
}

export async function signup(data) {
  try {
    const res = await fetch(`${URL_API}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      throw new Error('Usuario/Email en uso')
    }
    return res.json()
  } catch (err) {
    console.error('Registro error', err)
    throw err
  }
}

export async function post(user, data) {
  try {
    const res = await fetch(`${URL_API}/posts/${user}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      throw new Error('Error al crear posteo')
    }
    return res.json()
  } catch (err) {
    console.error('Error de posteo', err)
    throw err
  }
}

// TODO: FIX
export async function patch(id, content) {
  console.log(id, content)
  try {
    const res = await fetch(`${URL_API}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
    if (!res.ok) {
      throw new Error('Error al editar el posteo')
    }
    return res.json()
  } catch (err) {
    console.error('Error de edición', err)
    throw err
  }
}