// document.getElementById('btn-1').addEventListener('click',function(e){
//     e.preventDefault();
//     const getPrice=document.getElementById('price-1').innerText;
//     const getTitle=document.getElementById('title-1')
//     .innerText;
//     const totalPrice=document.getElementById('totalPrice').innerText;
//     const currentPrice=parseFloat(getPrice)+parseFloat(totalPrice.split(' ')[2]);
//     document.getElementById('totalPrice').innerText=`Total price: ${currentPrice}Tk`;
//     const cartContainer=document.getElementById('cart-container');
//     const newCart=document.createElement('div');
//     newCart.innerHTML=`
//         <div id="carts" class=" cart-add-class w-[354px] h-[134px] p-4 flex justify-between">
//       <div>
//         <img class="w-[96px] h-[114px] p-2" src="assets/kitchen-1.png" alt="">
//       </div>
//       <div class="w-[162px] h-[64px] p-6 text-center text-[16px] mt-[20px]">
//         <h3 class=""> K. Accessories</h3>
//         <h3> Price: 39.00 TK</h3>
//       </div>

//      </div>
//     `;
//     cartContainer.appendChild(newCart);
// })
const allBtn = document.getElementsByClassName("btn-event");
for (let btn of allBtn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const cartImg = btn.parentNode.children[1].children[0].src;
    const cartTitle = btn.parentNode.children[0].innerText;
    const cartPrice = btn.parentNode.children[3].innerText;
    const totalPrice = document.getElementById("totalPrice").innerText;
    const currentPrice =
      parseFloat(cartPrice) + parseFloat(totalPrice.split(" ")[2]);
    document.getElementById(
      "totalPrice"
    ).innerText = `Total price: ${currentPrice}Tk`;
    const cartContainer = document.getElementById("cart-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
        <div
        id="carts"
        class="cart-add-class w-full max-w-md p-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 border rounded-lg shadow-sm bg-base-100"
        >
        <!-- Image -->
        <div class="flex-shrink-0">
        <img
        class="w-24 h-28 object-cover rounded-md"
        src="${cartImg}"
        alt="Product"
        />
       </div>

    <!-- Text -->
  <div class="text-center sm:text-left flex-1">
    <h3 class="font-semibold text-base">${cartTitle}</h3>
    <h3 class="text-gray-600">Price: ${cartPrice} TK</h3>
  </div>
</div>

`;
    cartContainer.appendChild(newCart);
  });
}
