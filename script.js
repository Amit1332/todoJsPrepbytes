
let container = document.querySelector(".container")
let gobacknav =document.querySelector(".gobacknav")
let singleCardTrip = document.querySelector("#singleCardTrip")
let addNewItems = document.querySelector(".add_new_items")
let blurPage = document.getElementsByClassName("blur-page")
let noitems  =document.getElementById('noitems')
let findcrationpopup =document.querySelector(".findcrationpopup")
let findcrationpopuph1 =document.querySelector(".findcrationpopup h1")

//  Add Card Popup
var flag =0
function addNewTaskPopup(){

if(flag===0){
   addNewItems.style.display = "flex"
   blurPage[0].style.display="block"
   flag=1
}
else{
   addNewItems.style.display = "none"
   flag=0

}


}
////////////////////////////////////


// close add card popup
noitems.innerHTML= 'No Items In the List'

function closeTask(){
   addNewItems.style.display = "none"
   blurPage[0].style.display="none"

flag=0


}
/////////////////////////////

let cards = document.querySelector(".cards")
let cardTitle = document.getElementById("cardTitle")
var id=0

// card creation
function addTripCard(){
   findcrationpopup.setAttribute("id","creationpopup")
   if(cardTitle.value==''){
   findcrationpopup.style.backgroundColor = 'rgb(210, 149, 8)'
   findcrationpopuph1.innerHTML= 'Please enter Place'

      setTimeout(() => {
   findcrationpopuph1.innerHTML= ''

      findcrationpopup.removeAttribute("id")
       
      }, 1000);
   }
   else{
      id++
   // create Element for card
   let card = document.createElement("div")
   let h2Text = document.createElement("h2")
   let hrline = document.createElement("hr")
   let cardItems = document.createElement("div")

   let operation = document.createElement("div")
   let deleteTask = document.createElement("div")
   let delicon = document.createElement("i")
   let addItem = document.createElement("div")
   let addicon = document.createElement("i")

   //  set card Element Attribute 
deleteTask.setAttribute("id",`deltId${id}`)
card.setAttribute("id",`cardId${id}`)
card.setAttribute("class","card")
h2Text.setAttribute("style","padding:12px 0px; text-align: center; color:rgb(169, 71, 214); font-weight: 400;")
h2Text.innerText=cardTitle.value
cardItems.setAttribute("class", "card-items")
cardItems.setAttribute("class", "card-items")
operation.setAttribute("class", "operation")
deleteTask.setAttribute("class", "delete")
delicon.setAttribute("class","ri-delete-bin-line")
addItem.setAttribute("class","add-items")
addicon.setAttribute('class',"ri-add-line")


cards.appendChild(card)
card.appendChild(h2Text)
card.appendChild(hrline)
card.appendChild(cardItems)
card.appendChild(operation)
operation.appendChild(deleteTask)
deleteTask.appendChild(delicon)
operation.appendChild(addItem)
addItem.appendChild(addicon)
cardTitle.value = ''
noitems.innerHTML= ''
closeTask()

findcrationpopup.style.backgroundColor = 'rgb(8, 210, 62)'
   findcrationpopuph1.innerHTML= 'Success - Card Created Successfully'

      setTimeout(() => {
      findcrationpopuph1.innerHTML= ''

      findcrationpopup.removeAttribute("id")
       
      }, 1000);
// delete card 
// deleteTask.addEventListener('click', function(){
//    console.log("deleted")
//    card.remove()
//    blurPage[1].style.display="none"

//  closeTask()
//  findcrationpopup.setAttribute("id","creationpopup")

//  findcrationpopup.style.backgroundColor = 'rgb(255, 91, 123)'
//    findcrationpopuph1.innerHTML= 'Card Deleted Successfully'

//       setTimeout(() => {
//       findcrationpopuph1.innerHTML= ''

//       findcrationpopup.removeAttribute("id")
       
//       }, 1000);
// })


addItem.addEventListener('click', function(){
   let add_new_items_in_card =document.createElement("div")
   let h2AddIt = document.createElement("h2")
   let inputIt = document.createElement("input")
   let add_close_button_in_card = document.createElement("div")
   let add_in_card = document.createElement("div")
   let close_in_card = document.createElement("div")
   
   
   
   // set class id attribute inside popup to show item inside card
   add_new_items_in_card.setAttribute("class","add_new_items_in_card")
   h2AddIt.innerText ="Add New Item"
   inputIt.setAttribute("id","carditems")
   inputIt.setAttribute("type","text")
   add_close_button_in_card.setAttribute("class", "add_close_button_in_card")
   add_in_card.setAttribute("class", "add_in_card")
   add_in_card.setAttribute("style", "cursor: pointer")
   add_in_card.innerText="Add"
   close_in_card.setAttribute("class", "close_in_card")
   close_in_card.setAttribute("style", "cursor: pointer")
   close_in_card.innerText="Close"
     
   
   
   container.appendChild(add_new_items_in_card)
   add_new_items_in_card.appendChild(h2AddIt)
   add_new_items_in_card.appendChild(inputIt)
   add_new_items_in_card.appendChild(add_close_button_in_card)
   add_close_button_in_card.appendChild(add_in_card)
   add_close_button_in_card.appendChild(close_in_card)
   blurPage[0].style.display="block"
   
   // onclick add crate mark item inside card
   add_in_card.addEventListener('click',function(){
      if(inputIt.value==''){
         findcrationpopup.setAttribute("id","creationpopup")

          findcrationpopup.style.backgroundColor = 'rgb(210, 149, 8)'
        findcrationpopuph1.innerHTML= 'please enter some text'

      setTimeout(() => {
      findcrationpopuph1.innerHTML= ''

      findcrationpopup.removeAttribute("id")
       
      }, 1000);
      }
      else{
         let item = document.createElement("div")
      item.setAttribute("class","item")
      cardItems.appendChild(item)
      let h3Text = document.createElement("h3")
      let mark = document.createElement("div")
      mark.setAttribute("class","mark")
   mark.innerText = "mark done"
   item.appendChild(h3Text)
   item.appendChild(mark)
      h3Text.innerText=inputIt.value
     add_new_items_in_card.style.display="none"
      blurPage[0].style.display="none"
   // onclick mark done  mark as read
      mark.addEventListener('click',function(){
         h3Text.style.textDecoration="line-through"
         h3Text.style.color="orangered"
         item.removeChild(mark)
         item.setAttribute("style", "display:flex;align-items:center; justify-content:center;")
   
      })
   
      inputIt.value =''

      findcrationpopup.setAttribute("id","creationpopup")

      findcrationpopup.style.backgroundColor = 'rgb(15, 190, 9) '
    findcrationpopuph1.innerHTML= 'Task Created Successfully'

  setTimeout(() => {
  findcrationpopuph1.innerHTML= ''

  findcrationpopup.removeAttribute("id")
   
  }, 1000);
      }

      
   })
   
   // onclick close inside card item add popup
   close_in_card.addEventListener('click', function(){
      container.removeChild(add_new_items_in_card) 
   blurPage[0].style.display="none"
      
         })
   
   })



//add items inside card to show popup
let gobacknav = document.createElement("div")
  let backbutton = document.createElement("div")
  let backicon = document.createElement("i")
  let backH1Text = document.createElement("h1")
  let cardHeadingText = document.createElement("div")
  let cardHeadingH1Text = document.createElement("h1")
  let addItemForNewCard =document.createElement('div')
  let addItemForNewCardicon =document.createElement('i')
  
  
  // set attribute
  
  gobacknav.setAttribute("class","gobacknav")
  backbutton.setAttribute("class","one")
  backicon.setAttribute("class","ri-arrow-left-circle-line")
  backH1Text.innerHTML="Back"
  cardHeadingText.setAttribute("class","one")
  cardHeadingH1Text.setAttribute("id","singleCardTrip")
  addItemForNewCard.setAttribute("class","add-items")
  addItemForNewCard.setAttribute("onclick","addNewTaskPopup()")
  
  addItemForNewCardicon.setAttribute("class","ri-add-line")
  
  
  blurPage[1].appendChild(gobacknav)
  gobacknav.appendChild(backbutton)
  backbutton.appendChild(backicon)
  backbutton.appendChild(backH1Text)
  
  gobacknav.appendChild(cardHeadingText)
  cardHeadingText.appendChild(cardHeadingH1Text)
  
  gobacknav.appendChild(addItemForNewCard)
  addItemForNewCard.appendChild(addItemForNewCardicon)
  




// open single card 
h2Text.addEventListener('click', function(e){
   h2Text.style.cursor ="pointer"
  //create card heading

  


card.style.position ="absolute"
card.style.top="50%"
card.style.left="50%"
card.style.zIndex="44"

card.style.transform="translate(-50%,-50%)"
blurPage[1].style.display="block"
blurPage[1].style.filter="blur(0px)"
// blurPage.style.backgroundColor="black"
gobacknav.style.display="flex"
cardHeadingH1Text.innerText= h2Text.innerHTML



backbutton.addEventListener('click',function(){
   backbutton.style.cursor ="pointer"
   blurPage[1].style.display="none"
   card.style.position ="static"
   card.style.top="0"
   card.style.left="0"
   card.style.zIndex="21"
   card.style.transform="translate(0px,0px)"
   gobacknav.style.display="none"
   container.removeChild(add_new_items_in_card)
})
})


deleteTask.addEventListener('click', function(){
   console.log("deleted")
   card.remove()
   blurPage[1].style.display="none"
   gobacknav.style.display="none"
 closeTask()
 findcrationpopup.setAttribute("id","creationpopup")

 findcrationpopup.style.backgroundColor = 'rgb(255, 91, 123)'
   findcrationpopuph1.innerHTML= 'Card Deleted Successfully'

      setTimeout(() => {
      findcrationpopuph1.innerHTML= ''

      findcrationpopup.removeAttribute("id")
       
      }, 1000);
})

   }
   
// append card element




}










