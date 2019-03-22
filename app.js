function requestApi() {
  var urlBase = "https://arrivelah.busrouter.sg/?id=";
  var url = urlBase + document.getElementsByName('stopNumber')[0].value;
  fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    var table = document.getElementById('results');
    for (var i = 0; i < data.services.length; i++) {
      var service = data.services[i].no;
      var nextTime = data.services[i].next.time;
      var subTime = data.services[i].subsequent.time;
      var row = table.insertRow(i+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = service;
      cell2.innerHTML = nextTime;
      cell3.innerHTML = subTime;
    }
  })
  .catch(error => console.error(error))
}

function deleteRows() {
  var table = document.getElementById('results');
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
