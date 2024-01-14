function addUser(){
    let users=[]
    function add(adds){
         users.push(adds)
    localStorage.setItem("users",JSON.stringify(users))
   return users
    }
   

     return {add}
}

export  {addUser}