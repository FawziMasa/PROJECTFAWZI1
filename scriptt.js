function showFlearnAI() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("flearnAI").style.display = "flex";
}

function showFexamAI() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("fexamAI").style.display = "flex";
}

function goBack() {
    document.getElementById("flearnAI").style.display = "none";
    document.getElementById("fexamAI").style.display = "none";
    document.querySelector(".container").style.display = "flex";
}

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const subject = document.getElementById("subjectSelect").value;
    if (file) {
        const fileList = document.getElementById("fileList");
        const newItem = document.createElement("p");
        newItem.textContent = `📄 ${file.name} (Uploaded for ${subject})`;
        fileList.appendChild(newItem);
        newItem.style.animation = "fadeIn 0.5s ease-in-out";
    }
});
