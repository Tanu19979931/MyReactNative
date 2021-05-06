import {
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    CheckBox,
    Image,
    TextInput
}from 'react-native'
import {icons,images, SIZES, COLORS, FONTS} from '../constants'
import React from 'react'
const deviceHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get('window').width;
const avliableWidth = (windowWidth-50);
const itemData = require('./types.json')
export class BottomPoupup extends React.Component{
constructor(props){
    super(props)
    this.state = {
        show: false,
        data: itemData
    }
}
show = () => {
    this.setState({show: true})
}
close = () => {
    this.setState({show: false})
}

renderOutsideTouchable(onTouch){
    const view = <View style = {{flex: 1, width: '100%'}}/>
    if(!onTouch) return view
    return(
        <TouchableWithoutFeedback onPress = {onTouch} style = {{flex:1, width: '100%'}}>
            {view}
        </TouchableWithoutFeedback>
    )
}

onchecked(id){
const data = this.state.data
const index = data.findIndex(x=>x.id===id);
data [index].checked = !data[index].checked
this.setState(data)
}
renderItems(){
    return this.state.data.map((item, key)=>{
        return(
           
                <TouchableOpacity style = {{flexDirection : 'row',
                 textAlign: 'center', height: 30, marginTop : 20}} key = {key}
                 onPress ={()=>{this.onchecked(item.id)}}
                 >
                <Text style={{alignSelf: 'center'}}>{item.key}</Text>
                
                <CheckBox value = {item.checked} style = {{ position: 'absolute', right: 0}} />
                </TouchableOpacity>

        )
    })
}


render () {
    let {show} = this.state
    const {onTouchOutside, title} = this.props

    return(
        <Modal
        animationType= {'fade'}
        transparent = {true}
        visible = {show}
        onRequestClose = {this.close}
        >
            <View style={{flex:1,backgroundColor: '#000000AA', justifyContent: 'flex-end'}}>
                {this.renderOutsideTouchable(onTouchOutside)}
                <View style ={{
                    backgroundColor : '#FFFFFF',
                    width : '100%',
                    borderTopRightRadius : 10,
                    borderTopLeftRadius : 10,
                    paddingHorizontal : 10,
                    maxHeight : deviceHeight *0.8,
                   

                }}>
                    <View style ={{
                        height : 60,
                        marginLeft : 16,
                        marginRight : 16
                    }}>
                        <Text style={{fontSize: 20, marginTop : 20, color: COLORS.black}}>{title}</Text>
                    </View>
                    <View 
        style ={{
            height:40,
            width:avliableWidth,
            borderColor: COLORS.lightGray5,
            borderWidth:1,
            borderRadius:10,
            marginTop:10,
            marginLeft: 18,
            marginRight: 20,
            flexDirection: 'row'
            }}
            >
            <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                    width: 15,
                    height: 15,
                    marginLeft:7,
                    marginTop : 9,
                    alignItems: 'center',
                    tintColor : '#f51871'
                }}
            />
            <TextInput
             placeholder = "Search your cuisine..."
            style={{
                width: "100%",
                height: "100%"
            }}
               
            />

            
            

        </View>
        <ScrollView style = {{marginTop: 20,  marginLeft : 16,
                marginRight : 10}}
                showsVerticalScrollIndicator = {false}>
                    <Text style = {{
                        fontWeight : 'bold'
                    }}>POPULAR</Text>
                    {this.renderItems()}
                    </ScrollView>
                    <View
                     style={{
                         height :80,
                         borderTopWidth: 1,
                         marginLeft : 0,
                         marginRight : 0,
                         flexDirection  :'row'

                     }}>
                         <Text style = {{fontSize: 15, marginTop:32.5, marginLeft : 30, 
                            color: '#f51871'}}>Clear All</Text>
                         <View 
                         style = {{backgroundColor: '#c7c6c3',height : 50,
                        marginTop : 15, marginLeft : 80, width : 200,
                         alignItems : 'center', borderRadius : 10}}
                         >
                         <Text style = {{fontSize: 15, marginTop:15}}>Apply</Text>
                         </View>
                    </View>
                </View>

            </View>

        </Modal>
    )
}
}
export default BottomPoupup;
