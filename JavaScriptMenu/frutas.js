function getImgFruta() {
    var valorFruta = document.getElementById('selectFrutas').value;
    document.getElementById('imgContenedor').innerHTML = '<img src="images/'+ valorFruta +'.jpg">';
  }