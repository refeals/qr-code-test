import Scanner from "./Scanner"
import qr from "/qr.webp"

function App() {
  return (
    <div style={{ width: "500px" }}>
      <Scanner />
      <img src={qr} alt="qr" />
    </div>
  )
}

export default App
