import React from 'react';
import './App.css';

class Gallery extends React.Component {
  constructor(){
    super();
    this.state = {
      imgsrc : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3030/json/insta-dora-barker-posts.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({imgsrc : data});
    })
  }
  render(){
    return(
      <section className="Gallery">
        {
          this.state.imgsrc.map((el, index) => {
            return <Post key={index} src={el.imageUrl} alt={el.alt}/>
          })
        }
      </section>
    )
  }
}

const Post = ({src, alt}) =>{
  return(
    <article className="Post">
      <div className="img-mask"></div>
      <img src={src} alt={alt}/>
      <p className="text">HYPEBAE</p>
    </article>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="logo">
          <h1>Dora Barker</h1>
        </section>
        <nav>
          <ul>
            <li>home</li>
            <li>social</li>
            <li>about</li>
          </ul>
        </nav>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
