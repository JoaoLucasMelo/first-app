import React, { Component } from 'react';
import axios from 'axios';

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"

class ApiPostsTest extends Component {
    state = { posts: [] } 

async componentDidMount() {
  const res = await axios.get(apiEndPoint)
  let posts = res.data
  this.setState({posts: posts})
}

    render() { 
        return (
        <div>
            <h1>API Tests (Get Posts)</h1>
            <div className='postsbox border border-3 border-primary rounded my-4 p-3 scrollbar'>
                {this.state.posts.map( post => {
                    return <div key={post.id}>
                     <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </div>} )}
            </div>
        </div>
        );
    }
}
 
export default ApiPostsTest;