$(document).ready(function(){
  const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  let exchange = [];
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      exchange = data.filter(elm => elm.base_ccy === "UAH");
    });
  $('#currencySelect').change(function () {
    const {buy, sale} = exchange.find(elm => elm.ccy === $(this).val());
    $('#buy_result').text(buy);
    $('#sale_result').text(sale);
  })
})
