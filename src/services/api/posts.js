export default async function loadingPost (id){
    var baseURL = 'https://jsonplaceholder.typicode.com/posts'
    if(id){
        baseURL += `/${id}`
    }
    const posts = await fetch(baseURL)
    const postsJson = await posts.json()
    return postsJson
}