const letterBtn = document.getElementById("letter-btn");

const shakeInterval = setInterval(() => {
    letterBtn.classList.toggle("shake");
}, 1000);

const firstLetterList = [
    "Đầu tiên, cảm ơn rất nhiều vì đã đọc lá thư này",
    "Tớ có một điều muốn nói nhưng không biết bắt đầu từ đâu",
    "Cậu đồng ý..."
];

const secondLetterList = [
    "Cậu vừa bảo gì cơ",
    "Cậu bảo không",
    "Không thể không yêu nhau sao =))))))",
    "Xíu tớ qua đón đi chơi 🥰"
]

const openLetter = () => {
    clearInterval(shakeInterval);
    document.getElementById("greeting").classList.add("hidden");
    document.getElementById("message-container").classList.remove("hidden");

    let letterIndex = 0;
    const letterInterval = setInterval(() => {
        document.getElementById("message").innerText = firstLetterList[letterIndex];
        letterIndex++;
        if (letterIndex > firstLetterList.length) {
            clearInterval(letterInterval); 
            openFirstQuestion();
        }
    }, 3000);
};

const openFirstQuestion = () => {
    document.getElementById("message-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
}

const handleAgree = () => {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("message-box").classList.remove("hidden");
}

const handleDisagree = () => {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("message").innerText = secondLetterList[0];
    document.getElementById("message-container").classList.remove("hidden");

    let letterIndex = 1;
    const letterInterval = setInterval(() => {
        document.getElementById("message").innerText = secondLetterList[letterIndex];
        letterIndex++;
        if (letterIndex > secondLetterList.length) {
            clearInterval(letterInterval); 
            document.getElementById("message-container").classList.add("hidden");
            document.getElementById("message-box").classList.remove("hidden");
        }
    }, 2000);
}

const handleSendMessage = () => {
    document.getElementById("message-box").classList.add("hidden");

    if(isMobile()) {
        document.getElementById("custom-modal").classList.remove("hidden");

    } else {
        setTimeout(()=>{
            alert("Lời nhắn của bạn: Chúng mình yêu nhau nhé 💕");
            alert("Lời nhắn của bạn đã được gửi");
        }, 300);
    }   
}

let isFirstNoti = true;
const handleCloseNoti = () => {
    if(isFirstNoti) {
        document.getElementById("noti-text").innerHTML = "Lời nhắn của bạn đã được gửi";
    } else {
        document.getElementById("custom-modal").classList.add("hidden");
    }
}

const isMobile = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.getElementById("message-input").addEventListener("input", function() {
    const textValue = this.value.trim(); 
    document.getElementById("message-btn").disabled = textValue === "";
});