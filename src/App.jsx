import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  // The on click method in React expects a function reference
  // You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax

  return (
    <>
      <div className="div" style={{backgroundColor: color}}>
        <div className="div2">
        <div className="div3">
          <bottom className="btn" style={{backgroundColor: "blue", color: "white"}} onClick={() => setColor("blue")}>Blue</bottom>
           {/* onClick ko function chahiye naa ki jo function se return aa raha h  
           => setColor() ye karne se aap return de rahe ho but ye nhi pata ki ye function kya return kar raha h*/}
          <bottom className="btn" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</bottom>
          <bottom className="btn" style={{backgroundColor: "green", color:"white"}} onClick={() => setColor("green")}>Green</bottom>
          <bottom className="btn" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</bottom>
          <bottom className="btn" style={{backgroundColor: "black", color: "white"}} onClick={() => setColor("black")}>Black</bottom>
          <bottom className="btn" style={{backgroundColor: "olive", color: "white"}} onClick={() => setColor("olive")}>Olive</bottom>
          <bottom className="btn" style={{backgroundColor: "lavender"}} onClick={() => setColor("lavender")}>Lavender</bottom>
          <bottom className="btn" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</bottom>
          <bottom className="btn" style={{backgroundColor: "purple", color: "white"}} onClick={() => setColor("purple")}>Purple</bottom>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
