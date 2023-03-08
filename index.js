const inputColor = document.getElementById("input-color")
const selectColor = document.getElementById("select-color")
const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", function(e){
    e.preventDefault()
    renderColor()
})

function renderColor() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.replace("#", "")}&mode=${selectColor.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            let containerHtml = ""
            data.colors.map((color) => {
                containerHtml += `
                    <div class="color-container">
                        <div class="color-bar" style="background: ${color.hex.value}"></div> 
                        <p class="color-number">${color.hex.value}</p> 
                    </div>
                `   
            })
            container.innerHTML = containerHtml
    }) 
}


    



