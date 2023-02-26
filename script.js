let totalScoreEl = document.createElement("p");
totalScoreEl.setAttribute("class", "total_score");
let totalPlaceEl = document.querySelector(".your_result_score");

let summaryContainerEl = document.createElement("div");
let summaryPlaceEl = document.querySelector(".summary h2");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // -------- Total Avarage Score ---------
    let sumScore = 0;
    let avgScore = 0;
    data.forEach((element) => {
      sumScore += element.score;
    });
    avgScore = Math.round(sumScore / data.length);

    totalScoreEl.innerHTML = `${avgScore}<span class="max_score"> of 100</span>`;
    totalPlaceEl.insertAdjacentElement("afterbegin", totalScoreEl);

    // -------- Summary Score ---------
    data.forEach((element) => {
      summaryContainerEl.innerHTML += `<div class="sum_section ${element.category.toLowerCase()}">
    <div class="sum_section_title">
      <img
        src="${element.icon}"
        alt=""
        aria-hidden="true"
      />
      <p>${element.category}</p>
    </div>
    <p class="sum_section_score">
      ${element.score} <span class="max_score">/ 100</span>
    </p>
  </div>`;

      summaryPlaceEl.insertAdjacentElement("afterend", summaryContainerEl);
    });
  });
