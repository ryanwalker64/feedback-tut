import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    function handleDelete(id) {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter(item => item.id !== id ))
        }
      }
    
    function handleNewFeedback(newFeedback) {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    //set item to be updated
    function editFeedback(item) {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    //update feedback item
    function updateFeedback(id, updItem) {
        setFeedback(feedback.map(item => {
            return item.id === id ? {...updItem, id: id} : {...item} 
        }))
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        handleDelete,
        handleNewFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext