import "./about.css"

const About = () => {
  return (
    <div className="about">
      <h1>Tietoa kampanjasta</h1>
      <div className="blue box">
        <p>
          Tavoitteemme on tuoda Somekäyttäjien tietoon mahdollisia
          tietoturva uhkia kuvien jakamiseen liittyen
        </p>
        <p>
          Jakaessa someen kuvia, tulee harvoin kiinnittäneensä
          huomiota kuvan taustaan ja mitä kaikkea siellä oikein näkyy.
          Tämän kumminkin haluamme muuttaa! Pyrimme saamaan
          somenkäyttäjät kiinnittimään enemmän huomiota jakamansa
          kuvien ja videoiden sisältöön ottaen etenkin huomioon
          taustalla näkyvät asiat. Kohderyhmänämme on pääasiassa 13-20
          vuotiaat.
        </p>
      </div>

      <div className="pink box">
        <p>
          Emme halua toitottaa ihmisille kuinka heidän pitäisi
          elämäänsä elää ja mitä saisi tai ei saisi julkaista omasta
          elämästä, mutta haluamme ihmisten tietävän kuinka mm. oman
          ajo- tai pankkikortin pitäminen puhelimen läpinäkyvissä
          kuorissa saattaa näyttää yksityisiä tietoja peilikuvassa.
          Tai kuinka oman talon esittely somessa voi ola riskialtista,
          jos osiotteen on jo jakanut toisessa kuvassa. Tähän
          yhdistettynä tulevasta lomamatkasta ja omasta omaisuudesta
          leveily saattavat aiheuttaa hyvinkin suuren riskin joutua
          murtovarkaiden kohteeksi.
        </p>
        <p>
          Arkaluontoista sisältöä on erityisesti kaikki
          pankkitunnukset, sekä salasanat. Oma koko nimi saattaa myös
          olla kiva pitää omana tietona, ja yhdistettynä tähän myös
          omaa henkilötunnusta ei välttämättä kannattaisi jakaa koko
          kansalle. Vaikka pankkitunnukset ovatkin pääasiassa
          korvanneet hetun käytön virallisissa tunnistautumisissa, on
          henkilötunnus sen verran yksilöivä ja arkaluontoinen tieto,
          ettei sitä kannattaisi kaikille antaa.
        </p>
      </div>
    </div>
  )
}

export default About
