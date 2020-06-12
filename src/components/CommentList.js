import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import CommentDetail from './CommentDetail';

function CommentList({ route }){
  const [comment, setComment] = useState({ comments: null });

  const renderComments = () => {
    return comment.comments.map(comment =>
      <CommentDetail key={comment.id} author={comment.realname} content={comment._content} datecreate={comment.datecreate} />
   )};

  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${route.params.photoId}&format=json&nojsoncallback=1`)
      .then(response => setComment({ comments: response.data.comments.comment }));
    
    }, [route]);

    console.log(comment);

    if (comment.comments === null) {
          return (<View style={{ flex: 1 }}>
            <Text>
                          Loading...
            </Text>
                  </View>)
      };
    
    return(
      <View style={{ flex: 1 }}>
          <ScrollView>
              {renderComments()}
          </ScrollView>
      </View>);

  };

export default CommentList;
