import img1 from "../img/antonio.png";
import img2 from "../img/mawuli2.png";
import img3 from "../img/hotelvivi.png";
import img4 from "../img/devtech.png";
import img5 from "../img/blacko.png";
import img6 from "../img/scordy.png";
import img7 from "../img/game-island.png";
import img8 from "../img/wordbox.png";


function Allprojects() {
    let year = new Date().getFullYear()
    return ( 
        <div className="projects">
        <p className="projects-title">All Projects✨</p>
        <div className="project1" id="projects">
          <div className="project-about">
            <p className="project-name">Mawuli's Art🎨</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
          <img src={img2} alt="" />
        </div>
        <div className="project2" id="projects">
          <img src={img1} alt="" />
          <div className="project-about">
            <p className="project-name">Antonio Fotografo📸</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
        </div>
        <div className="project3" id="projects">
          <div className="project-about">
            <p className="project-name">Hotelvivi🏨</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
          <img src={img3} alt="" />
        </div>
        <div className="project4" id="projects">
          <img src={img4} alt="" />
          <div className="project-about">
            <p className="project-name">DevTech💻</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
        </div>
        <div className="project5" id="projects">
          <div className="project-about">
            <p className="project-name">Blacko🎵</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
          <img src={img5} alt="" />
        </div>
        <div className="project6" id="projects">
          <img src={img6} alt="" />
          <div className="project-about">
            <p className="project-name">Scordy Shots📸</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
        </div>
        <div className="project7" id="projects">
          <div className="project-about">
            <p className="project-name">Game Island🎮</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
          <img src={img7} alt="" />
        </div>
        <div className="project8" id="projects">
          <img src={img8} alt="" />
          <div className="project-about">
            <p className="project-name">WordBox🔠</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              sapiente facere repudiandae inventore. Aut mollitia ipsum, eius modi
              hic beatae maiores ad sequi dolor debitis, ipsam odit asperiores
              temporibus?
            </p>
            <div className="project-links">
              <a href="">View Code</a>
              <a href="">Live Link</a>
            </div>
          </div>
        </div>
        <div className="more">
          <p>&copy; {year} - All projects were developed by Abrusu Collins</p>
        </div>
      </div>
     );
}

export default Allprojects;