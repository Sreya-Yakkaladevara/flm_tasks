const api_key = "m9vTlJhI1ylPf4Jwy9vXyhRatitgCZqO";
async function main(){
    let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`);
    let result = await response.json();
    appendData(result.data);
    console.log(result.data);
}
main()
function appendData(data){
    let div_data = document.getElementById("data");
    div_data.innerHTML=""
    data.forEach(element => {
        // console.log(element.images.downsized.url)
        let div = document.createElement("div");
        div.id= "container"
        let img = document.createElement("img");
        img.src = element.images.downsized.url;
        img.id = "image";
        // let h2 = document.createElement("h2");
        // h2.innerHTML = `Title : ${element.title}`;
        img.addEventListener("click",()=>{details_gif(element.id)});
        div.append(img);
        div_data.append(div);
    });
    function details_gif(id){
        localStorage.setItem("details",JSON.stringify(id));
        window.location.href = "details.html"
    }
}
async function gif(){
   let query = document.getElementById("search").value;
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}`);
    let result = await response.json();
    appendData(result.data);
    console.log(result.data);
}
async function sticker(){
    let query = document.getElementById("search").value;
     let response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${api_key}&q=${query}`);
     let result = await response.json();
     appendData(result.data);
     console.log(result.data);
 }