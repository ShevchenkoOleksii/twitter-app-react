import React from "react";
import './post-list.css';
import {ListGroup} from 'reactstrap';
import PostListItem from '../post-list-item';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
                {/* <PostListItem 
                label={item.label}
                important={item.important} /> */}
            </li>
        )
    })
    return (
        <ListGroup className='app-list'>
            {elements}
            {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}
            {/* <PostListItem label='Going to learn JS'/> */}
            {/* <PostListItem label='Going to learn Java'/> */}
        </ListGroup>
    )
}

export default PostList;