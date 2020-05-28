"use stritc";

const clearResposta = async (  ) => {
    
    const divCard =`
       <div id='card'>
                <div id="card-filtro">
                   <input type="button" name="btnDados-artista" id="btnDados-artista" value="Dados">
                    
                   <input type="button" name="btnMusic-artista" id="btnMusic-artista" value="Musicas">
                    
                   <input type="button" name="btnAlbuns-artista" id="btnAlbuns-artista" value="Albuns">
                    
                   <input type="button" name="btnMusicTop-artista" id="btnMusicTop-artista" value="Melhores">
                    
                 </div>    
            </div> 
    `;
    
    const $container = document.createElement('div');
    $container.innerHTML= divCard;
    const $resultados= document.getElementById('resultados');
    $resultados.removeChild($resultados.firstChild);
    $resultados.appendChild($container);
   
    
    
};

function validArtist (artist){
    let aux;
        aux = artist.replace (/ /g , '-');
        artist=aux;
    return artist.toLowerCase();
};

let bdArtist= [
   {
    
       id: "<div class='spinner-triple'></div>", 
       desc: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
       url: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
       pic_small: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
       pic_medium: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
       rank:[
           {
               views:"<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
               points:"<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
           }
       ],
       genre:[
           {
               name:"<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
           }
       ]

   }
];

const showDataArtist = (data) => {
   
    const cardArtist =`
     <div class='card-artist'>
             <div class='card-artist-flipper'>
                <div class='card-artist-front'>
                   <div class='card-artist-front-img'>
                         <figure>
                            <img src="http://vagalume.com.br${data. pic_medium}" title="${data.desc}">
                        </figure>
                   </div>
                   <div class='card-artist-front-titulo'>
                        <h2>${data.desc}</h2>
                   </div>
                </div>
                 <div class='card-artist-back'>
                    <div class='card-artist-img'>
                        <figure>
                          <img src="http://vagalume.com.br${data.pic_small}" title="${data.desc}">
                        </figure>
                        </div>
                        <div class='card-artist-dados'>
                            <ul class='card-artist-lista'>
                                <li>
                                     <h3>Banda</h3>
                                     <h4>${data.desc}</h4>
                                 </li>
                                 <li>
                                    <h3>Views</h3>
                                    <h4>${data.rank.views}</h4>
                                 </li>
                                 <li>
                                    <h3>Points</h3>
                                    <h4>${data.rank.points}</h4>
                                 </li>
                                 <li>
                                    <h3>Gênero</h3>
                                    <h4>${data.genre[0].name}</h4>
                                 </li>
                                 <li>
                                    <h3>link</h3>
                                    <h4>
                                      <a href='http://vagalume.com.br+${data.url}' title="${data.desc}">Letras </a>
                                    </h4>
                                 </li>
                        </ul>
                    </div>

                </div>
             </div>
        </div>
`;
    const $container = document.createElement('div');
    $container.innerHTML= cardArtist;
    const $card= document.getElementById('card');
    $card.appendChild($container);
    
};

const search = async (artista) => {
    
     if(artista == ""){
         alert("Informe um artista");
     }else{
         artista = validArtist(artista);
         const url = `https://www.vagalume.com.br/${artista}/index.js`;
         const getApi= await fetch(url);
         const json = await getApi.json();
         bdArtist= await json.artist;
         clearResposta();
         showDataArtist( bdArtist );
     }
}; 

const showDataMusic = async (data) => {
   
   for(var i =0 ; i < data.lyrics.item.length ; i++){
       
       
       
        const cardMusic =`
        <div class='card-music'>
             <div class='card-music-flipper'>
                <div class='card-music-front'>
                   <div class='card-music-front-img'>
                         <figure>
                            <img src="http://vagalume.com.br${data.pic_medium}" title="${data.desc}">
                        </figure>
                   </div>
                   <div class='card-music-front-titulo'>
                        <h2>${data.lyrics.item[i].desc}</h2>
                   </div>
                </div>
                 <div class='card-music-back'>
                    <div class='card-music-img'>
                        <figure>
                          <img src="http://vagalume.com.br${data.pic_small}" title="${data.desc}">
                        </figure>
                        </div>
                        <div class='card-music-dados'>
                            <ul class='card-music-lista'>
                                <li>
                                     <h3>Title</h3>
                                     <h4>${data.lyrics.item[i].desc}</h4>
                                 </li>
                                 <li>
                                    <h3>Url</h3>
                                    <h4><a href='https://www.vagalume.com.br/${data.lyrics.item[i].url}'>Vagalume</a></h4>
                                 </li>
                        </ul>
                    </div>
                </div>
             </div>
          </div>
     
`;
    
    const $container = document.createElement('div');
    $container.innerHTML= cardMusic;
    const $card= document.getElementById('card');
    $card.appendChild($container);
    
    
   }
         
    
   
};

const showDataMusicTop = async (data) => {
    
   
   for(var i =0 ; i < data.toplyrics.item.length; i++){
       
       
       
        const cardMusicTop =`
        <div class='card-musicTop'>
             <div class='card-musicTop-flipper'>
                <div class='card-musicTop-front'>
                   <div class='card-musicTop-front-img'>
                         <figure>
                            <img src="http://vagalume.com.br${data.pic_medium}" title="${data.desc}">
                        </figure>
                   </div>
                   <div class='card-musicTop-front-titulo'>
                        <h2>${data.toplyrics.item[i].desc}</h2>
                   </div>
                </div>
                 <div class='card-musicTop-back'>
                    <div class='card-music-img'>
                        <figure>
                          <img src="http://vagalume.com.br${data.pic_small}" title="${data.desc}">
                        </figure>
                        </div>
                        <div class='card-musicTop-dados'>
                            <ul class='card-musicTop-lista'>
                                <li>
                                     <h3>Title</h3>
                                     <h4>${data.toplyrics.item[i].desc}</h4>
                                 </li>
                                 <li>
                                    <h3>Url</h3>
                                    <h4><a href='https://www.vagalume.com.br/${data.toplyrics.item[i].url}'>Vagalume</a></h4>
                                 </li>
                        </ul>
                    </div>
                </div>
             </div>
          </div>
`;
    
    const $container = document.createElement('div');
    $container.innerHTML= cardMusicTop;
    const $card= document.getElementById('card');
    $card.appendChild($container); 
    
    
   }
         
    
   
};

let bdMusic =[
    {
        id: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        desc: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        url: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        pic_small: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        pic_medium: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        lyrics:{
            item:[
                {
                    desc: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
                    url: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
                }
            ]
        }
 
        
    }
];

let bdMusicTop =[
    {
        id: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        desc: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        url: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        pic_small: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        pic_medium: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        toplyrics:{
            item:[
                {
                    desc: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
                    url: "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
                }
            ]
        }
 
        
    }
];

const searchMusic= async (artista) => {
         
         artista = validArtist(artista);
         const url= `https://www.vagalume.com.br/${artista}/index.js`;
         const getApi= await fetch( url );
         const json = await getApi.json();
         bdMusic= await json.artist;
         clearResposta();
         showDataMusic( bdMusic );
    
};

const searchMusicTop= async (artista) => {
    
         artista = validArtist(artista);
         const url = `https://www.vagalume.com.br/${artista}/index.js`;
         const getApi= await fetch( url );
         const json = await getApi.json();
         bdMusicTop= await json.artist;
         clearResposta( );
         showDataMusicTop(bdMusicTop);
    
};

let bdAlbums = [
    {
        "id": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        "desc": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        "url": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        "pic_small": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        "pic_medium": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
        "pic_small": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        "pic_medium": "<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>", 
        "albums":
                {
                "item":[
                        {
                            "desc":"<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>",
                            "year":"<div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'><div class='spinner-triple'></div></div></div></div>"
                        }
                     ]
              }
    }
    
];

const showDataAlbums = async (data) => {
   
   for(var i =0 ; i < data.albums.item.length ; i++){
       
       
       
        const cardMusic =`
         <div class='card-album'>
             <div class='card-album-flipper'>
                <div class='card-album-front'>
                   <div class='card-album-front-img'>
                         <figure>
                            <img src="http://vagalume.com.br${data.pic_medium}" title="${data.desc}">
                        </figure>
                   </div>
                   <div class='card-album-front-titulo'>
                        <h2>${data.albums.item[i].desc}</h2>
                   </div>
                </div>
                 <div class='card-album-back'>
                    <div class='card-music-img'>
                        <figure>
                          <img src="http://vagalume.com.br${data.pic_small}" title="${data.desc}">
                        </figure>
                        </div>
                        <div class='card-album-dados'>
                            <ul class='card-album-lista'>
                                <li>
                                     <h3>Title</h3>
                                     <h4>${data.albums.item[i].desc}</h4>
                                 </li>
                                 <li>
                                    <h3>Ano</h3>
                                    <h4>${data.albums.item[i].year}</h4>
                                 </li>
                                 <li>
                                    <h3>Url</h3>
                                    <h4><a href='https://www.vagalume.com.br/${data.albums.item[i].url}'>Vagalume</a></h4>
                                 </li>
                        </ul>
                    </div>
                </div>
             </div>
          </div>
      
`;
    
    const $container = document.createElement('div');
    $container.innerHTML= cardMusic;
    const $card= document.getElementById('card');
    $card.appendChild($container);
    
    
   }
         
    
   
};

const searchAlbums = async (artista) => {
        
         artista = validArtist(artista);
         const url = `https://www.vagalume.com.br/${artista}/index.js`;
         const getApi= await fetch( url );
         const json = await getApi.json();
         bdAlbums= await json.artist;
         clearResposta();
         showDataAlbums( bdAlbums );
          
};

const exibirCardMusics= async () => {
    await  searchMusic(document.getElementById('music').value);
    
    document.getElementById('btnDados-artista').addEventListener('click',exibirCard);
    
    document.getElementById('btnMusicTop-artista').addEventListener('click',exibirCardMusicsTop);
    
    document.getElementById('btnAlbuns-artista').addEventListener('click', exibirCardAlbums); 
       
    
};

const exibirCardMusicsTop= async () => {
    
     await searchMusicTop(document.getElementById('music').value);
    
     document.getElementById('btnDados-artista').addEventListener('click',exibirCard);
    
     document.getElementById('btnMusic-artista').addEventListener('click',exibirCardMusics );
    
     document.getElementById('btnAlbuns-artista').addEventListener('click', exibirCardAlbums);
};

const exibirCardAlbums= async () => {
      await  searchAlbums(document.getElementById('music').value);
    
      document.getElementById('btnDados-artista').addEventListener('click',exibirCard);
    
      document.getElementById('btnMusic-artista').addEventListener('click',exibirCardMusics );
       
      document.getElementById('btnMusicTop-artista').addEventListener('click',exibirCardMusicsTop);
};

const exibirCard = async () => {    
          await search(document.getElementById('music').value);
    
          document.getElementById('btnMusic-artista').addEventListener('click',exibirCardMusics );
       
          document.getElementById('btnMusicTop-artista').addEventListener('click',exibirCardMusicsTop);
    
          document.getElementById('btnAlbuns-artista').addEventListener('click', exibirCardAlbums); 
         
};

const validInput = ( $el ) => {
    let aux=$el.value;
    aux = aux.replace(/[^A-Za-z0-9]/, '');
    $el.value=aux;
}


document.getElementById('botaoPesquisa').addEventListener('click',exibirCard);

document.getElementById('music').addEventListener('keyup',(e) => validInput( e.target ) );







