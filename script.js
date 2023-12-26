let userArray = []
function register() {
    let name = document.getElementById("userName").value
    let mail = document.getElementById("userGmail").value

    let userCount = userArray.filter((x) => {
        return x.objectGmail == mail
    })
    if (userCount.length == 0) {
        let userDetails = { objectName: name, objectGmail: mail }
        userArray.push(userDetails)
    }
    else {
        let warn = document.getElementById("warn")
        // console.log("this gmail is already existed"
        warn.innerHTML = "this gmail is already existed"
    }
    document.getElementById("userName").value = ''
    document.getElementById("userGmail").value = ''
    let savedData = document.getElementById("savedData")
    savedData.innerHTML = ''
    userArray.map((userArray) => {

        let div = document.createElement("div")
        let headingTwo = document.createElement('h2')
        let headingFour = document.createElement('h4')
        div.classList.add('userdiv')
        headingTwo.innerHTML = userArray.objectName
        headingFour.innerHTML = userArray.objectGmail
        savedData.appendChild(div)
        div.appendChild(headingTwo)
        div.appendChild(headingFour)

    })

}
