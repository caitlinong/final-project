document.getElementById("title").addEventListener("mouseover", function () {
  document.getElementById("title").style.fontSize = "120%";
});

document.getElementById("title").addEventListener("mouseout", function () {
  document.getElementById("title").style.fontSize = "initial";
});

let response = $.ajax("https://api.adviceslip.com/advice");
console.log(response);

$.ajax("https://api.adviceslip.com/advice", {
  success: function (APIResponse) {
    let myDiv = document.createElement("div");

    // Creating a paragraph element and adding the innerHTML
    let adviceTag = document.createElement("p");
    adviceTag.innerHTML = APIResponse;

    // Appending the paragraph tags to the created div element
    myDiv.appendChild(adviceTag);

    document.body.appendChild(myDiv);
  },
});
