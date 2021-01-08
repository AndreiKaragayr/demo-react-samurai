import React from 'react'
import styles from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validations";
import {Textarea} from "../../common/formsControls/textarea/Textarea";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {

  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles.group}>
        <Field
          placeholder={'Post message'}
          name="newPostBody"
          cols="30"
          rows="10"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({
  form: 'newPost'
})(PostForm)

const MyPosts = React.memo(props => {

  console.log('RENDER My Post')

  let renderPosts = [...props.posts].reverse().map((post, index) => {
    return <Post message={post.message} likesCount={post.like} key={index}/>
  })

  const addNewPost = (values) => {
    console.log(values)
    props.addPost(values.newPostBody)
  }

  return (
    <div className={styles.postsContainer}>
      My post

      <PostReduxForm onSubmit={addNewPost} />

      <div className={styles.posts}>
        {renderPosts}
      </div>
    </div>
  )
})

export default MyPosts
