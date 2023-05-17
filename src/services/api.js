import axios from 'axios';

const API_URL = "http://localhost3131";

export async function getPosts() {
  try {
    const res = await axios.get(`${API_URL}/posts`);
    return res.data;
  } catch (err) {
    console.error("Error al obtener posteos", err);
    throw err;
  }
}