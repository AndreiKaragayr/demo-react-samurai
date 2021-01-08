import React from 'react'
import classes from './Post.module.css'
import avatar from '../../avatar.jpg'

const Post = (props) => {
    return (
        <article className={`${classes.item} ${classes.active}`}>
            <img src={avatar} alt=""/>
            {props.message}
            <div><span>{props.likesCount}</span></div>
        </article>
    )
}

export default Post