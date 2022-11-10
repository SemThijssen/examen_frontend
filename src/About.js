import "./About.css";
const About = (props) => {
   
    return(
        <article class="about">
 
              <section class="about__section">
          
            <p>{props.text ||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse modi in adipisci, iusto cupiditate sed ab temporibus magni odio voluptatem, exercitationem laborum, corporis quisquam illum aperiam ad obcaecati sequi."}</p>
            </section>
           
        </article>
        
    )
}
export default About;