
// Nav Bar aREA

let getOpen = document.getElementById("open")
let getClose = document.getElementById("close")

getOpen.addEventListener("click", showNav)
getClose.addEventListener("click", closeNav)

function showNav(){
  let getNav = document.getElementById("nav")
  getNav.style.display="block"
  getOpen.style.display="none"
  getClose.style.display="block"
}

function closeNav(){
  let getNav = document.getElementById("nav")
  getNav.style.display="none"
  getOpen.style.display="block"
  getClose.style.display="none"
}





// subscribe area
     
var getSub = document.getElementsByName("sub")[0];
getSub.addEventListener("click", subb)

function subb(){
 var subButt = document.getElementsByName("sub-text")[0];

 if(subButt.value.length < 3){
   alert("Warning: Wrong Information...")
 }

}


// CONTACT US


   var getRegister = document.getElementsByName("text")[0];
  getRegister.addEventListener("click", submit)

  function submit(){
    var getCon = document.getElementsByName("con")[0];

    if(getCon.value.length < 3)
    alert("Warning: Wrong Information Provided.")
  }


