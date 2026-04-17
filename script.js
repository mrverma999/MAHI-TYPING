let texts = {
    basic: [
        "f d s a j k l ;",
        "asdf jkl;",
        "fff ddd sss aaa",
        "jjj kkk lll ;;"
    ],
    medium: [
        "the quick brown fox jumps over the lazy dog",
        "typing practice makes you faster",
        "learn typing step by step"
    ],
    advanced: [
        "Typing is an essential skill that improves productivity and efficiency.",
        "Practice daily to achieve higher typing speed with better accuracy.",
        "Consistency and patience are key to mastering typing skills."
    ]
};

let startTime, timer;

function startTest() {
    let level = document.getElementById("level").value;
    let randomText = texts[level][Math.floor(Math.random() * texts[level].length)];
    
    document.getElementById("text").innerText = randomText;
    document.getElementById("input").value = "";

    startTime = new Date().getTime();

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
}

function updateTime() {
    let currentTime = new Date().getTime();
    let seconds = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("time").innerText = seconds;
}

document.getElementById("input").addEventListener("input", function () {
    let inputText = this.value;
    let originalText = document.getElementById("text").innerText;

    let correctChars = 0;

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === originalText[i]) {
            correctChars++;
        }
    }

    let accuracy = (correctChars / inputText.length) * 100 || 0;
    document.getElementById("accuracy").innerText = accuracy.toFixed(2);

    let time = document.getElementById("time").innerText;
    let speed = Math.round((inputText.length / 5) / (time / 60)) || 0;

    document.getElementById("speed").innerText = speed;
});