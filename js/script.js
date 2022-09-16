window.addEventListener('DOMContentLoaded', () => {

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9120d5342mshf6d62358763ee6ep1366e8jsnb758058b06b8',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US', options)
	.then(response => response.json())
	.then(response => createAlbom(response.tracks))
	.catch(err => console.error(err));


})


function createAlbom(response) {
    // console.log(response);
    response.forEach((item) => {
        
        let card = document.createElement('div')
  
        card.classList.add('card')
  
        console.log(item.hub.actions[1].uri);

        let music = item.hub.actions[1].uri;

        
        
  
        
        card.innerHTML = `
        <a href="${item.url}">
            <img src="${item.images.coverart}" alt="${item.title}">
        </a>
        <audio src="${music}" controls></audio>
      
              `
      document.querySelector('.app').appendChild(card)
      })
    
  }
