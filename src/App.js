import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackItemList from "./components/FeedbackItemList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI'/>

        <div exact="true" className="container">
        <Routes>
            <Route path="/"  element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackItemList  />
              </>
            } />

            <Route path='/about' element={<AboutPage />}/>

          </Routes>
        </div>
          <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
