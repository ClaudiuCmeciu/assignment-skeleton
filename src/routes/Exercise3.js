import Button from "../components/button";

function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
        <Button name="button 1"></Button>
        <Button name="button 2"></Button>
        <Button name="button 3"></Button>
        <Button name="button 4"></Button>
      </div>
    </div>
  );
}

export default Exercise3;
