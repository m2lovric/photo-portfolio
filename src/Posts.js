import React from 'react';
import './Posts.css';

class Posts extends React.Component {
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
      <section className="Posts">
        {
          this.state.imgsrc.map((el, index) => {
            return <PostsImg key={index} src={el.imageUrl} alt={el.alt}/>
          })
        }
      </section>
    )
  }
}

const PostsImg = ({src,alt}) => {
  return(
    <article className="PostsImg">
      <img src={src} alt={alt}/>            
    </article>
  )
}

export default Posts;