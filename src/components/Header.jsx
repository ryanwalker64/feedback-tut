import { Link } from "react-router-dom";

export default function Header(props) {
   
  return (
    <header>
      <div className="container">
        <Link to='/'>
        <h2>{props.text}</h2>
        </Link>
      </div>
    </header>
  )
}


