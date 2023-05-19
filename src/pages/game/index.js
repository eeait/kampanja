import { useState } from "react"
import "./index.css"

// Game component
const GameBoard = ({ picture, propProblems }) => {
  const [problems, setProblems] = useState(
    propProblems.map((p) => ({ ...p, found: false }))
  )
  const [message, setMessage] = useState("")

  const coordinatesMatch = (p, x, y) =>
    x > p.c1[0] && x < p.c2[0] && y > p.c1[1] && y < p.c2[1]

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left //x position within the element.
    const y = e.clientY - rect.top //y position within the element.

    console.log("image clicked at", `c: [${x}, ${y}]`)
    const updatedProblems = problems.map((p) => ({
      ...p,
      found: p.found || coordinatesMatch(p, x, y),
    }))

    setProblems(updatedProblems)

    const newestFound = problems.find((p) =>
      coordinatesMatch(p, x, y)
    )
    setMessage(newestFound ? newestFound.desc : message)
  }

  return (
    <>
      <p className="font2">
        {problems.filter((p) => p.found).length} / {problems.length} löydetty
        {problems.filter((p) => p.found).length === problems.length ? "! Voitit pelin!" : ""}
      </p>
      <div className="container">
        <img
          src={require(`./pictures/${picture}`)}
          alt="Problems"
          onClick={handleClick}
          className="image"
        />
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-box"
        >
          {problems.map((p) => {
            // console.log(p.c1[0], p.c1[1], p.c2[0], p.c2[1])
            const cx = (p.c1[0] + p.c2[0]) / 2
            const cy = (p.c1[1] + p.c2[1]) / 2
            const rx = (p.c2[0] - p.c1[0]) / 1.5
            const ry = (p.c2[1] - p.c1[1]) / 1.5
            return p.found ? (
              <ellipse
                key={[cx, cy]}
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                stroke="red"
                fill="transparent"
                strokeWidth="5"
              />
            ) : (
              <div key={[cx, cy]}></div>
            )
          })}
        </svg>
        <p className="font2">{message}</p>
      </div>
    </>
  )
}

// Game component
const Game = () => {
  return (
    <div className="game">
      <h1 className="font-link">Peli: Somen vaaranpaikat</h1>
      <p className="font2">
        Etsi ja klikkaa kuvasta kaikki kohdat, joissa paljastuu
        enemmän tietoa kuin olisi ehkä tarkoitus. Löydätkö kaikki
        kuusi vaaranpaikkaa?
      </p>
      <GameBoard
        picture="dangers.jpg"
        propProblems={[
          {
            c1: [7, 285],
            c2: [190, 320],
            desc: "Mieti kahdesti, haluatko kertoa murtovarkaille, milloin olet poissa kotoa.",
          },
          {
            c1: [57, 328],
            c2: [136, 376],
            desc: "Jos jaat kuvan tapahtumalipusta someen, joku toinen saattaa lähteä bilettämään sinun lipullasi!",
          },
          {
            c1: [305, 293],
            c2: [417, 353],
            desc: "Älä jaa kuvaa henkkareista! Näin ehkäiset identiteettivarkauksia.",
          },
          {
            c1: [424, 377],
            c2: [510, 418],
            desc: "Salasanat on pidettävä salassa.",
          },
          {
            c2: [704, 266],
            c1: [480, 187],
            desc: "Älä paljasta murtovarkaille, milloin kämppä on tyhjänä lomamatkan takia.",
          },
          {
            c2: [796, 109],
            c1: [723, 86],
            desc: "Vaikka varausnumerolla itsesään ei välttämättä tee mitään, kannattaa sekin varmuuden vuoksi pitää omana tietonaan.",
          },
        ]}
      />
    </div>
  )
}

export default Game
