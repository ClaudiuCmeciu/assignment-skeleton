function Exercise2() {

  function openClickAlert(){
    alert("You clicked me. Thanks!")
  }

  return (
    <div>
      <div>
        <p>
          Add a native HTML button called "Click me". Capture the click event
          and alert the message, "You cliked me. Thanks!".
        </p>
      </div>
      <div className="solution-container">
        <div className="solution-ex2">
          <button onClick={openClickAlert} >Click me</button>
        </div>
      </div>
    </div>
  );
}

export default Exercise2;
