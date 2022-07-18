import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [status1, setStatus1] = useState("approved");
  const [status2, setStatus2] = useState("approved");
  const [status3, setStatus3] = useState("approved");
  const [status4, setStatus4] = useState("approved");
  const [status5, setStatus5] = useState("approved");


  // const [stat, setStat] = useState("pending");

  // const [redcolor, setRedcolor] = useState("red");
  // const [bluecolor, setBluecolor] = useState("blue");

  function changeColor(inde) {
    switch(inde) {
      case 1:
        setStatus1('pending')
       

        break;
      case 2:
        // if(1<index){

        // }
        setStatus1('')
        setStatus2('pending')
        setStatus3('approved')
        setStatus4('approved')
        setStatus5('approved')



        break;
        case 3:
          setStatus1('')
          setStatus2('')
          setStatus3('pending')
          setStatus4('approved')
          setStatus5('approved')
  
          break;
          case 4:
            setStatus1('')
            setStatus2('')
            setStatus3('')
            setStatus4('pending')
            setStatus5('approved')
    
            break;
            case 5:
              setStatus1('')
              setStatus2('')
              setStatus3('')
              setStatus4('')
              setStatus5('pending')
      
              break;
      default:
        // code block
    }
  }

  return (
    <div className="App">
      {/* <span style={{fontSize:500,color:'red'}}>*</span> */}
      <span
        style={{
          fontSize: 500,
          color:
            status1 === "approved" 
              ? ''
              : status1 === "pending"
              ? 'red'
              : 'blue',
        }}
        onClick={() => changeColor(1)}
      >
        *
      </span>
      <span
        style={{
          fontSize: 500,
          color:
            status2 === "approved" 
              ? ''
              : status2 === "pending"
              ? 'red'
              : 'blue',
        }}
        onClick={() => changeColor(2)}
      >
        *
      </span><span
        style={{
          fontSize: 500,
          color:
            status3 === "approved" 
              ? ''
              : status3 === "pending"
              ? 'red'
              : 'blue',
        }}
        onClick={() => changeColor(3)}
      >
        *
      </span><span
        style={{
          fontSize: 500,
          color:
            status4 === "approved" 
              ? ''
              : status4 === "pending"
              ? 'red'
              : 'blue',
        }}
        onClick={() => changeColor(4)}
      >
        *
      </span><span
        style={{
          fontSize: 500,
          color:
            status5 === "approved" 
              ? ''
              : status5 === "pending"
              ? 'red'
              : 'blue',
        }}
        onClick={() => changeColor(5)}
      >
        *
      </span>
      
      
     
      {/* <span
        style={{
          fontSize: 500,
          color:
            status === "approved" && stat === "approved"
              ? redcolor
              : status === "pending"
              ? bluecolor
              : " ",
        }}
        onClick={() => changeColor(3)}
      >
        *
      </span> */}
      {/* <span
        style={{
          fontSize: 500,
          color:
            status === "approved" && stat === "approved"
              ? redcolor
              : status === "pending"
              ? bluecolor
              : " ",
        }}
        onClick={() => changeColor(4)}
      >
        *
      </span> */}

      {/* <span style={{fontSize:500,color: status === 'approved' ? bluecolor : status === 'pending' ? redcolor : ' '}} onClick={()=>changeColor(1)}>*</span> */}
    </div>
  );
}

export default App;
