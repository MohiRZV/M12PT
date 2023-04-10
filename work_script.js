function openinfo(){
    const el = document.getElementById("expand-contract")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
}

const baseUrl = "http://localhost:5000"
document.addEventListener('DOMContentLoaded', function() {
    fetch(baseUrl+'/work')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        populateData(data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  function computeTime(from, to) {
    const years = to.getFullYear() - from.getFullYear() - 1;
    var months = to.getMonth() - from.getMonth();
    if (months < 0) {
        months = 12 + months;
    }
    if (years > 0 ) {
        return years + " Years and "+months+" Months ";
    }
    else {
        return months+"Months ";
    }
  }

  function populateData(data) {
    const company = document.getElementById("company_text");
    const time = document.getElementById("time_text");
    const from = document.getElementById("from_text");
    const to = document.getElementById("to_text");
    company.innerHTML = data[0]["workplace"];
    const dateFrom = new Date(data[0]["started"]);
    const formattedDateFrom = dateFrom.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const current = Boolean(data[0]["current_p"]);
    var dateTo = new Date(data[0]["ended"]);
    if (current) {
        dateTo = new Date();
    }
    
    const formattedDateTo = dateTo.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    console.log(computeTime(dateFrom, dateTo));
    time.innerHTML = " for "+computeTime(dateFrom, dateTo);
    from.innerHTML = " since "+formattedDateFrom;
    if (current) {
        to.innerHTML = " to Present";
    } else {
        to.innerHTML = " to "+formattedDateTo;
    }
  }