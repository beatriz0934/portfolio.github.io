const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");

const aparecerJuan = () => {
    if (container1.classList.contains("aparecercontainer1")) {
        container1.classList.remove("aparecercontainer1");
        container1.classList.add("desaparecer");
    }
    if (container2.classList.contains("desaparecer")) {
        container2.classList.remove("desaparecer");
        container2.classList.add("aparecercontainer2");
    }
}

const aparecerBia = () => {
    if (container2.classList.contains("aparecercontainer2")) {
        container2.classList.remove("aparecercontainer2");
        container2.classList.add("desaparecer");
    }
    if (container1.classList.contains("desaparecer")) {
        container1.classList.remove("desaparecer");
        container1.classList.add("aparecercontainer1");
    }
}
