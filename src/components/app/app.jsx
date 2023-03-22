import './app.scss'
import { Main, Feature, Freelancer, Footer, Slider } from "../"

const App = () => {
  return (
    <div className="app">
        <Main/>
        <Feature/>
        <Freelancer/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default App