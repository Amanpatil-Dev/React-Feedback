import { useState } from "react";
import Button from "../UI/Button"
import starSvg from "../../asset/icon-star.svg";

function FeedBackForm(props){
  const [initialIndex, setInitialIndex] = useState({ currentindex: -1 });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitFeedBack(initialIndex.currentindex+1,false)
      };
      const handleClick = (index) => {
        setInitialIndex({currentindex:index})
      };
    return (
        <div class="card-body">
        <img alt="starSvg" className="star" src={starSvg} />
        <h5 class="card-title my-2">{props.Data.title}</h5>
        {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p class="card-text">{props.Data.paragraph}</p>
        <div className="rating-main">
          {props.Data.rating.map((rating, i) => (
            <Button
              key={rating}
              onClick={handleClick.bind(null,i)}
              className={`rating-Button mx-1 ${
                initialIndex.currentindex === i ? "active" : "unactive"
              }`}
              type="button">
              {rating}
            </Button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <Button className="submit" type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
}

export default FeedBackForm