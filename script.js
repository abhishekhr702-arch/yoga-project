function enterSite(){
    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}

function findYoga(){

    let pain = document.getElementById("painInput").value.toLowerCase();

    document.getElementById("mainPage").style.display = "none";
    document.getElementById("detailPage").style.display = "block";

    if(pain === "neck"){

        document.getElementById("yogaImage").src = "neck.jpg";
        document.getElementById("yogaDesc").innerHTML =
            "<b>Yoga:</b> Rotate neck slowly for 20 seconds each side.";

        document.getElementById("yogaVideo").src = "neckvideo.mp4";

        document.getElementById("medicineImage").src = "necktablets.jpg";
        document.getElementById("medicineDesc").innerHTML =
            "<b>Medicine:</b> Use pain relief gel or spray,Muscle relaxant tablets and proper rest ,This video is intended for general educational purposes only. If your neck pain does not improve after practicing these exercises regularly, or if the pain becomes severe, persistent, or radiates to the shoulders or arms, please consult a qualified medical professional. Ignoring ongoing symptoms may lead to worsening discomfort or more serious complications in the future. Always seek proper medical advice for accurate diagnosis and treatment...";
    }

    else if(pain === "back"){

        document.getElementById("yogaImage").src = "backyoga.jpg";
        document.getElementById("yogaDesc").innerHTML =
            "<b>Yoga:</b> Cat-Cow stretch for 30 seconds, repeat 3 times.";

        document.getElementById("yogaVideo").src = "backyoga.mp4";

        document.getElementById("medicineImage").src = "necktablets.jpg";
        document.getElementById("medicineDesc").innerHTML =
            "<b>Medicine:</b> Muscle relaxant tablets and proper rest ,This video is intended for general educational purposes only. If your back pain does not improve after practicing these exercises regularly, or if the pain becomes severe, persistent, or radiates to the shoulders or arms, please consult a qualified medical professional. Ignoring ongoing symptoms may lead to worsening discomfort or more serious complications in the future. Always seek proper medical advice for accurate diagnosis and treatment..";
    }

    else if(pain === "leg"){

        document.getElementById("yogaImage").src = "leg.jpg";
        document.getElementById("yogaDesc").innerHTML =
            "<b>Yoga:</b> Forward bend stretch for 25 seconds.";

        document.getElementById("yogaVideo").src = "legvideo.mp4";

        document.getElementById("medicineImage").src = "necktablets.jpg";
        document.getElementById("medicineDesc").innerHTML =
            "<b>Medicine:</b> Pain relief spray and light massage, Muscle relaxant tablets and proper rest ,This video is intended for general educational purposes only. If your leg pain does not improve after practicing these exercises regularly, or if the pain becomes severe, persistent, or radiates to the shoulders or arms, please consult a qualified medical professional. Ignoring ongoing symptoms may lead to worsening discomfort or more serious complications in the future. Always seek proper medical advice for accurate diagnosis and treatment..";
    }

    else{
        alert("Please type neck, back, or leg");
        backToMain();
    }
}

function backToMain(){
    document.getElementById("detailPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}

function toggleMode(){
    document.body.classList.toggle("dark");
}
function openAI(){
    document.getElementById("aiChat").style.display = "flex";
}

function closeAI(){
    document.getElementById("aiChat").style.display = "none";
}

function sendMessage(){

    let input = document.getElementById("aiInput");
    let message = input.value.toLowerCase().trim();
    let chat = document.getElementById("aiMessages");

    if(message === "") return;

    chat.innerHTML += "<p><b>You:</b> " + message + "</p>";

    let reply = "";

    // Medicine related
    if(message.includes("paracetamol")){
        reply = "Paracetamol is used to reduce fever and relieve mild to moderate pain such as headache, toothache, and body pain.";
    }
    else if(message.includes("ibuprofen")){
        reply = "Ibuprofen is used for pain relief, inflammation, and fever reduction.";
    }
    else if(message.includes("side effect")){
        reply = "Common side effects may include nausea, dizziness, or stomach upset.";
    }
    else if(message.includes("dose") || message.includes("how many")){
        reply = "Dosage depends on age and condition. Please follow doctor prescription.";
    }

    // Body pain related
    else if(message.includes("neck")){
        reply = "For neck pain, gentle stretching, proper posture, and mild pain relievers may help.";
    }
    else if(message.includes("back")){
        reply = "For back pain, rest, heat therapy, and light exercises are recommended.";
    }
    else if(message.includes("headache")){
        reply = "For headache, stay hydrated and consider paracetamol if required.";
    }

    // Default
    else{
        reply = "Please consult a certified medical professional for detailed advice.";
    }

    chat.innerHTML += "<p><b>AI:</b> " + reply + "</p>";

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
async function sendMessage(){

    let input = document.getElementById("aiInput");
    let message = input.value;

    let response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    let data = await response.json();

    document.getElementById("aiMessages").innerHTML +=
        "<p><b>You:</b> " + message + "</p>";

    document.getElementById("aiMessages").innerHTML +=
        "<p><b>AI:</b> " + data.reply + "</p>";

    input.value = "";
}