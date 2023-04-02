details = {
    "general": {
        "name":"Razvan-Dan Salsigan",
        "dob":"21.09.2000",
        "education":"Computer Science Bachelor's Degree at UBB",
        "place":"Cluj-Napoca"
    },
    "work":{
        "company":"Telenav",
        "time":"22 months",
        "from":"Jul 2021",
        "to":"Present"
    },
    "hobbies": [
        "Fishing",
        "Playing games",
        "Programming",
        "Traveling"
    ]
}

function setText() {
    try{
    const name = document.getElementById("name_text");
    const dob = document.getElementById("dob_text");
    const education = document.getElementById("education_text");
    const place = document.getElementById("place_text");
    name.innerHTML = details["general"]["name"];
    dob.innerHTML = details["general"]["dob"];
    education.innerHTML = details["general"]["education"];
    place.innerHTML = details["general"]["place"];
    } catch {}

    try{
    const company = document.getElementById("company_text");
    const time = document.getElementById("time_text");
    const from = document.getElementById("from_text");
    const to = document.getElementById("to_text");
    company.innerHTML = details["work"]["company"];
    time.innerHTML = details["work"]["time"];
    from.innerHTML = details["work"]["from"];
    to.innerHTML = " - "+details["work"]["to"];
    } catch {}

    try{
    const hobby_list = document.getElementById("hobby_list");
    const hobbies = details["hobbies"];
    hobbies.forEach(element => {
        var li = document.createElement('li');
        li.setAttribute('class','hobby_item');
        li.innerHTML = element;
        hobby_list.appendChild(li);
    });
    } catch {}
}

window.onload = setText;


function openinfo(){
    const el = document.getElementById("expand-contract")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
}
