import Navigation from "./Navigation";
import Header from "./Header";
import  Section from "./Section";
import Card from "./Card";

const HomePage = ()=>{
    return(
        <><Navigation/>
        <Header
         bigTitle="Lego Starwars" 
         smallTitle="May the brick be with you" 
         buttonText="Login"
         />
        <Section headerTitle="Our Kwalities" >
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"image="darthvader.jpg"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"image="stormtrooper.jpg"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"image="mandalorian.jpg"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"image="chewbacca.jpg"/>
        </Section>
        </>
    )
}


export default HomePage;