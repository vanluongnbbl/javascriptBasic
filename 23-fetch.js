var postAPI = 'https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
    .then((res) => {
        return res.json()
        // JSON.parse: JSON -> Javascript types
    })
    .then((posts) => {
        var htmlPost =  posts.map((post, index) => {
            return `
            <h3>${index+1} ${post.title}</h3>
            <p>${post.title}</p>
            `
        }).join('')

        // document.getElementById('post').innerHTML = htmlPost
    })
    .catch((error) =>{
        alert('Lỗi')
    })