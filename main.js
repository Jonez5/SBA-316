// Created element using DOM
 const paragraph = document.createElement("p")
 const desheader = document.getElementById("sweets")
 desheader.style.color = "red";
const foodClass = document.querySelectorAll(".food")
const newLi = document.createElement("li")
newLi.textContent = "Banana pudding";

const uList = document.querySelector("ul")
const listItems = document.querySelectorAll("li")
uList.appendChild(newLi)


function colorChange(event) {
    event.target.style.color = "purple"
}

function colorReset(event) {
    event.target.style.color = "aqua"
}

listItems.forEach((item) => {
    item.addEventListener("mouseover",colorChange);
});

listItems.forEach((item) => {
    item.addEventListener("mouseout",colorReset);
});


document.addEventListener("DOMContentLoaded", function () {
    const pollForm = document.getElementById("question");
    const yesCount = document.getElementById("yes-count");
    const noCount = document.getElementById("no-count");
    let yesVotes = 0;
    let noVotes = 0;
  
    pollForm.addEventListener("submit", function (e) {
  
        e.preventDefault();
        const formData = new FormData(pollForm);
        const userVote = formData.get("vote");
  
        if (userVote === "yes") {
            yesVotes++;
        } else if (userVote === "no") {
            noVotes++;
        }
        updateResults();
    });
  
    function updateResults() {
        yesCount.textContent = yesVotes;
        noCount.textContent = noVotes;
    }
    
  })