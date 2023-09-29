import { useEffect } from "react";
import './AllDogs.css';

const AllDogs = (props) => {

    const dogArray = props.dogs
    .filter(dog => dog.present) 
    .concat(props.dogs.filter(dog => !dog.present));

    //console.log(dogArray);

    useEffect(() => {

        createDog(dogArray);
        }, []);


   // const overlay =document.getElementById('overlay');
    //const overlayImg = document.querySelector('#overlay img');
    //const overlayTitle = document.querySelector('#overlay h2');



    const createDog = (dogs) =>{

        const dogsSection = document.getElementById('allDogs');
        const overlay =document.getElementById('overlay'); 

        dogs.forEach(dog => {

            const dogElement = createDogElements(dog);
           
          
            dogsSection.appendChild(dogElement);

            dogElement.addEventListener('click', () =>{
              
                overlay.appendChild(dogElement)
                //dogDescription.className = "shown";
                console.log('syntax problem')
                overlay.classList.toggle('show')
                overlay.addEventListener('click', () => {
                  overlay.removeChild(dogElement);
                  overlay.classList.remove('show');
              });
             })
  
        
        });
      
      
       
      }

  


      const dogDetail = (dogElement) =>{

        overlay.appendChild(dogElement)
        //overlayImg = img;
        overlay.classList.toggle('show')
    


      }

      const createDogElements = (dog) =>{

        const dogElement = document.createElement('div');
        dogElement.className ='dog';

        const dogHeading = document.createElement('h2');
        dogHeading.innerHTML = `${dog.name} ${"\u{1F43E}"}`;

     const dogPicContainer = document.createElement('div');
       if (dog.present){
       dogPicContainer.className='dogPicIn';}
       else{
        dogPicContainer.className='dogPicOut';}
       
       
       

        const dogPic = document.createElement('img')
        dogPic.src = dog.img;
        dogPic.alt = dog.name;

        

        dogPic.onload = function(){
        if (dogPic.height > dogPic.width){
            dogPic.className = 'dogWidth'
        }
        
        else{
            dogPic.className = 'dogHeight'
        }
    };
        dogPicContainer.appendChild(dogPic)
        const dogDescription = document.createElement('div');
        const dogSex = document.createElement('p')
       

        if(dog.sex === "female"){
            
        dogSex.innerText = `Tik`
        ;}
        else{
            //dogSex.innerText = `Kön: hane ${dog.sex}`;}
      
            dogSex.innerText = `Hane`;}
      
        ;

        dogDescription.appendChild(dogSex);
        
        const chipNumber = document.createElement('p')
        chipNumber.innerText =`Chipnumret: ${ dog.chipNumber}`; 
        dogDescription.appendChild(chipNumber);
      
        const ownerInformation = document.createElement('div')
        const ownerHeading = document.createElement("h2");
        ownerHeading.innerText = "Ägare"
        ownerInformation.appendChild(ownerHeading);
        const ownerName = document.createElement('p')
        ownerName.innerText = `${dog.owner.name} ${dog.owner.lastName}`; 
        ownerInformation.appendChild(ownerName);
      
      
         const ownerPhone = document.createElement('p')
        ownerPhone.innerText = `Tel.: ${dog.owner.phoneNumber}`; 
        ownerInformation.appendChild(ownerPhone);
        
        //dogDescription.className = 'hidden';
      
      dogDescription.appendChild(ownerInformation)
       
       dogElement.appendChild(dogPicContainer);
      
        dogElement.appendChild(dogHeading);

        dogElement.appendChild(dogDescription);

   
    dogDescription.className = "hidden"
       dogElement.addEventListener('click', () => {


           dogDescription.classList = "show";
  
              console.log("HEj")
             });
     
        return dogElement;


      }


console.log({dogArray});
    return (
        <section id="allDogs">
           <div className="h3Dog"> <h3> Våra hundar</h3></div>
           
           
           <div id= "overlay">
           

           </div>
        </section>
        

    )
}

export default AllDogs;