import axios from "axios"
import React, { useState } from "react"



function App() {

  const [wifi, setWifi] = useState([])

  const scanWifi = async () => {
    const availableWifi = await axios.get("http://localhost:8000/")
    console.log(availableWifi)
    const { data } = availableWifi
    setWifi(data)
    console.log(wifi)
  }

  return (
    <div className="w-full text-center flex flex-col items-center">
      <h1 className="font-bold text-3xl mt-4"> Wifi Scanner </h1>
      <p className="text-sm my-3"> Your home made wifi scanner for all available network within a 50 meter radius </p>
      <button onClick={scanWifi} className="px-3 py-1 rounded bg-green-600 text-white"> Scan </button>
      <main>
        <h3> Scan Results </h3>
        <div className="flex flex-wrap gap-2 m-3">
          {
            [
              "1", "2", "3"
            ].map((i, idx) => <div key={idx} className="border p-3 rounded border-green-400">
              <p> Wifi Name</p>
              <p> Signal Strength</p>
              <p> Frequency</p>
              <p> Speed</p>

            </div>
            )
            // : <p>No Available wifi</p>
          }
        </div>
      </main>
    </div>
  )
}

export default App
