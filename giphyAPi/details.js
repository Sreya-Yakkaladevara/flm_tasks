let api_key = "m9vTlJhI1ylPf4Jwy9vXyhRatitgCZqO";
async function details(){

    let id = JSON.parse(localStorage.getItem("details"));
    let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`);
    let result = await response.json();
    appendData(result.data);
    console.log(result.data);
}
function appendData(data){
    console.log(data)
    let div = document.getElementById("gif");
    
        let img = document.createElement("img");
        img.src = data.images.downsized.url;
        img.id="image";
        div.append(img) 
   
}
details();