<!DOCTYPE html>
<html>
  <head>
    <title>Coding Basics</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        font-family: sans-serif;
        margin-left: 30px;
        margin-right: 30px;
      }

      #header {
        text-align: center;
      }

      #container {
        background-color: rgb(192, 227, 255);
        margin: 40px auto;
        max-width: 800px;
        padding: 38px 31px;
      }

      input {
        font-size: 21px;
        line-height: 33px;
        margin: 0 0 23px 0;
        padding: 0 9px;
        width: 100%;
      }

      button {
        font-size: 21px;
        line-height: 33px;
        margin: 0 0 23px 0;
        padding: 0 6px;
      }

      #output-div {
        background-color: lightgrey;
        margin: 20px auto;
        padding: 20px;
        width: 100%;
      }
    </style>
  </head>

  <body>
    <h1 id="header">Beat That! ⚔️ The showdown</h1>
    <div id="container">
      <p id="p1">Input:</p>
      <input id="input-field" />
      <br />
      <button id="submit-button">Submit</button>
      <p>Output:</p>
      <div id="output-div"></div>
    </div>
    <!-- Import program logic -->
    <script src="script.js"></script>
    <!-- Define button click functionality -->
    <script>
      document.getElementById("p1").innerHTML =
        "Please enter the number of dice rolls! <br> Please note that you can type restart at any time to restart the game.";
      var button = document.querySelector("#submit-button");
      button.addEventListener("click", function () {
        // Set result to input value
        var input = document.querySelector("#input-field");
        var result = main(input.value);

        // Display result in output element
        var output = document.querySelector("#output-div");
        output.innerHTML = result;

        // Reset input value
        input.value = "";
      });
    </script>
  </body>
</html>
