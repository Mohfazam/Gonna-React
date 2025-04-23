// const users = [
//     { id: 1, name: "Alice Johnson", role: "Admin" },
//     { id: 2, name: "Bob Smith", role: "Editor" },
//     { id: 3, name: "Charlie Brown", role: "Viewer" },
//     { id: 4, name: "Dana White", role: "Moderator" },
//     { id: 5, name: "Evan Black", role: "Contributor" },
//     { id: 6, name: "Fiona Green", role: "Admin" },
//     { id: 7, name: "George Blue", role: "Editor" },
//     { id: 8, name: "Hannah Silver", role: "Viewer" },
//     { id: 9, name: "Ian Gold", role: "Moderator" },
//     { id: 10, name: "Jenna Violet", role: "Contributor" }
//   ];
  
// const User = () => {
//     return(
//     <div>
//         user Details:<UserDetails id={users.id} />
//     </div>
//     )
// }

// const UserDetails = (props) = {
//     name = {props.name}
// }




const users = [
    { id: 1, name: "Alice Johnson", role: "Admin" },
    { id: 2, name: "Bob Smith", role: "Editor" },
    { id: 3, name: "Charlie Brown", role: "Viewer" },
    { id: 4, name: "Dana White", role: "Moderator" },
    { id: 5, name: "Evan Black", role: "Contributor" },
    { id: 6, name: "Fiona Green", role: "Admin" },
    { id: 7, name: "George Blue", role: "Editor" },
    { id: 8, name: "Hannah Silver", role: "Viewer" },
    { id: 9, name: "Ian Gold", role: "Moderator" },
    { id: 10, name: "Jenna Violet", role: "Contributor" }
  ];
  
  const User = () => {
    return (
      <div className="border-green-800 border-4 p-4 m-4">
        <h1>User Details:</h1>
        {users.map((user) => (
          <UserDetails key={user.id} id={user.id} name={user.name} role={user.role} />
        ))}
      </div>
    );
  };
  
  const UserDetails = (props:any) => {
    return (
      <div className="">
        <p>ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Role: {props.role}</p>
        <hr />
      </div>
    );
  };
  
  export default User;
  