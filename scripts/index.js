
function addAmount(){
  let amount=  document.getElementById("amount").value;
  localStorage.setItem("amount",JSON.stringify(amount));
}
