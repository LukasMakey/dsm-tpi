import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const CommentDetail = ({ author, content }) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    childContentStyle,
    childTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{author}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={childTextStyle}>{content}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  childContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  childTextStyle: {
    fontSize: 14
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default CommentDetail;
