document.addEventListener("DOMContentLoaded", function () {
  const changeMyColoors = document.querySelectorAll(".color-changer");

  changeMyColoors.forEach(function (changeMyColor) {
    changeMyColor.addEventListener("click", function changerBtnColors() {
      changeMyColor.style.backgroundColor = "#1DD100";
      changeMyColor.style.color = "#ffffff";
      changeMyColor.removeEventListener("click", changerBtnColors);
    });
  });

  // Availability Decrease by 1 if I press in a btn
  // And Disable the btn when I click on 4 bton
  const availabilityCountElement = document.getElementById("availability-count");
  let availabilityCount = 16;
  let clickedButtonCount = 0;

  availabilityCountElement.textContent = availabilityCount;

  const buttons = document.querySelectorAll(".color-changer");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      clickedButtonCount++;

      availabilityCount--;

      availabilityCountElement.textContent = availabilityCount;

      if (clickedButtonCount === 4) {
        buttons.forEach(function (btn) {
          if (!btn.disabled) {
            btn.disabled = true;
          }
        });
      }

      // If I clicked on 4 buttons the rest of buttons are disabled
      button.disabled = true;


    });
  });
});