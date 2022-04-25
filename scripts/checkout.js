// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let data=JSON.parse(localStorage.getItem("movie"))
data.forEach(function(el){
    let div=document.createElement("div");
    let title=document.createElement("p")
        title.innerText=el.Title;
        let year=document.createElement("p");
        year.innerText=el.Year;
        let id=document.createElement("p")
        id.innerText=el.imdbID;
        let img=document.createElement("img");
        img.src=el.Poster;
        div.append(title,year,id,img);
        document.getElementById("movieDetail");
        movieDetail.append(div);
})