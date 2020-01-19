
const displayNewContainer = document.querySelector('.article');
const fetchButon = document.getElementById('fetchbtn');
const techcheckBox = document.getElementById('tech-news');

techcheckBox.addEventListener('change', () => {
    // fetchButon.removeEventListener('click', fetchData);
    (techcheckBox.checked) ? fetchButon.addEventListener('click', fetchData):fetchButon.removeEventListener('click', fetchData);
});


function fetchData() {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onload = function() {
    if(this.readyState == 4 && this.status == 200) {
      var theDataFetched = JSON.parse(this.responseText);
      template(theDataFetched);
    }else {
        alert('connection error')
    }
    }    
    xmlhttp.open('GET','https://smallville1998.github.io/json-data-for-ajax/football-news.json' ,true);
    xmlhttp.send();
  }


function template(ourData) {
  displayNewContainer.innerHTML = ``;
  for(var i = 0; i < ourData.length; i++) {
    displayNewContainer.innerHTML += `
    <div class="item-box">
    <img src=${ourData[i].img1} alt="">
     <div class="item-box-text">
        <h4>${ourData[i].heading}</h4>
          <p>${ourData[i].news}</p>
     </div>
    </div>`;
  }
};


































