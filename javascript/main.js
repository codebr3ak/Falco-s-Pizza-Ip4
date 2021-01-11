let price;
let crust_price;
let topping_price;
let total = 0

function GetPizza(name, size, crust, topping,total){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
};

$(document).ready(function(){
    $(button.checkout).click(function(event){
        let pizzaName = $("#name option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        let pizzaTopping = [];
    })
}

.each($("input[name='toppings']:checked"),function(){
    pizzaTopping.push($(this).val());
  })


  switch(pizzaSize){
    case "0":
      price= 0;
      break;
    case 'large':
      price = 1200;
      break;
    case "medium":
      price = 800;
      break;
      case "regular":
      price = 600;
      break;
      break;
    case "small":
      price = 300;
    default:
      console.log("error");
  }
  switch(pizzaCrust){
    case "0":
      c_price = 0;
      break;
    case "thin":
      c_price = 100;
      break;
    case "thick":
      c_price = 150;
      break;
    case "flatbread":
      c_price = 200;
      break;
    case "custom":
      c_price = 250;
    default:
      console.log("error");
  }

  let topping_value = pizzaTopping.length * 100;

  if((pizzaSize == "0") && (pizzaCrust == "0")){
    $("button.checkout").show();
    $("#summary").show();
    $("div.choice").hide();
    alert("Please select Pizza size and crust");
  }

  else {
    $("button.checkout").hide();
    $("#summary").hide();
    $("div.choice").slideDown(1200);
  }

  total = price + c_price + topping_value;
  let checkoutTotal = 0;
  checkoutTotal = checkoutTotal + total;



// Delivery 
$(".deliver").click(function () {
    $('.feedback').slideUp();
    $('#list').slideUp();
    $('.feedback').text("Provide location details").slideDown();
    $('.deliver').hide(1000);
    $('.delivernot').hide(1000);
    $('.cdata-overlay').slideDown();
});

//Pick Up
$(".delivernot").click(function () {

});