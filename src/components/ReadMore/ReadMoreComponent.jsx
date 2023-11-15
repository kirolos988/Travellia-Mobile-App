import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
const ReadMoreComponent = ({ text, numberOfLines = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: 'white', fontWeight: '800' }}>About :</Text>
      <Text
        numberOfLines={isExpanded ? undefined : numberOfLines}
        style={styles.articleText}
      >
        {text}
      </Text>
      {text.length && (
        <TouchableOpacity onPress={handleReadMoreToggle}>
          <Text style={styles.readMoreButton}>
            {isExpanded ? (
              <Text
                style={[
                  styles.readMoreButton,
                  { textDecorationLine: 'underline' },
                ]}
              >
                Read Less {String.fromCharCode(0x25b2)}
              </Text>
            ) : (
              <Text
                style={[
                  styles.readMoreButton,
                  { textDecorationLine: 'underline' },
                ]}
              >
                Read More {String.fromCharCode(9660)}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  articleText: {
    overflow: 'hidden',
    marginTop: 5,
    width: '100%',
    color: 'white',
  },
  readMoreButton: {
    color: 'white',
    marginTop: 5,
  },
});

export default ReadMoreComponent;
