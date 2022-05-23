const Button = (props) => {
    const handleButtonClick = () => {
        alert(props.name)
    }

    return (
      <button onClick={handleButtonClick}>{props.name}</button>
    );
  }
  
  export default Button;