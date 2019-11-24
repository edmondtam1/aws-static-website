function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');

  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(JSON.stringify(getNames(array[i]))));

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

function getNames(obj) {
  return obj.name.first + ' ' + obj.name.last;
}

const Http = new XMLHttpRequest();
const url = "http://127.0.0.1:5500/aws_exercise/assets/data.json";

Http.open("GET", url);
Http.send();

var json;

Http.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    json = JSON.parse(Http.responseText);
    console.log(json);
    document.getElementById('data').appendChild(makeUL(json));
  }
}