// 54 - Utility Type - ReturnType

function fetchUser1(id:number, username:string) {
return {
  id,
  username
}  
}
// fetchUser(2, "Mario")

type FetchUserParam1 = Parameters<typeof fetchUser>//(id:number, username:string
type FetchUserReturn = ReturnType<typeof fetchUser1>//(id:number, username:string

function fetchLoggedUser1(...params: FetchUserParam1) {
  const memberData = fetchUser(...params);
  console.log(memberData);

  let user: FetchUserReturn = {
    id: 4,
    username: "Toto"
  };
}


fetchLoggedUser(3, "Marion1")
