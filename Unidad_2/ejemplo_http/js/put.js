const putData = () => {
    const update = {
        titulo: "Post actualizado",
        descripcion: "Descripción del post actualizado",
        fecha: new Date().toISOString()
    };

    fetch(`${API_URL}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(posts => {
        if (!posts || posts.length === 0) {
            throw new Error('No posts found to update');
        }
        const lastPost = posts.reduce((newest, post) => {
            if (!post.fecha) return newest;
            
            const postDate = new Date(post.fecha);
            const newestDate = newest.fecha ? new Date(newest.fecha) : new Date(0);
            
            return postDate > newestDate ? post : newest;
        }, {});
        
        if (!lastPost.id) {
            throw new Error('Could not determine the most recent post');
        }
        
        return fetch(`${API_URL}/${lastPost.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(update)
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showResult(`Successfully updated the last post: ${JSON.stringify(data)}`))
    .catch(error => showResult(error.message, true));
}