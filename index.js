  var foo = window.matchMedia("(max-width: 1100px)")
  foo.addListener(updatePartageToScreen)

  function updatePartageToScreen(x) {
    var bubble = document.getElementById('bubble-share');

    if (bubble != null) {
      bubble.remove();
    }

    if (window.innerWidth > 1100) {
      //petit ecran
      if (document.getElementById('mobileShare') != null) {
        document.getElementById('mobileShare').remove();
      }

      var container = document.getElementById('card_droit_bottom');

      container.style.padding = null;
      container.innerHTML = "<div class='personne'>" +
        "<img src='images/avatar-michelle.jpg' alt='img personne'>" +
        "<p>" +
        "<span>Michelle Appleton<br></span>" +
        "<span>28 Jun 2020</span>" +
        "</p>" +
        "</div>" +
        "<a class='partage' onclick='partage()'>" +
        "<img src='images/icon-share.svg' alt=''>" +
        "</a>";
    }
  }

  function partage() {
    var container = document.getElementById('card_droit_bottom');

    if (window.innerWidth < 1100) {
      //petit ecran
      if (document.getElementById('mobileShare') == null) {
        //ajouter le share
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        container.style.padding = "0%";
        container.innerHTML =
          "<div id='mobileShare' style='background:hsl(217, 19%, 35%); padding:4%;width:100%; display:flex; align-items:center; justify-content:space-between'>" +
          "<div style='height:35px; width:50%; display:flex; align-items:center; justify-content:space-around'>" +
          "<p style='margin-left: 50px; letter-spacing: 0.3em; color:hsl(212, 23%, 69%)'>SHARE</p>" +
          "<img style='margin-left:20px;' src='images/icon-facebook.svg' alt='facebook'>" +
          "<img style='margin-left:10px;'  src='images/icon-twitter.svg' alt='twitter'>" +
          "<img style='margin-left:10px;'  src='images/icon-pinterest.svg' alt='pinterest'>" +
          "</div>" +
          "<div onclick='partage()' style='height:35px; width:35px; background:hsl(212, 23%, 69%); border-radius:50%; display:flex; justify-content:center; align-items:center;'>" +
          "<img src='images/icon-share.svg' alt='facebook'>" +
          "</div>" +
          "</div>";
      }
      else {
          //supprimer le share
        container.style.padding = null;
        container.innerHTML = "<div class='personne'>" +
          "<img src='images/avatar-michelle.jpg' alt='img personne'>" +
          "<p>" +
          "<span>Michelle Appleton<br></span>" +
          "<span>28 Jun 2020</span>" +
          "</p>" +
          "</div>" +
          "<a class='partage' onclick='partage()'>" +
          "<img src='images/icon-share.svg' alt=''>" +
          "</a>";
      }

    } else {
      //grand ecran
      if (document.getElementById('bubble-share') == null) {
        //ajouter la bulle
        container.insertAdjacentHTML('afterbegin', "<div id='bubble-share' class='bubble-share'>" +
          "<p style='letter-spacing: 0.3em; color:hsl(212, 23%, 69%)'>SHARE</p>" +
          "<img style='margin-left:20px;' src='images/icon-facebook.svg' alt='facebook'>" +
          "<img style='margin-left:10px;'  src='images/icon-twitter.svg' alt='twitter'>" +
          "<img style='margin-left:10px;'  src='images/icon-pinterest.svg' alt='pinterest'>" +
          "<br/>" +
          "</div>")
      } else {
        //supprimer la bulle
        document.getElementById('bubble-share').remove();
      }

    }

  }
