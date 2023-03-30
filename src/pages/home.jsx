import { Navbar } from "../components/navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Footer } from "../components/footer";
export function Home() {
  useEffect(() =>{
    ScrollReveal().reveal('.home__main',{
       duration: 3000,
       origin: 'top',
       distance:'100px'
    });

    ScrollReveal().reveal('home__fixed',{
      duration: 3000,
      origin: 'top',
      distance:'100px'
    })
  },[])
  return (
    <div className="home">
      <Navbar />
      <div className="home__fixed">
        ¿QUERES SABER MAS DE NOSOTROS? <br />
        <span>CLICK AQUI</span>
      </div>
      <main className="home__main">
        <div className="home__main-intro__container">
          <div className="home__main-intro__title">
            <h1>FINAL JUDGEMENT</h1>
          </div>
          <div className="home__main-intro__container-intro">
              <h3>LA ULTIMA PALABRA, LA TIENE EL JUEZ</h3>    
          </div>
        </div>
        <div className="home__main-match__container">
          <h1>BE <span>JUGDGED</span></h1>
        </div>
        <div className="home__main-description-container">
          <article className="home__main-description-subcontainer">
            <div className="home__main-description__circle-container">
              <div className="home__main-description__circle-container__circle"></div>
            </div>
            <main className="home__main-description__rectangle">
                <div className="home__main-description__rectangle-match__container">
                  <button className="home__main-description__rectangle-match__button">PLAY NOW</button>
                  <p>BE ONE MORE ANIMAL OF THE ANIMAL KINGDOM</p>
                </div>
            </main>
          </article>
        </div>
        
        <div className="home__main-history-container"></div>
      </main>
      <Footer/>
    </div>
  );
}
