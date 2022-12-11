import { useState } from "react"

export default function RatingSelect(props) {
    

    return (
        <div>
            <ul className='rating'>
                {Array.from({ length: 10 }, (_, i) => (
                    <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={props.handleChange}
                        checked={props.select === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}