function openinfo(){
    const el = document.getElementById("expand-contract")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
}

const baseUrl = "http://localhost:3000"
document.addEventListener('DOMContentLoaded', function() {
    fetch(baseUrl+'/hobbies')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        populateData(data);
      })
      .catch(error => {
        console.log(error);
      });
  });

function populateData(data) {
    const hobby_list = document.getElementById("hobby_list");
    const hobbies = data;
    hobbies.forEach(element => {
        var li = document.createElement('li');
        li.setAttribute('class','hobby_item');
        li.innerHTML = element["name"];
        hobby_list.appendChild(li);
    });
}
  