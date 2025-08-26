const hearts = document.querySelectorAll(".heart");
const heartCountElement = document.getElementById("heart-count");

let heartCount = 0;

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-regular")) {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
      heartCount++;
    } else {
      heart.classList.remove("fa-solid", "text-red-500");
      heart.classList.add("fa-regular");
      heartCount--;
    }

    heartCountElement.innerText = heartCount;
  });
}

const callButtons = document.querySelectorAll(".call-btn");
const coinElement = document.getElementById("coin-container");
let coins = parseInt(coinElement.innerText);
const callHistoryContainer = document.getElementById("call-history");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinElement.innerText = coins;

    const card = btn.closest(".service-card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".helpline-number").innerText;
    const serviceTitle = card.querySelector(".service-title").innerText;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const historyItem = document.createElement("div");

    historyItem.innerHTML = `
    
        <div class="flex justify-between items-center p-4 my-4 bg-[#FAFAFA] rounded-lg">
            <div>
                <h3 class="font-[Inter] font-semibold text-[#111111]">${serviceTitle}</h3>
                <p class="text-[#5C5C5C] text-[18px]">${serviceNumber}</p>
            </div>
            <p class="text-[18px] text-[#111111]">${new Date().toLocaleTimeString()}</p>
        </div>

    `;

    callHistoryContainer.appendChild(historyItem);
  });
}

const clearHistory = document.getElementById("clear-history-btn");
clearHistory.addEventListener("click", function () {
  callHistoryContainer.innerHTML = "";
});

const copyBtn = document.querySelectorAll(".copy-btn");

for (const btn of copyBtn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".service-card");

    const textToCopy = card.querySelector(".helpline-number").innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(`Copied to clipboard: ${textToCopy}`);

      const copyTextCounter = document.getElementById("copy-counter");
      let count = parseInt(copyTextCounter.innerText);
      count++;
      copyTextCounter.innerText = count;
    });
  });
}
