import {Component} from 'react'
import CommentItems from './CommentItem'
import './index.css'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <h1>Comments</h1>
          <div className="Upper-Part">
            <div>
              <form className="sub-upper-part">
                <p className="m-t-b">Say something about 4.0 Technologies</p>
                <input className="m-t-b inEl1" placeholder="Your Name" />
                <textarea
                  rows="8"
                  cols="35"
                  className="m-t-b inEl2"
                  placeholder="Your Comment"
                />
                <button className="m-t-b" type="submit">
                  Add Comment
                </button>
              </form>
            </div>

            <div>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              />
            </div>
          </div>
          <div className="line">
            <hr />
          </div>
        </div>

        <div className="lower-part">
          <div className="count">
            <p>
              <span>0</span> Comments
            </p>
          </div>
          <ul>
            <CommentItems CommentItemDetails={CommentItemDetails} />
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
