function openinfo(){
    const el = document.getElementById("expand-contract")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
}

const baseUrl = "http://localhost:3000"
document.addEventListener('DOMContentLoaded', function() {
    fetch(baseUrl+'/general-info')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        populateData(data)
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  function populateData(data) {
    const name = document.getElementById("name_text");
    const dob = document.getElementById("dob_text");
    const education = document.getElementById("education_text");
    const place = document.getElementById("place_text");
    name.innerHTML = data[0]["p_name"];
    const date = new Date(data[0]["dob"]);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    dob.innerHTML = formattedDate;
    education.innerHTML = data[0]["education"];
    place.innerHTML = data[0]["place"];
  }