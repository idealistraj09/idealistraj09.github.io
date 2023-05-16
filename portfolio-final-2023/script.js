var tabLinks = document.getElementsByClassName('tab-links');
var tabContant = document.getElementsByClassName('tab-contant');

function openTab(tn) {
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  for (var j = 0; j < tabContant.length; j++) {
    tabContant[j].classList.remove("active");
  }

  event.currentTarget.classList.add("active");
  document.getElementById(tn).classList.add("active");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu(){

  sidemeu.style.right = "-10px";
}
function closemenu(){

  sidemeu.style.right = "-220px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzfKIIh-OqF1RgORNmtMrufckOJtMjkxKBAJ-LrahPeXJCu46UxUMzY-QcymHnQLYK1Fw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg1')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function() {
          msg.innerHTML = ""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })


  
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".layer").forEach(move => {
        var moving_value = move.getAttribute("data-speed");
        var x = e.pageX * moving_value/50;
        var y = e.pageY * moving_value/50;
        console.log(x,y)
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

setInterval(function(){
  var title = document.title;
  document.title = (title == "hey...🤗" ? "Idealistraj-Portfolio 💓" : "hey...🤗");
}, 2000);