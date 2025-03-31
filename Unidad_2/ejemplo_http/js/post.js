const postData = () => {
    const newPost = {
        titulo:"Nuevo post",
        descripcion:"Descripción del nuevo post",
        fecha: new Date().toISOString()
    }
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            "Accept":"application/json"
        },
        body:JSON.stringify(newPost)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then(data => showResult(data))
    .catch(error => showResult(error.message,true));
}