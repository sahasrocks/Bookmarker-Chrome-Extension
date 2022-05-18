// function saveLead(){
//     console.log("Button Clicked")
// }
let myLeads = []
//let oldLeads = []

// 1. Turn the myLeads string into an array
//myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
//myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
//myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
//console.log(typeof myLeads)


const inputEl = document.getElementById("input-el")


const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

//localStorage.setItem("")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//const tabs=[
//    {url: "kal"}
//]
//let tabs = []

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
    //console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)         
    })


    // //console.log(tabs[0].url)
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads",JSON.stringify(myLeads))
    // render(myLeads)
})


function render(leads){


    let listItems = ""


    for (let i = 0; i < leads.length; i++){
        //console.log(myLeads[i])
        //ulEl.innerHTML +="<li>"+ myLeads[i] +"</li>"
        //document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
        //listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>"
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
        
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
    console.log("Double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    
    //console.log("Button Clicked")
    // myLeads.push("popop")
    // console.log(myLeads)
    myLeads.push(inputEl.value)
    inputEl.value =""
    //console.log(myLeads)

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    //console.log(localStorage.getItem("myLeads"))

})

