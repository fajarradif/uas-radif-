const API_KEY = "7e7a0d2ae2854ad38a2c2940d9d75711"; // ganti dengan API key kamu
// BASE_URL tidak di pakai karena kita fetch lewat backend proxy

export async function fetchNews(category = "") {
    try {
        const url = category
    ? '/api/news/${category}'
    : '/api/news';

        const respponse = await fetch(url);
        const data = await respponse.json();
        return data.articles || [];
    }   catch (error) {
        console.error("Gagal fetch berita:", error);
        return [];
    }
}
export default {
    server: {
        proxy: {
            "/api": "http://localhost:5000"
        }
    }
}