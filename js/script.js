var id = 'gallery';

function reqListener() {
  var renderer = new VerticalRenderer(id);
  var config = new Config(JSON.parse(this.responseText), configuration);
  renderer.render(config);
  lazyload();
}


window.onload = function () {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "config.json");
  oReq.send();

  let igElem = document.getElementById('instagram');
  if (igElem.href === 'https://www.instagram.com/') {
    document.querySelector('div.footer').remove();
  }
};
