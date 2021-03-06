import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Popup } from './PopUp';


let popupRef = React.createRef()

  const onShowPopup = () =>{
    popupRef.show()
  }
  const onClosePopup = () => {
    popupRef.close()
  }

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    
    render(){
        const {onChange} = this.props;
        return(
            <View style={styles.searchBar}>
                <TextInput 
                    placeholder="Search here"
                    placeholderTextColor="#000"
                    color="#f4bf06"
                    autoCapitalize="none"
                    style={{flex:1,padding:0,borderColor:"#f4bf06"}}
                    onChangeText={(text) => this.setState({text})}
                    value = {this.state.text}
                    onSubmitEditing={(event) => this.props.onSubmitEditing(event, this.state.text)}
                >
                    
                </TextInput>
                <FontAwesome5 name="filter" size={24} color="black" style={styles.searchIcon} onPress={onShowPopup} onPressOut={onClosePopup} />
                <Popup title="Filter" ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}></Popup>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        position:'absolute', 
        marginTop:"8%", 
        flexDirection:"row",
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        backgroundColor: "#f4bf06",
      },
      searchIcon:{
        alignSelf:'center',
      },
})

Search.propTypes = { onSubmitEditing: PropTypes.func.isRequired }

export default Search;