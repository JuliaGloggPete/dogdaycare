import AllDogs from './AllDogs';
import './AllDogs.css';
import './Welcome.css';

function Welcome(props) {



    return (
        <section id='welcome_section' 
       
        >

            <h2 style={{fontFamily:'paw-wow-font', fontSize:'44px'}}>HUNDDAGIS "TUGGBEN"</h2>

            <div className="circle"> <img src={props.pawImage} alt="Paw" /> </div>
            <div>
                <p>Välkommen.</p>
                <button onClick={props.nextScreen}>Logga in!</button>
            </div>
            <footer>    
            <div>
                <address>
                    <strong>Adress</strong> <br />
                    Hundgata 3 <br></br>
                    123 456 Hundstaden
                    <br />
                    Tel: 1234 987654


                </address>
            </div>
            <div>
                <strong>Socialmeadia: </strong><br />
                fakebook <br />
                finstagram <br />
                fakedIN <br />
            </div>

            </footer>

            



        </section>
        
    );

  
       
    
}

export default Welcome;