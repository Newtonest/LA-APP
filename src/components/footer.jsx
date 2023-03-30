import ig from '../images/ig.png';
export function Footer (){
    return(
        <footer className="footer">
            <section className="footer__download-container">
                <div className="footer__download-text__container">
                  <h1>TAKE THE JUDGE WITH YOU</h1>
                  <p>every time and place</p>
                </div>
                <div className="footer__download-images__container">
                    <div className="footer__download-images__container-container">
                      <div className="footer__download-images-uno">
                          <p>follow us for news</p>
                          <img src={ig} alt="" />
                      </div>
                    </div>
                    <div className="footer__download-images__container-container">
                      <div className="footer__download-images-dos">
                        <p>Download the app</p>
                       <img src={ig} alt="" />
                      </div>
                    </div>
                </div>
            </section>
            <section className="footer__options-container">
               <ul>
                <li>ABOUT THE JUDGEMENT</li>
                <li>HELP US IMPROVE</li>
                <li>SERVER STATUS</li>
                <li>SUPPORT TEAM</li>
                <li>COMPETITION </li>
               </ul>
            </section>
            <section className="footer__second-container">
              <div className="footer__second-redes__container"></div>
              <div className="footer__second-rigths-container"></div>
            </section>
        </footer>
    )
}