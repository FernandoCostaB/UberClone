import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {

    state = {
        searchFocused: false
    }


  render() {
      const { searchFocused } = this.state;
      const { onLocationSelected } = this.props;
    return (
        <GooglePlacesAutocomplete 
            placeholder="Para onde vamos?"
            placeholderTextColor="#333"
            onPress={onLocationSelected}
            query={{
                key: 'AIzaSyA9Mt_vcgDMNrPrLG306X_qURWjVg0N5Sk',
                language: 'pt'
            }}
            textInputProps={{
                onFocus: () => {
                    this.setState({ searchFocused: true });
                  },
                  onBlur: () => {
                    this.setState({ searchFocused: false });
                  },
                  autoCapitalize: 'none',
                  autoCorrect: false
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: Platform.select({ ios: 60, android: 40 }),
                    width: '100%'
                },
                texteInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 54,
                    margin: 10,
                    borderRadius: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 10,
                    marginRight: 10,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: '#DDD',
                    fontSize: 18
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 20,
                    marginLeft: 10,
                    marginRight: 10,
                },
                description: {

                },
                row: {
                    padding: 20,
                    height: 58
                },
            }}
        />
    );
  }
}
