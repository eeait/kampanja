import "./about.css"

const About = () => {
  return (
    <div className="about">
      <h1 className="tietoakampanjasta">TIETOA KAMPANJASTA</h1>
      <div className="blue box">
        <p>
          <span className="font3">
            Tavoitteemme on tuoda sosiaalisen median käyttäjien
            tietoon mahdollisia tietoturvauhkia kuvien jakamiseen
            liittyen.
          </span>
        </p>
        <p>
          <span className="font2">
            Jakaessa someen kuvia, tulee harvoin kiinnittäneensä
            huomiota kuvan taustaan ja mitä kaikkea siellä oikein
            näkyy. Tämän kumminkin haluamme muuttaa! Pyrimme saamaan
            somenkäyttäjät kiinnittimään enemmän huomiota jakamansa
            kuvien ja videoiden sisältöön ottaen etenkin huomioon
            taustalla näkyvät asiat. Kohderyhmänämme on pääasiassa
            13-20 vuotiaat.
          </span>
        </p>
      </div>

      <div className="pink box">
        <p>
          <span className="font2">
            Emme halua toitottaa ihmisille kuinka heidän pitäisi
            elämäänsä elää ja mitä saisi tai ei saisi julkaista omasta
            elämästä, mutta haluamme ihmisten tietävän kuinka mm. oman
            ajo- tai pankkikortin pitäminen puhelimen läpinäkyvissä
            kuorissa saattaa näyttää yksityisiä tietoja peilikuvassa.
            Tai kuinka oman talon esittely somessa voi ola
            riskialtista, jos osiotteen on jo jakanut toisessa
            kuvassa. Tähän yhdistettynä tulevasta lomamatkasta ja
            omasta omaisuudesta leveily saattavat aiheuttaa hyvinkin
            suuren riskin joutua murtovarkaiden kohteeksi.
          </span>
        </p>
        <p>
          <span className="font2">
            Arkaluontoista sisältöä on erityisesti kaikki
            pankkitunnukset, sekä salasanat. Oma koko nimi saattaa
            myös olla kiva pitää omana tietona, ja yhdistettynä tähän
            myös omaa henkilötunnusta ei välttämättä kannattaisi jakaa
            koko kansalle. Vaikka pankkitunnukset ovatkin pääasiassa
            korvanneet hetun käytön virallisissa tunnistautumisissa,
            on henkilötunnus sen verran yksilöivä ja arkaluontoinen
            tieto, ettei sitä kannattaisi kaikille antaa.
          </span>
        </p>
      </div>
    </div>
  )
}

export default About
