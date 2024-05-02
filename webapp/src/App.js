import './App.css';
import img from './Anusha1.jpg'
import a from './a.JPG'
import b from './b.JPG'
import c from './c.JPG'
function App() {
  return ( <div className="Main">
 <div className="container">
  <div className="card1">
    <h5>Residence: Hyderabad</h5>
    <h5>Age: 18</h5>
    <div className="card2"><div>
    <div className="c1"><a href="https://github.com/Anusha-varma"><img  className="img" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt=""></img></a>
 <a href="https://www.linkedin.com/in/anusha-kucharlapati-362b97294"><img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt=""></img></a>
 <a href="https://www.instagram.com/anush.varma05?igsh=MXF2anIzYjF2eXhxbg=="><img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""></img></a>
 </div>

<br/>
<br/> <br/><br/>
  <div className="c2">
    <img className="img1"src={a}></img>
   <img className="img1"src={b}></img>
   <img className="img1"src={c}></img>  </div>
    <div className="A"><h4>Telugu</h4>
    <h4>English</h4>
    <h4>Hindi</h4></div>
  <br/></div>
  </div></div>
 <div> 
  <h1>Hi, I'm <h2 className="B">Anusha Kucharlapati</h2></h1>
<h2 className="C">-FULL STACK DEVELOPER</h2>
 </div>
  <img src={img} alt="" />
</div>
<div className="cont1">
<div className="card">
  <h3>Education</h3>
  <p className=""><i><u>Degree Program</u>: <br/></i>Bachelor of Technology [2022-2026]</p>
    <p><i><u>University</u>: <br/></i>Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology</p>
    <p><i><u>Major</u>: <br/></i>Computer Science and Engineering</p>
    <p><i><u>CGPA</u>: </i>9.3</p>
  
</div>
<div className="card">
<h3>Skills</h3>
  <h2><i>Web Development Languages:</i></h2>
  <p><ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>ReactJs</li>
  <li>Bootstrap</li>
  <li>ExpressJs</li>
  <li>NodeJs</li>
  </ul></p>
  <h2><i>Programming languages:</i></h2>
<p><ul>
  <li>C</li>
  <li>Java</li>
  <li>Python</li>
  </ul></p>
</div>

<div className="card">
<h3>Projects</h3>
 <h2><i>Web pages:</i></h2>
  <p><ul>
  <li>Blog App</li>
  <li>Weather App</li>
  <li>Responsive Web pages</li>
  </ul></p>
  <h2><i>Projects:</i></h2>
  <p><ul>
  <li>Blood Bank Management System (using SQL)</li>
  <li>Spotify Clone App (using Java)</li>
  <li>Analasis of Global Suicides Rate (using Tableau)</li>
  </ul></p>
</div>
</div>
</div>
  );
}

export default App;
