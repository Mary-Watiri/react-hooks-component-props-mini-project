import React from 'react'
import Article from "./Article"

function ArticleList({blogContent}) {
  return (
    <div id = "articleList">
      <main>{blogContent.map( (posts) => <Article 
      key={posts.id} 
      title={posts.title}  
      date={posts.date} 
      preview={posts.preview} 
      minutes={posts.minutes}
      />)}</main>
    </div>
  )
}

export default ArticleList;