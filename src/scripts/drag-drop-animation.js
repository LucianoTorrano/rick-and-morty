window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".btn-container");
  const characterList = document.getElementById("characterList");
  let rickCard = document.getElementById("RickSanchez");
  let meeseeksCard = document.getElementById("Mr.Meeseeks");
  let pickleCard = document.getElementById("PickleRick");

  characterList.onload = () => {
    rickCard = document.getElementById("RickSanchez");
    meeseeksCard = document.getElementById("Mr.Meeseeks");
    pickleCard = document.getElementById("PickleRick");
  };
  console.log(rickCard);
  console.log(meeseeksCard);
  console.log(pickleCard);

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      setTimeout(() => {
        rickCard = document.getElementById("RickSanchez");
        meeseeksCard = document.getElementById("Mr.Meeseeks");
        pickleCard = document.getElementById("PickleRick");
        console.log(rickCard);
        console.log(meeseeksCard);
        console.log(pickleCard);  
      }, 100);
    })
  );
});

/* 
  window.addEventListener('load',()=>{
  const animationList = document.querySelectorAll(".tools-list_item");
  const rickCard = document.getElementById("RickSanchez")
  const meeseeksCard = document.getElementById("Mr.Meeseeks")
  const pickleCard = document.getElementById("PickleRick")

  console.log(rickCard)
  console.log(meeseeksCard)
  console.log(pickleCard)

  animationList.forEach((animation) =>
    animation.addEventListener("drag", () => {
      if (animation.id === "PortalGun") {
        console.log('Portal Gun')
      } else if (animation.id === "MeeseeksBox") {
         console.log('Meeseks')
      } else if (animation.id === "Pickle"){
        console.log('pickle')
      } else if (animation.id === "Flask") {
      console.log('flask')
      }
    })
  );
});
*/
