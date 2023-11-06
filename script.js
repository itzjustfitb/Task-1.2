const data = [
  { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
  { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
  { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
  { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
  { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
  { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
  { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
  { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
  { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
  { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
  { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
  {
    name: "Ethereum Classic",
    ticker: "ETC",
    value: "12.5988",
    change: "4.09%",
  },
  { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
  { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
  { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
];

let tbody = document.querySelector("tbody");
let sort = document.querySelector("button");

function fillTable(arr) {
  tbody.innerHTML = "";
  arr.forEach((element) => {
    tbody.innerHTML += `
              <tr>
                <td>${element.name}</td>
                <td>${element.ticker}</td>
                <td>${element.value}</td>
                <td>${element.change}</td>
              </tr>
          `;
  });
}

fillTable(data);
let isSorted = true;

sort.addEventListener("click", () => {
  if (isSorted) {
    data.sort((a, b) => a.name.localeCompare(b.name));
    sort.firstElementChild.classList.add("ri-sort-asc");
    sort.firstElementChild.classList.remove("ri-sort-desc");
    isSorted = false;
  } else {
    sort.firstElementChild.classList.remove("ri-sort-asc");
    sort.firstElementChild.classList.add("ri-sort-desc");
    data.sort((a, b) => b.name.localeCompare(a.name));
    isSorted = true;
  }
  fillTable(data);
});
