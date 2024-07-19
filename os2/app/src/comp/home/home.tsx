import './home.css'

function Home() {
  return (
    <section
        className="homebar blue"
        id="homebar"
        aria-label="Homebar"
    >
        <div role="button" aria-label="button" id="home-button" className="home-button blue">
        <i className="home:icon white"></i>
        </div>
    </section>
  )
}

export default Home