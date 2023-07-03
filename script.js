const inputBox = document.getElementById('inputbox');
const listContrainer = document.getElementById('list-container');

function add()
{
    if(inputBox.value === '')
    {
        alert('You must write something !!!!!!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = inputBox.value;
        listContrainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContrainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
})
// add();

function saveData()
{
    localStorage.setItem("data",listContrainer.innerHTML);
}
function showTask()
{
    listContrainer.innerHTML = localStorage.getItem("data");
}
showTask();