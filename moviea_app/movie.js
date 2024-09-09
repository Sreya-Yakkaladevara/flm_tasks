const movies = [
    {
      name: "RRR",
      rating: 8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
    },
    {
      name: "Goodluck Jerry	",
      rating: 7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
    },
    {
      name: "MSD",
      rating: 8.5,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    },
    {
      name: "Doctor Strange",
      rating: 9,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    },
    {
      name: "Ford vs Ferrari",
      rating: 8.7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
    },
    {
      name: "Masaan",
      rating: 8.8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
    },
    {
      name: "The lion king",
      rating: 8.4,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    },
  ];
let showslider = [
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/5548/1625548-h-bea375721209',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/5463/1565463-h-f004b793e402',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3946/1603946-h-cc52690cf1c6'
]
 
 function sideshow(){
    let i = 0;
    let crousel = document.getElementById("crousel");
    let img = document.createElement('img');
    img.src = showslider[0];
    img.style.width = '100%'
    crousel.append(img);
    setInterval(()=>{
        if(i == showslider.length){
           i = 0;
        }
        img.src = showslider[i];
        i = i+1;

    },2000)

 }
 sideshow();

function movie(data){
    let div = document.getElementById("showmovies");
    data.forEach((ele)=>{
        let img = document.createElement("img");
        img.src=`${ele.img}`;
        img.className = "image";
        let h2 = document.createElement("h2");
        h2.innerHTML = `Name:${ele.name}`;
        h2.className = "title";
        let p = document.createElement("p");
        p.innerHTML = `Rating:${ele.rating}`;
        p.className = "rating";
        div.append(img,h2,p);

    })
    
}



let mypromise = new Promise(function(resolve,reject){
  setTimeout(() => {
    let data = movies;
    if(data != null){
      resolve(data);
    }
    else{
      reject("error");
    }
  }, 3000);
})
async function main(){
  try{
    let response =await mypromise;
    movie(response);
  }
  catch(error){
    console.log(error);
  }
}
main()