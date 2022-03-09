export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=6&api_key=zs2PVtWWWvVsQ0jpTexiMmPC3wT8KuvJ`;        // Sse recibe la url de los gif
    const resp = await fetch(url);                                                                                      // Se hace la petición fetch a la url        
    const { data } = await resp.json();                                                                                 //Se espera la respuesta como json()

    const gifs = data.map(img => {                                                                                      //Se recorre los datos    

        return {
            id: img.id,                                                                                                 //Se saca el identificador
            title: img.title,                                                                                           //Se saca el titulo
            url: img.images?.downsized_medium.url                                                                       //Se saca la url de donde son tomados            
        }

    })
    return gifs;

}