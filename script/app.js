const ApiController = (function(){

const clientId = '5e097fed8bb4473490fa0922390d65c6' ;
const clientSecret = '73aa230682e249c2aac2e905519aef86' ; 

const _getToken = async () => {
    const result = await fetch ('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers:{
        "Content-Type": 'application/x-www-form-urlencoded',
        "Authorization":"Basic " +  btoa(clientId+':'+ clientSecret)
        } ,
        body : 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}

const _getRaveGenres = async (token) =>{
    const result ('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET', 
        headers: {'Authorization':'Bearer '+ token}
    });

    const data = await result.json();
    const items = data.categories.items;

    const desiredCategories = ['techno', 'detroit-techno', 'electro', 'eletronic'];
    const filteredItems = items.filter(item => desiredCategories.includes(item.id));

    return filteredItems;
}

})();

