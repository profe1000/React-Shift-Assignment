import './TestComp.css'

function TestComp(prop) {

    let a = "Hello World"

    const shoot = () => {
        alert("Great Shot!");
    }

    const shootb = (a) => {
        alert(a);
      }

      const shootc = (a, b) => {
        alert(a +  "<br />" +  b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
      }

    return (
    <div className="w3-card-2 w3-padding cardheight w3-round w3-white">

        <h2> This component is for anything testing. </h2>

        <p> {a} I am a TestComp Component my name is {prop.myname} <br /> I am {prop.myage}  years old.</p><br />
        
         {/* This is an Event Handler */}

         <button onClick={shoot}>Take the Shot!</button> <br /> <br />

         <button onClick={() => shoot()}>Same as first Example.</button> <br /><br />

         <button onClick={() => shootb('I am an Argument!!!')}>Event with Argument Templete.</button> <br /><br />

         <button onClick={(event) => shootc("I am an Argument the other is an Event.", event)}>Argument and Events.</button>

    </div>
    );

}

export default TestComp;