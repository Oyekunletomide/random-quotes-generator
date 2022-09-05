const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'e2d961c576msh49bcb9b106951cfp1eca56jsn2c6518945c0e',
'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
}
};

document.getElementById("button").addEventListener("click", function(){
  fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
.then(response => response.json())
.then(data => {
  document.getElementById("quotes").textContent = data.content
  document.body.classList.add("fun")
  })
})
