
// change button color
const button = document.getElementById("change-color-btn");
const colors = ["red", "indigo", "lime", "yellow", "purple"];

    button.addEventListener("click", function (){
        const randomColor = Math.floor(Math.random()*colors.length);
       document.body.style.backgroundColor = colors[randomColor];
        
    })


    // click buton
    const clickButtons = document.querySelectorAll(".click-btn");

    clickButtons.forEach(button => button.addEventListener('click', function(){

        const increaseValueElement = document.getElementById("increase-value");
        const decreaseValueElement = document.getElementById("decrease-value");

        if(increaseValueElement && decreaseValueElement){
            let increaseValue = parseInt(increaseValueElement.innerText) || 0;
            let decreaseValue = parseInt(decreaseValueElement.innerText) || 0;

            increaseValue++;
            decreaseValue--;

            increaseValueElement.innerText = increaseValue;
            decreaseValueElement.innerText = decreaseValue;

            alert("Board updated succesfully");
            if(decreaseValue === 0){
                alert("all done");
            }
            
        }
        button.disabled = true;

    // add in transaction history

        const getCard = button.parentElement.parentElement.parentElement;
        const cardTitle = getCard.querySelector(".card-title").innerText;
        const today = new Date()
        const getToday=today.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
       
        const titleContainer = document.getElementById("activity-container");
        const newDiv = document.createElement("div");
        
        newDiv.innerHTML=`You have Completed The  task ${cardTitle} at ${getToday}`
    titleContainer.appendChild(newDiv);

    }))
    


    document.getElementById("clear-history").addEventListener('click',function(){
        document.getElementById("activity-container").innerText=' '
    })
