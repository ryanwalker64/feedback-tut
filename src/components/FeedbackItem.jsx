import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import  FeedbackContext  from "../context/FeedbackContext";

export default function FeedbackItem({feedback}) {

    const {handleDelete, editFeedback} = useContext(FeedbackContext)
    
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="close" onClick={() => handleDelete(feedback.id)}>
                <FaTimes color="purple" />
            </button>
            <button className='edit' onClick={() => editFeedback(feedback)}>
                <FaEdit color="purple" />
            </button>
            <div className="text-display"> {feedback.text}</div>

        </Card>
    )
}