// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <div className="bg-container">
      <div className="home-container">
        <Header />
        <div className="img-para-container">
          <div>
            <h1 className="heading">Clothes That get YOU noticed</h1>
            <p className="para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are.So,celebrate the season new and
              exciting fashion in yoyr own way.
            </p>
            <button type="button">Shop Now</button>
            <br />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            alt="clothes that get you noticed"
            className="clothes-img"
          />
        </div>
      </div>
    </div>
  </>
)
export default Home
