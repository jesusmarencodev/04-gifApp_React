





 export const getGifs = async (category) =>{

    try {
      const url    = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=9hK5ZW01CjEy0LeN0PiezJE6ZxgScQu0`;
      const resp   = await fetch(url);
      const {data} = await resp.json();
      //constuyendo un array de objetos con la forma que quiero
      const gifs   = data.map(img =>{
        return {
          id    :  img.id,
          title :  img.title,
          url   :  img.images?.downsized_medium.url,//signo de interrogacion significa que si vienen las imagenes que las use, sino no
        }
      })

      return gifs;
    } catch (error) {
      console.log(error);
    }
  }