import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

export default function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this proejct</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis hic voluptates earum ipsa? Esse nobis maiores, ratione vitae doloribus sed quam ipsum eveniet nulla tempore magni hic asperiores error.</p>
                <Link to='/'>Back to Home</Link>            
            </div>

        </Card>
    )
}