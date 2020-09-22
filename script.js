const jugEnt = [];

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDrop(event) {
  var s = event.target.id;
  var existe = 0;
  if (s.indexOf("en") >= 0){ 
    event.preventDefault(); 
    var data = event.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    for (var i = 0; i < jugEnt.length; i++){
      if (document.getElementById(data).id.concat(event.target.id) == jugEnt[i]){
        existe = 1;
      }
    }
    if (existe == 0){
      event.target.appendChild(nodeCopy);
      jugEnt.push(document.getElementById(data).id.concat(event.target.id));
      document.getElementById('errorAsignar').style.color = 'green';
      //document.getElementById('errorAsignar').innerHTML = nodeCopy.textContent.concat(' se asign&oacute; al entrenamiento.');
      document.getElementById('errorAsignar').innerHTML = 'Se asign&oacute; al entrenamiento.';
    }else{
      document.getElementById('errorAsignar').style.color = 'red';
      //document.getElementById('errorAsignar').innerHTML = nodeCopy.textContent.concat(' ya est&aacute; asignado al entrenamiento.');
      document.getElementById('errorAsignar').innerHTML = 'Ya est&aacute; asignado al entrenamiento.';

    }
  }
}

function onDragOver(event) {
  event.preventDefault(); 
}







