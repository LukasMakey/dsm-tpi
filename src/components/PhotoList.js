import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

function PhotoList({ route }){
  const [photo, setPhoto] = useState( {photos: null} );

  const renderAlbums = () => {
    return photo.photos.map(photo =>
      <PhotoDetail key={photo.title} title={photo.title} imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} photoId={photo.id} />
   )};

  useEffect(() => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
      .then(response => setPhoto({ photos: response.data.photoset.photo }));
    
    }, [route]);

    console.log(photo);

    if (photo.photos === null) {
          return (<View style={{ flex: 1 }}>
            <Text>
                          Loading...
            </Text>
                  </View>)
      };
    
    return(
      <View style={{ flex: 1 }}>
          <ScrollView>
              {renderAlbums()}
          </ScrollView>
      </View>);

  };

export default PhotoList;
