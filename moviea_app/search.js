let showslider = [
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/5548/1625548-h-bea375721209',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/5463/1565463-h-f004b793e402',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3946/1603946-h-cc52690cf1c6'
];

function sideshow(){
    let i = 0;
    let crousel = document.getElementById("crousel");
    let img = document.createElement('img');
    img.src = showslider[0];
    img.id="img";
    crousel.append(img);
    setInterval(()=>{
        if(i == showslider.length){
           i = 0;
        }
        img.src = showslider[i];
        i = i+1;
    },2000);
 }
 sideshow();

async function SearchMovies(){
    let searchInput = document.getElementById("search").value;
    let response = await fetch(`http://www.omdbapi.com/?apikey=bf792903&s=${searchInput}`);
    let data = await response.json();
    appendMovies(data.Search);
    console.log(data.Search);
}

function appendMovies(data){
    let Movies = document.getElementById("Movies");
       Movies.innerHTML = "";
       let h1 = document.createElement("h1");
        h1.innerHTML = "Result";
        Movies.append(h1)
    data.forEach(element => {
        let div = document.createElement("div");
        div.id = "content"
        let img = document.createElement("img");
        img.src = element.Poster;
        img.id = "image";
        let h2 = document.createElement("h2");
        h2.innerHTML = `Title : ${element.Title}`
        h2.id= "title";
        let p = document.createElement("p");
        p.innerHTML = `Year : ${element.Year}`
        p.id= "year"
        div.append(img,h2,p);
        Movies.append(div)
    });
}