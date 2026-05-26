function init()
{
    search(getStatus())
}

function searchByName()
{
    goToPage(1)
}

function goToPage(i)
{
    let status = getStatus()
    status.page = i
    search(status)
}

function goToPreviousPage()
{
    goToPage(Math.max(1,status.page-1))
}

function goToNextPage()
{
    goToPage(Math.min(status.pages,status.page+1))
}

function sort(field)
{
    let status = getStatus()

    if(status.sortField == field)
        status.sortAsc = !status.sortAsc
    else
    {
        status.sortField = field
        status.sortAsc=true
    }
    search(status)
}

async function search(status)
{
    let response = await fetch(getApiUrl(status))
    let json = await response.json()
    let users = json.users

    status.pages = Math.ceil(json.total / status.pageSize)

    let tableBody = ''
    users.forEach(u => tableBody += `
        <tr>
            <td>${u.lastName}</td>
            <td>${u.firstName}</td>
            <td>${u.gender == 'male' ? 'M' : 'F'}</td>
            <td>${u.age}</td>
            <td>${u.height}</td>
            <td>${u.weight}</td>
            <td>${u.eyeColor}</td>
            <td>${u.hair.type} ${u.hair.color}</td>
        </tr>`)

    document.getElementById('tbody').innerHTML = tableBody

    let pagination = `<li class="page-item ${status.page==1?'disabled':''}"><a class="page-link" onclick="goToPreviousPage()">Previous</a></li>`
    for(let i = 1; i<=status.pages; i++)
    {
        pagination += `<li class="page-item ${status.page==i?'active':''}"><a class="page-link" onclick="goToPage(${i})">${i}</a></li>`
    }
    pagination += `<li class="page-item ${status.page==status.pages?'disabled':''}"><a class="page-link" onclick="goToNextPage()">Next</a></li>`
    document.getElementById('pagination').innerHTML = pagination


    let tableHeaders = document.querySelectorAll('#tableHeaderRow i')
    for(let tableHeader of tableHeaders)
    {
        tableHeader.classList.remove('bi-display-yes')
        if( tableHeader.parentNode.id == status.sortField )
        {
            tableHeader.classList.add('bi-display-yes')
            if( tableHeader.getAttribute('class').includes('bi-sort-alpha') )
            {
                tableHeader.classList.add( status.sortAsc ? 'bi-sort-alpha-down' : 'bi-sort-alpha-up')
                tableHeader.classList.remove( status.sortAsc ? 'bi-sort-alpha-up' : 'bi-sort-alpha-down')
            }
            else
            {
                tableHeader.classList.add( status.sortAsc ? 'bi-sort-numeric-down' : 'bi-sort-numeric-up')
                tableHeader.classList.remove( status.sortAsc ? 'bi-sort-numeric-up' : 'bi-sort-numeric-down')
            }
        }
    }
}

function getStatus()
{
    let status = {
        searchText:'',
        page:0,
        pages:0,
        pageSize:15,
        sortField:'lastName',
        sortAsc:true
    }

    status.searchText = document.getElementById('searchInputText').value
    status.page = parseInt(document.querySelector('.pagination .page-item.active a').innerText)
    status.pages = document.querySelectorAll('.pagination .page-item').length - 2

    tableHeader = document.getElementsByClassName('bi-display-yes')[0]
    status.sortField = tableHeader.parentNode.id
    status.sortAsc = tableHeader.getAttribute('class').includes('bi-sort-alpha-down') || tableHeader.getAttribute('class').includes('bi-sort-numeric-down')

    return status
}

function getApiUrl(status)
{
    let apiUrl = 'https://dummyjson.com/users/search?'   
    let apiParams = []
    if(status.searchText!='')  apiParams.push(`q=${status.searchText}`)
    apiParams.push(`skip=${(status.page-1)*status.pageSize}`)
    apiParams.push(`limit=${status.pageSize}`)
    apiParams.push(`sortBy=${status.sortField}`)
    apiParams.push(`order=${status.sortAsc ? 'asc' : 'desc'}`)    
    return apiUrl + apiParams.join('&')
}