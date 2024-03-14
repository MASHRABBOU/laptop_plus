// let son = [1654415, 361564, 5486153, 956432054653021];

// function plus(son) {
// let plus = 0;
// for(let i = 0; i < son.length; i++){
//     plus += son[i];
    
// }
// return plus
// }
// console.log(plus(son));


const elBtn = document.querySelector(".btn-two")

elBtn.addEventListener("click", function(evt){
  evt.preventDefault()

  localStorage.removeItem("token")

  let getToken = localStorage.getItem("token")

  if(!getToken){
    window.location.replace("login.html")
  }
})

