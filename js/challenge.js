document.addEventListener("DOMContentLoaded", function(){
    function updateTimer() {
        if (timerRunning) {
            chgTimer(1)
        }
    }
    
    function chgTimer(by) {
        counter = document.getElementById("counter");
        counter.innerText = parseInt(counter.innerText, 10) + by
    }

    let timerRunning = true;


    window.setInterval(updateTimer, 1000);

    document.getElementById("minus").addEventListener("click", function() {
        chgTimer(-1);
    });

    document.getElementById("plus").addEventListener("click", function() {
        chgTimer(1);
    });

    document.getElementById("pause").addEventListener("click", function() {
        const buttons = [document.getElementById("plus"), document.getElementById("minus"), document.getElementById("heart")];
        const buttonText = {pause: "resume", resume: "pause"}
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = !buttons[i].disabled;
        }
        let pause = document.getElementById('pause')
        pause.innerText = buttonText[pause.innerText];

        timerRunning = !timerRunning;
    });

    document.getElementById("heart").addEventListener("click", function() {
        let idx = parseInt(document.getElementById("counter").innerText, 10);
        let likeItem = document.getElementById(`like_${idx}`);

        if (!likeItem) {
            let likeList = document.querySelector(".likes");
            likeItem = document.createElement("li");
            likeItem.setAttribute("id", `like_${idx}`);
            likeItem.innerHTML = `${idx} has <span id=${idx}-count>0</span> likes so far`;
            likeList.appendChild(likeItem);
        }
        let toBeLiked = document.getElementById(`${idx}-count`)
        toBeLiked.innerText = parseInt(toBeLiked.innerText, 10) + 1        
    })
    
    document.getElementById("submit").addEventListener("click", function() {
        input = document.getElementById("comment-input")
        newComment = input.value

        if (newComment){
            let list = document.getElementById('comment-list');
            let newListItem = document.createElement("li")
            newListItem.innerHTML = newComment
            list.appendChild(newListItem);
            input.value = ""
        }
        event.preventDefault();
    })
})