import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { useNavigation } from '@react-navigation/native';

function AlbumList(){

  const [photoSet, setPhotoSet] = useState({ photoset: null });

  const navigation = useNavigation()

  const renderAlbums = () => {
    return photoSet.photoset.map(album => (
      <AlbumDetail
        navigation={navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
      />
    ));
};

  useEffect(() => {
  axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
      )
      .then(response =>
        setPhotoSet({photoset: response.data.photosets.photoset}),
      );
    }, [navigation]);
  
    console.log(photoSet);


    if (photoSet.photoset === null) {
        return (<Text>
          Loading...
        </Text>)
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {renderAlbums()}
        </ScrollView>
      </View>
    );
  };

export default AlbumList;
