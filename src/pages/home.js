import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">
        <span className="font">MIETI, MITÄ POSTAAT SOMEEN</span>
      </h1>

      <h2 className="introteksti">
        - Kampanja informoimaan oman yksityisyyden vaarantamisesta
        omien kuvien jakamisella.
      </h2>

      <div className="blue box">
        <p>
          <span className="font3">
            Tiedätkö mitä selfiesi taustalla oikeasti näkyy?
          </span>
        </p>
        <p>
          <span className="font2">
            Sosiaaliseen mediaan julkaisemiseen liittyy paljon
            riskejä, jos julkaistavaa sisältöä ei pahemmin mieti.
            Usein mm. selfien taustaakin kannattaa vilkaista, ettei
            siellä näy yksityisyyttä vaarantavia asioita, kuten ajo-
            tai pankkikorttia, tai kodin osoitetta.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Home
