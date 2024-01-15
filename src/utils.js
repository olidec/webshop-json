export async function jsonLoader(url) {
    try {
        const res = await fetch(url)
        return await res.json()

    } catch (e) {
        console.error(e)
    }

}
