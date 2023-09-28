import './AllDogs.css';
import './Welcome.css';

function Welcome(props) {
    const sectionStyle = {
        backgroundImage: `url(${props.backgroundImage})`, // Provide the image URL as a string
    };


    return (
        <section id='welcome_section' 
        //style={sectionStyle}
        >

            <h2>Hunddagis tuggben</h2>

            <div className="circle"> <img src={props.pawImage} alt="Paw" /> </div>
            <div>
                <p>Välkommen.</p>
                <button onClick={props.nextScreen}>Logga in!</button>
            </div>
        </section>
    );
}

export default Welcome;