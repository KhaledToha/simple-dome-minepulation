var list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        let li = e.target.parentElement;
        list.removeChild(li);
    }
})

let addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();

    let value = addForm.querySelector('input[type = "text"]').value;
    let li  = document.createElement('li');
    let name = document.createElement('span');
    name.classList.add('name')
    name.textContent = value;
    let deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete')
    deleteSpan.textContent = 'delete'

    li.appendChild(name)
    li.appendChild(deleteSpan)
    list.appendChild(li)

    
    
})

let hideBooks = document.querySelector('#hide');
hideBooks.addEventListener('change',function(e){
    if(hideBooks.checked){
        list.style.display = 'none'
    }else{
        list.style.display = 'initial'
    }
});
  
//filter books 

let searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    let term = e.target.value.toLowerCase();
    let books = list.getElementsByTagName('li');
    Array.from(books).forEach((item) => {
        let title = item.firstElementChild.textContent;
        if(title.toLocaleLowerCase().indexOf(term) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
});

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        let targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel)=>{
            if(panel == targetPanel){
                panel.classList.add('active')
            }else{
                panel.classList.remove('active')
            }
        })
    }
})