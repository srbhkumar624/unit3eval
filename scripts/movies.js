// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let arr=[];
let sa;
async function showMovie(){
    
    try{
    const query=document.getElementById("search").value;
    let res=await fetch (`http://www.omdbapi.com/?apikey=79e69d26&s=${query}}`);
    let data=await res.json();
    let movie=data.Search;
    // appendMovie(movie);
    return movie;
    console.log("data:",data);
    }
    catch(err){
        console.log("error:",err);
    }
}
function appendMovie(data){
    if(data==undefined){
        return false;
    }
    movies.innerHTML=null;
    data.map(function(el){
        let title=document.createElement("p")
        title.innerText=el.Title;
        let year=document.createElement("p");
        year.innerText=el.Year;
        let id=document.createElement("p")
        id.innerText=el.imdbID;
        let img=document.createElement("img");
        img.src=el.Poster;
        let button=document.createElement("button")
        button.innerText="book now";
        button.setAttribute("name","button")
        button.addEventListener("click",function(){
            addMovie(el)
        })

        movies.append(title,year,id,img,button);


    })

}
function addMovie(el){
    arr.push(el);

    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html";
}


async function main(){
    let data=await showMovie();
    appendMovie(data);

}
function debounce(main,delay){
    if(sa){
        clearTimeout(sa)
    }
    sa=setTimeout(function(){
        main()
    },delay)
}
