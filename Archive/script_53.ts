// 53. Utility Type - Paramètres

function fetchUser(id:number, username:string) {
  console.log(`Fetch user id ${id} | username ${username}`);
  
}
// fetchUser(2, "Mario")

type FetchUserParam = Parameters<typeof fetchUser>//(id:number, username:string

function fetchLoggedUser(...params:FetchUserParam) {
  fetchUser(...params)
  
}

fetchLoggedUser(3, "Marion")