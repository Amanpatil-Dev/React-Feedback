import thankYou from '../../asset/illustration-thank-you.svg'

function ThankYouCard(props){
    return (
        
        <div class="card-body thankyou">
        <img alt="starSvg" className="thankyou" src={thankYou} />
        <p>you have selected out {props.rating} of 5</p>
        <h5 class="card-title my-2">Thank You!</h5>
        <p class="card-text thankyou-text ">We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>
        <button onClick={props.showFeedback}>back</button>

      </div>
    )
}

export default ThankYouCard