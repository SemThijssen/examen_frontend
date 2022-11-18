import "./Card.css";
const Card = (props) => {
   let cardImage = <img src={"/img/Walt_Disney.jpg" + props.image} alt="wabgftrr" />;
    if (props.image === undefined){
       cardImage = <img src={"/img/Walt_Disney.jpg"} alt="walt" />;
    }
    return(
        <article class="card">
            <figure class="card__figure"> 
                {cardImage}
            </figure>
            <section class="card__section">
            <p>{props.text ||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse modi in adipisci, iusto cupiditate sed ab temporibus magni odio voluptatem, exercitationem laborum, corporis quisquam illum aperiam ad obcaecati sequi."}</p>

            </section>
           
        </article>
    )
}
export default Card;