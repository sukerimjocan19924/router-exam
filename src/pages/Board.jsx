import React from 'react'
import "../components/styles/Board.css"
import { communityPosts } from '../data/post';

const Board = () => {
  return (
    <section>
      <div className="inner">

        <h2>community board</h2>
        <div className="post-wrap">
          
          {communityPosts.map(({ id, title, content })=>(
            <div className="post">
              <h3>
                {id}
              </h3>
              <h4>
                {title}
              </h4>
              <h5>
                {content}
              </h5>
            </div>
          ))}
        </div>
          
        
      </div>
    </section>
  )
}

export default Board