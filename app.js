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
      cell2.innerHTML = nextTime.substring(11,16);
      cell3.innerHTML = subTime.substring(11,16);
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

function getDateTimeNow() {
  var today = new Date();
  var date = today.getDate() + "/" +(today.getMonth() + 1) + "/" + today.getFullYear();
  if (today.getHours() < 10) {
    if (today.getMinutes() < 10) {
      var time = "0" + today.getHours() + ":0" + today.getMinutes();
    } else {
      var time = "0" + today.getHours() + ":" + today.getMinutes();
    }
  } else {
    if (today.getMinutes() < 10) {
      var time = today.getHours() + ":0" + today.getMinutes() + "pm";
    } else {
      var time = today.getHours() + ":" + today.getMinutes() + "pm";
    }
  }
  var now = date + " " + time;
  document.getElementById('dateTime').innerHTML = now;
}
