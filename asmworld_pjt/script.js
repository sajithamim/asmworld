const statusMessage = document.getElementById("popup");

// Function to clear the status message after 100 seconds
function clearStatusMessage() {
  statusMessage.textContent = ""; // Clear the text content
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // fetch("https://formspree.io/f/xnqelrlg", {
    fetch("https://formspree.io/f/xleqavzz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log("resp", response);
        if (response.ok) {
          var popup = document.getElementById("popup");

          // Create and add the image element
          var image = document.createElement("img");
          image.src =
            "./img/asm/Checkmark-green-tick-isolated-on-transparent-background-PNG.png";
          image.alt = "";
          popup.appendChild(image);

          // Create and add the h2 element
          var heading = document.createElement("h2");
          heading.textContent = "Thank You!";
          popup.appendChild(heading);

          // Create and add the p element
          var paragraph = document.createElement("p");
          paragraph.textContent = "Your query has been sent successfully. We will contact you shortly.";
          popup.appendChild(paragraph);

          // Create and add the button element
          var button = document.createElement("button");
          button.type = "button";
          button.textContent = "OK";
          popup.appendChild(button);
          form.reset();
          setTimeout(clearStatusMessage, 3000);
        } else if (!response.ok) {
          document.getElementById("statusMessage").textContent =
            "Please ensure that all fields are correctly filled out";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("statusMessage").textContent =
          "An error occurred. Please try again later.";
      });
  });
