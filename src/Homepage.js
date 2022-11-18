import Navigation from "./Navigation";
import Header from "./Header";
import  Section from "./Section";
import Card from "./Card";
import About from "./About";

const HomePage = ()=>{
    return(
        <><Navigation/>
        <Header
         bigTitle="Walt Disney" 
         smallTitle="It all started with a mouse." 
         buttonText="Login"
         />
             <Section headerTitle="about" > 

            <About
             
            />
         <img src="" alt="" />
        </Section>
        <Section headerTitle="features" >
       <img src="data:image/png;base64,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"></img>
        </Section>
        <Section headerTitle="Abonnementen" >
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
            <Card text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa quos, aspernatur asperiores porro dolorum ut aperiam voluptatem dolorem voluptate facilis quam praesentium consectetur delectus inventore quae. Nobis, nemo perferendis?"/>
    
        </Section>
        </>
    )
}


export default HomePage;