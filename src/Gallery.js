import React from 'react';

class Gallery extends React.Component {
  constructor(){
    super();
    this.state = {
      imgsrc : []
    }
  }

  componentDidMount(){
    fetch('https://api.myjson.com/bins/15zfps')
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
            return <a href="/posts"><Post key={index} src={el.imageUrl} alt={el.alt}/></a>
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

export default Gallery;