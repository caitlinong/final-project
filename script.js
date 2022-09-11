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
    let adviceTag = document.createElement("p");

    adviceTag.innerHTML = APIResponse;

    document.getElementById("advice").appendChild(adviceTag);
  },
});
