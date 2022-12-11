import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";


export default function FeedbackForm() {
    const {handleNewFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit) {
            setBtnDisabled(false)
            setReview(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    },[feedbackEdit])

    const [review, setReview] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState()

    function handleReviewText(e) {
        if(review === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(review !== '' && review.length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setReview(e.target.value)
    }

    function handleChange(e) {
        setRating(Number(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(review.length > 10 && rating) {
            const newFeedback = {
                text: review,
                rating: rating,
            }

            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                handleNewFeedback(newFeedback)
            }
            setReview('')
            setRating(null)
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service?</h2>
                <RatingSelect select={rating} handleChange={handleChange}/>
                <div className="input-group">
                    <input 
                        type="text" 
                        value={review} 
                        onChange={handleReviewText} 
                        placeholder="Write a review"
                    />
                    <Button 
                        type="submit"
                        version="primary"
                        isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>

    )
}