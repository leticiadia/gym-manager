const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .menu a')


for(item of menuItems){
    if(currentPage.includes(item.getAttribute('href'))){
        item.classList.add('active')
    }
}

function paginate(selectedPage, totalPages){
    let pages = [], 
    oldpage

    for(let currentPage = 1; currentPage <= totalPages; currentPage++){
        
        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
        

        if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage){
            
            if(oldpage && currentPage - oldpage > 2){
                pages.push('...')
            }

            if(oldpage && currentPage - oldpage == 2){
                pages.push(oldpage + 1)
            }
            
            pages.push(currentPage)

            oldpage = currentPage
        }
    }

    return pages
}

const pagination = document.querySelector('.pagination')
const page = +pagination.dataset.page
const total = +pagination.dataset.total
const pages = paginate(page, total)

let elements = ''

for(let page of pages){
    if(String(page).includes('...')){
        elements += `<span>${page}</span>`
    }
    else{
        elements += `<a href="?page=${page}">${page}</a>`
    }
    
}

pagination.innerHTML = elements
