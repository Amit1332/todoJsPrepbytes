
let container = document.querySelector(".container")
let gobacknav =document.querySelector(".gobacknav")
let singleCardTrip = document.querySelector("#singleCardTrip")
let addNewItems = document.querySelector(".add_new_items")
let blurPage = document.querySelector(".blur-page")

//  Add Card Popup
var flag =0
function addNewTaskPopup(){

if(flag===0){
   addNewItems.style.display = "flex"
   blurPage.style.display="block"

   flag=1
}
else{
   addNewItems.style.display = "none"
   flag=0

}


}
////////////////////////////////////


// close add card popup

function closeTask(){
   addNewItems.style.display = "none"
   blurPage.style.display="none"
flag=0

}
/////////////////////////////

let cards = document.querySelector(".cards")
let cardTitle = document.getElementById("cardTitle")
var id=0

// card creation
function addTripCard(){
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
h2Text.setAttribute("style","padding:12px 0px; text-align: center; color:rgb(241, 114, 114); font-weight: 400;")
h2Text.innerText=cardTitle.value
cardItems.setAttribute("class", "card-items")
cardItems.setAttribute("class", "card-items")
operation.setAttribute("class", "operation")
deleteTask.setAttribute("class", "delete")
delicon.setAttribute("class","ri-delete-bin-line")
addItem.setAttribute("class","add-items")
addicon.setAttribute('class',"ri-add-line")

// append card element
cards.appendChild(card)
card.appendChild(h2Text)
card.appendChild(hrline)
card.appendChild(cardItems)
card.appendChild(operation)
operation.appendChild(deleteTask)
deleteTask.appendChild(delicon)
operation.appendChild(addItem)
addItem.appendChild(addicon)


// delete card 
deleteTask.addEventListener('click', function(){
   card.remove()
 closeTask()
})


//add items inside card to show popup
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
blurPage.style.display="block"

// onclick add crate mark item inside card
add_in_card.addEventListener('click',function(){
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

// onclick mark done  mark as read
   mark.addEventListener('click',function(){
      h3Text.style.textDecoration="line-through"
      h3Text.style.color="orangered"
      item.removeChild(mark)
      item.setAttribute("style", "display:flex;align-items:center; justify-content:center;")

   })

})

// onclick close inside card item add popup
close_in_card.addEventListener('click', function(){
   container.removeChild(add_new_items_in_card) 
blurPage.style.display="none"

      })

})



// open single card 
card.addEventListener('click', function(e){
card.style.position ="absolute"
card.style.top="50%"
card.style.left="50%"
card.style.zIndex="44"

card.style.transform="translate(-50%,-50%)"
blurPage.style.display="block"
blurPage.style.filter="blur(0px)"
blurPage.style.backgroundColor="black"
gobacknav.style.display="flex"
singleCardTrip.innerText= cardTitle.value


})


}







