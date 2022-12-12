fetch("http://localhost:3000/films")
.then(resp => resp.json())
.then(data => {

 // let allMovies = data
  //console.log(data);
  const firstFilm = data.find((object) => object.id == 1)
  //console.log(firstFilm);
  
  const posterDiv = document.getElementById("moviePoster")
  let imageElement = document.createElement("img")

  imageElement.src = firstFilm.poster;
  imageElement.alt = "Poster image"
  imageElement.width = "300"
  imageElement.height ="450";
  posterDiv.appendChild(imageElement)

  //display title of first film
  const titleAndRunTime = document.createElement("titleAndRunTime")
  let ParaTitle = document.createElement("p")
  let paraRuntime = document.createElement("p")

  ParaTitle.innerText = firstFilm.titleAndRunTime
  paraRuntime.innerText = `${firstFilm.runtime} minutes`
  titleAndRunTime.appendChild(paraRuntime)
  titleAndRunTime.appendChild(ParaTitle)

  const moreDetails = document.getElementById("moreDetails")
  let paraDescription = document.createElement("p")
  let showtimebtn = document.createElement("button")

  let remTickets = firstFilm.capacity - firstFilm.tickets_sold
  let spanElement = document.createElement("span")
  let ticketBtn = document.createElement("button")
  let breakElement = document.createElement("br")



  showtimebtn.innerText = firstFilm.showtime
  paraDescription.innerText = firstFilm.paraDescription
  spanElement.innerText = `${remTickets} remaining tickets`
  ticketBtn.innerText = "Buy Ticket"





  moreDetails.appendChild(showtimebtn)
  moreDetails.appendChild(paraDescription)
  moreDetails.appendChild(ticketBtn)
  moreDetails.appendChild(spanElement)
  moreDetails.appendChild(breakElement)

  ticketBtn.addEventListener("click", () =>{
  // alert("I am Clicked")
  if (remTickets === 1) {
    //alert("No more tickets")
    ticketBtn.innerText = "SOLD OUT"
    spanElement.innerText = ""
  } else {
    --remTickets;
    //console.log(remTickets)
    spanElement.innerText = `${remTickets} remaining tickets`
  }
})
});


function getFilms() {
  fetch("http://localhost:3000/films")
  .then (resp => resp.json())
  .then (renderFilms)
}

getFilms()

function renderFilms(films) {
  films.forEach(filmDetails);
}

function filmDetails(details) {
  const titlesElement = document.getElementById("titles")

  let listElements = document.createElement("li")
  listElements.innerText = details.titleAndRunTime
  titlesElement.appendChild(listElements)
}