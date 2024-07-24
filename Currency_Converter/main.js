
console.log("main");

const populate = async (value, baseCurrency, targetCurrency) => {
    let myStr = "";
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_uzxGFFZkavuU1fa7gMYk8hQjcbySfeqKnK8lRZNd&base_currency=${baseCurrency}`;
    const response = await fetch(url);
    const rJson = await response.json();
    document.querySelector(".output").style.display = "block";

    console.log(baseCurrency);

    for (let key of Object.keys(rJson["data"])) {
        if (key === targetCurrency) {
            myStr += `<tr>
                          <td>${key}</td>
                          <td>${rJson["data"][key]["code"]}</td>
                          <td>${(rJson["data"][key]["value"] * value).toFixed(3)}</td>
                       </tr>`;
        }
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const baseCurrency = document.querySelector("#base-currency").value;
    const targetCurrency = document.querySelector("#target-currency").value;
    populate(value, baseCurrency, targetCurrency);
});