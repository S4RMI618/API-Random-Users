const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

export function searchBar(fetching) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const search = searchInput.value;
        console.log(search)
    
        const searchResults = fetching.filter(user => user.name.first.includes(search))

        return searchResults
    })
}


export default searchBar;