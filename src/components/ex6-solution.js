function Ex6Solution(props){
    return (
        <ul>
          {props.usersArray.map(u => <li>{u}</li>)}
         </ul> 
      ); 
}

export default Ex6Solution;
