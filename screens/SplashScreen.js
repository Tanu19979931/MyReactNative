import React, {Component} from 'react'
import {View, ImageBackground, Image} from 'react-native'
import {icons,images, SIZES, COLORS, FONTS} from '../constants'

export default class SplashScreen extends Component{
    constructor(props){
        super (props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("Home");
        },1000);
    }

    render(){
        return(
            <ImageBackground
            source = {images.back}
            style = {{
                width : '100%',
                height : '100%'
            }}
            >
                
            </ImageBackground>
        )
    }
}