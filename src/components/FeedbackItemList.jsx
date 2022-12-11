import { useContext } from "react";
import  FeedbackContext  from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackItemList() {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) return <p>No Feedback Yet</p>

    return (
        <div className="feedback-list">
          <AnimatePresence>
          {feedback.map(item => {
            return  <motion.div
            key={item.id}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            >
              <FeedbackItem  key={item.id}  feedback={item}/>
            </motion.div>
            })}
          </AnimatePresence>
        </div>
    )
}