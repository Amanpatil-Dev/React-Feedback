import React, { useReducer } from "react";
import FeedBackForm from "./Component/FeedBackForm/FeedBackForm";
import ThankYouCard from "./Component/ThankYouCard/ThankYouCard";

function reducerFunction(state, action) {
  console.log(state, action);
  if (action.type === "HIDE_FEEDBACK") {
    return {
      rating: action.rating,
      showFeedbackForm: action.showFeedbackForm,
    };
  }
  if (action.type === "SHOW_FEEDBACK") {
    return {
      rating: action.rating,
      showFeedbackForm: action.showFeedbackForm,
    };
  }
}
function App() {
  const [show, dispatchShow] = useReducer(reducerFunction, {
    rating: 0,
    showFeedbackForm: true,
  });

  const feedBackHandler = (rating, showFeedbackForm) => {
    console.log(rating, showFeedbackForm);
    dispatchShow({ type: "HIDE_FEEDBACK", rating, showFeedbackForm });
  };
  const showFeedbackFormf = () => {
    dispatchShow({ type: "SHOW_FEEDBACK", rating: 0, showFeedbackForm: true });
  };

  const Data = {
    title: "How did we do?",
    paragraph:
      "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
    rating: [1, 2, 3, 4, 5],
  };

  return (
    <React.Fragment>
      <div class="card mx-auto mt-3" style={{ width: "20rem" }}>
        {show.showFeedbackForm ? (
          <FeedBackForm Data={Data} onSubmitFeedBack={feedBackHandler} />
        ) : (
          <ThankYouCard showFeedback={showFeedbackFormf} rating={show.rating} />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
