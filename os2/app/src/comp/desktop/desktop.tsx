import './desktop.css'

function Desktop() {
   //Set it to browser window
   window.innerHeight = 
    window.outerHeight -
    window.innerHeight +
    window.outerHeight;
  // Set innter width
  window.innerWidth =
    window.outerWidth -
    window.innerWidth +
    window.outerWidth;
  
  return (
    <section
        className="desktop bg:img:purple-cubes"
        id="desktop"
        aria-label="Desktop"
    >
        <div className="bg:grad:lime icon-box">
            <i className="home-icon bg:grad:blue" ></i><br />
            <span className="title">Home</span>
        </div>
        
    </section>
  )
}


export default Desktop