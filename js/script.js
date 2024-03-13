let finish = document.querySelector("button")
finish.addEventListener("click",function(){
    /* Header Input */
    const header = document.createElement("h3")
    const headerName = document.createTextNode("Teacher")
    header.appendChild(headerName)
    /* Full Input */
    const labelFirst = document.createElement("label")
    const labelFName = document.createTextNode("FirstName")
    labelFirst.appendChild(labelFName)
    const firstName = document.createElement("input")
    firstName.setAttribute("class", "firstname")
    firstName.setAttribute("placeholder", "Firstname")
    firstName.setAttribute("value", document.querySelector(".firstname").value)
    const divfName = document.createElement("div")
    divfName.appendChild(labelFirst)
    divfName.appendChild(firstName)
    
    const lastName = document.createElement("input")
    lastName.setAttribute("class", "lastname")
    lastName.setAttribute("placeholder", "LastName")
    lastName.setAttribute("value", document.querySelector(".lastname").value)
    const divlName = document.createElement("div")
    divlName.appendChild(lastName)
    const divfullName = document.createElement("div")
    divfullName.setAttribute("class", "full")
    divfullName.appendChild(divfName)
    divfullName.appendChild(divlName)
    const divinputfull = document.createElement("div")
    divinputfull.setAttribute("class", "input-box")
    divinputfull.appendChild(divfullName)
    /* Age Input */
    const labelAge = document.createElement("label")
    const labelaName = document.createTextNode("Age")
    labelAge.appendChild(labelaName)
    const ageInput = document.createElement("input")
    ageInput.setAttribute("class", "age")
    ageInput.setAttribute("value", document.querySelector(".age").value)
    divAge = document.createElement("div")
    divAge.appendChild(labelAge)
    divAge.appendChild(ageInput)
    const divinputAge = document.createElement("div")
    divinputAge.setAttribute("class", "input-box")
    divinputAge.appendChild(divAge)
    /* Gender Input */
    const labelGender = document.createElement("label")
    const labelgName = document.createTextNode("Gender")
    labelGender.appendChild(labelgName)
    const genderInput = document.createElement("input")
    genderInput.setAttribute("class", "gender")
    genderInput.setAttribute("value", document.querySelector(".gender").value)
    const divGender = document.createElement("div")
    divGender.appendChild(labelGender)
    divGender.appendChild(genderInput)
    const divInputGender = document.createElement("div")
    divInputGender.setAttribute("class", "input-box")
    divInputGender.appendChild(divGender)
    /* Interests Input */
    const labelInterests = document.createElement("label")
    const labeliName = document.createTextNode("Interests")
    labelInterests.appendChild(labeliName)
    const interestsInput = document.createElement("input")
    interestsInput.setAttribute("class", "interests")
    interestsInput.setAttribute("value", document.querySelector(".interests").value)
    const divInterests = document.createElement("div")
    divInterests.appendChild(labelInterests)
    divInterests.appendChild(interestsInput)
    const divInputInterests = document.createElement("div")
    divInputInterests.setAttribute("class", "input-box")
    divInputInterests.appendChild(divInterests)
    /* Bio Input */
    const labelBio = document.createElement("label")
    const labelbName = document.createTextNode("Bio")
    labelBio.appendChild(labelbName)
    const bioInput = document.createElement("input")
    bioInput.setAttribute("class", "bio")
    bioInput.setAttribute("value", document.querySelector(".bio").value)
    const divBio = document.createElement("div")
    divBio.appendChild(labelBio)
    divBio.appendChild(bioInput)
    const divInputBio = document.createElement("div")
    divInputBio.setAttribute("class", "input-box")
    divInputBio.appendChild(divBio)
    /* Subject Input */
    const labelSubject = document.createElement("label")
    const labelsName = document.createTextNode("Subject")
    labelSubject.appendChild(labelsName)
    const SubjectInput = document.createElement("input")
    SubjectInput.setAttribute("class", "subject")
    SubjectInput.setAttribute("value", document.querySelector(".subject").value)
    const divSubject = document.createElement("div")
    divSubject.appendChild(labelSubject)
    divSubject.appendChild(SubjectInput)
    const divInputSubject = document.createElement("div")
    divInputSubject.setAttribute("class", "input-box")
    divInputSubject.appendChild(divSubject)
    /* Greeting Input */
    const labelGreeting = document.createElement("label")
    const labelgrName = document.createTextNode("Greeting")
    labelGreeting.appendChild(labelgrName)
    const GreetingInput = document.createElement("input")
    GreetingInput.setAttribute("value", document.querySelector(".greeting").value)
    GreetingInput.setAttribute("class", "greeting")
    const divGreeting = document.createElement("div")
    divGreeting.appendChild(labelGreeting)
    divGreeting.appendChild(GreetingInput)
    const divInputGreeting = document.createElement("div")
    divInputGreeting.setAttribute("class", "input-box")
    divInputGreeting.appendChild(divGreeting)

    const img = document.createElement("img")
    img.setAttribute("src", "images/User-Profile-PNG-Picture.png")
    img.setAttribute("class", "profile")
    const divPicture = document.createElement("div")
    divPicture.appendChild(img)
    divPicture.setAttribute("class", "picture")

    const divContent = document.createElement("div")
    divContent.setAttribute("class", "content")
    divContent.appendChild(header)
    divContent.appendChild(divinputfull)
    divContent.appendChild(divinputAge)
    divContent.appendChild(divInputGender)
    divContent.appendChild(divInputInterests)
    divContent.appendChild(divInputBio)
    divContent.appendChild(divInputSubject)
    divContent.appendChild(divInputGreeting)
    
    const info = document.createElement("div")
    info.style.marginTop = "10px"
    info.setAttribute("class", "information")
    info.appendChild(divPicture)
    info.appendChild(divContent)
    const container = document.querySelector(".container")
    container.style.height = "auto"
    container.appendChild(info)
    document.body.appendChild(container)
    
    const first = document.querySelector(".firstname")
    first.value = ""
    const last = document.querySelector(".lastname")
    last.value = ""
    const age = document.querySelector(".age")
    age.value = ""
    const gender = document.querySelector(".gender")
    gender.value = ""
    const interests = document.querySelector(".interests")
    interests.value = ""
    const bio = document.querySelector(".bio")
    bio.value = ""
    const subject = document.querySelector(".subject")
    subject.value = ""
    const greeting = document.querySelector(".greeting")
    greeting.value = ""  
})