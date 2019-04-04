// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.addEventListener("DOMContentLoaded", function(){
  const saveLincoln = document.querySelector("#save_lincoln")
  const hiddenMessage = document.querySelector("#hidden-message")

  saveLincoln.addEventListener("click", function(e) {
    fadeOutEffect()
    hiddenMessage.style.display = ""
  })
})

function fadeOutEffect() {
  var fadeTarget = document.querySelector("#foreground")
  const userInputTag = document.querySelector("#interval")
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.01;
      } else {
          clearInterval(fadeEffect);
      }
  }, userInputTag.value);
}
