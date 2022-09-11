// ENLARGE TEXT ON HOVER

document.getElementById("title").addEventListener("mouseover", function () {
  document.getElementById("title").style.fontSize = "120%";
});

document.getElementById("title").addEventListener("mouseout", function () {
  document.getElementById("title").style.fontSize = "initial";
});

// ADVICE SLIP (not working)

let response = $.ajax("https://api.adviceslip.com/advice");
console.log(response);

$.ajax("https://api.adviceslip.com/advice", {
  success: function (APIResponse) {
    console.log(APIResponse);

    let adviceTag = document.createElement("p");

    adviceTag.innerHTML = APIResponse;

    document.getElementById("advice").appendChild(adviceTag);
  },
});
