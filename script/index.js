
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


    }))