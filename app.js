document.getElementById("btn-add").addEventListener("click", function () {
    var content = document.getElementById("add-content").value
    if (content != "") {
        var newItem = document.createElement("li")
        newItem.innerText = content

        var removeBtn = document.createElement("button")
        removeBtn.innerText = "删除"
        var paragrahp = document.createElement("br")
        document.getElementById("container").prepend(paragrahp)
        document.getElementById("container").prepend(removeBtn)
        document.getElementById("container").prepend(newItem)

        var box = document.createElement("input")
        box.setAttribute("type", "checkbox")
        document.getElementById("container").prepend(box)
        var boxText = document.createTextNode("已完成")
        document.getElementById("container").prepend(boxText)

        removeBtn.addEventListener("click", function () {
            container.removeChild(newItem)
            container.removeChild(removeBtn)
            container.removeChild(box)
            container.removeChild(boxText)
        })
        box.addEventListener("click", function(){
            newItem.style.textDecoration=("line-through")
        })
    }
    else { alert("请输入新项目") }
})

