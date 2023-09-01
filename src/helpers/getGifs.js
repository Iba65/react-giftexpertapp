export const getGifs = async (category, setState) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=50&api_key=JYsQSYFdePUSrZ1iMGdxfJFSujnMZ1OT`;
    const resp = await fetch( url);
    const { data } =  await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })
    setState({
      data: gifs,
      loading: false
    });
  };