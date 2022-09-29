import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import  Section from "../components/Section/Section";
import Card from "../components/Card/Card";

const HomePage = ()=>{
    return(
        <><Navigation/>
        <Header
         bigTitle="Lego Starwars" 
         smallTitle="May the brick be with you" 
         buttonText="Login"
         />
        <Section headerTitle="Our Kwalities" >
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
        </Section>
        </>
    )
}


export default HomePage;