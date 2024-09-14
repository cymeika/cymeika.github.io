document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for (const image of images) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                img.src = data.message
                img.width = 100;
                img.height = 100;
            })
    }

})