
// change button color
const button = document.getElementById("change-color-btn");
const colors = ["red", "indigo", "lime", "yellow", "purple"];

    button.addEventListener("click", function (){
        const randomColor = Math.floor(Math.random()*colors.length);
       document.body.style.backgroundColor = colors[randomColor];
        
    })

    // date

    const today = new Date();
    const tittles = {week: "long", year: "numeric", month: "long", day: "numeric"};
    const formateOfDate = today.toLocaleDateString("en-us", tittles);

    document.getElementById("date-day").textContent = formateOfDate;


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
                alert("Congrats!!!You have completed all the current task");
            }
            
        }
        button.disabled = true;

    // add in transaction history

        const getCard = button.parentElement.parentElement.parentElement;
        const cardTittle = getCard.querySelector(".card-tittle").innerText;
        const today = new Date()
        const getToday=today.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
       
        const activityContainer = document.getElementById("activity-container");
        const newDiv = document.createElement("div");
        
        newDiv.innerHTML = `
        <div class = "bg-blue-500 p-2 rounded-xl mt-3 text-white "> You have Completed The  task ${cardTittle} at ${getToday} </div>
        
        `
        
    activityContainer.appendChild(newDiv);
    

    }))
    


    document.getElementById("clear-history").addEventListener('click',function(){
        document.getElementById("activity-container").innerText=' '
    })


    
    document.getElementById("new-page").addEventListener("click",function(){
        window.location.href = "newpage.html";
    })
    