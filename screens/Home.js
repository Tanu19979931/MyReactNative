import React, { useEffect} from 'react';
import { cloneElement } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    BackHandler
}from 'react-native';
import {icons,images, SIZES, COLORS, FONTS} from '../constants'
import {BottomPoupup} from '../nevigation/BottomPopup'

const Home = () => {
    useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp()
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    


    let popupRef = React.createRef()
    const onShowPopup = () => {
        popupRef.show()
    }
    const onclosePopup = () => {
        popupRef.close()
    }
    const[showMore, setshowMore] = React.useState(false)
   

    const filterData = [
        {
            id : 1,
            title: "Cusines",
            arro: icons.down
        },
        {
            id : 2,
            title: "Rating: 4.0+",
            arro: ""
        },
        {
            id : 3,
            title: "MAX Saftey",
            arro: ""
        },
        {
            id : 4,
            title: "Fast Delivery",
            arro: ""
        },
        {
            id : 5,
            title: "Offers",
            arro: ""
        },
        {
            id : 6,
            title: "Take away",
            arro: ""
        },
        {
            id : 7,
            title: "more",
            arro: icons.down
        },
    ]
    const dishData= [
        {
            id: 1,
            icon: icons.healthy,
            dish: "Healthy"
        },
        {
            id: 2,
            icon: icons.rolls,
            dish: "Rolls"
        },
        {
            id: 3,
            icon: icons.pizza,
            dish: "Pizza"
        },
        {
            id: 4,
            icon: icons.momos,
            dish: "Momos"
        },
        {
            id: 5,
            icon: icons.biriyani,
            dish: "Biriyani"
        },
        {
            id: 6,
            icon: icons.burger,
            dish: "Burger"
        },
        {
            id: 7,
            icon: icons.ice,
            dish: "icecream"
        },
        {
            id: 8,
            icon: icons.noodles,
            dish: "noodles"
        },
    ]
    const resturantData = [
        {
            id : 1,
            restroName: "Hotel Kohinoor",
            rating: 3.7,
            categories : "Biriyani, North Indian",
            duration : "31 min",
            price : "100 for one",
            offer : "50% off\nupto 100",
            number : "2600+ people ordered from here since lockdown",
            photo : images.restro2
        },
        {
            id : 2,
            restroName: "Arihant's Natural Ice Cream",
            rating: 4.1 ,
            categories : "Ice Cream, Beverages",
            duration : "21 min",
            price : "100 for one",
            offer : "20% of\nup to 1000",
            number : "975+ people ordered from here since lockdown",
            photo : images.restro1
        },
        {
            id : 3,
            restroName: "Fast Food Corner",
            rating: 3.9 ,
            categories : "Noodles, Rolls",
            duration : "19 min",
            price : "50 for one",
            offer : "60% of\nup to 100",
            number : "575+ people ordered from here since lockdown",
            photo : images.restro3
        },
        {
            id : 4,
            restroName: "Cacke Shop",
            rating: 4.2 ,
            categories : "cakes, Beverages",
            duration : "31 min",
            price : "150 for one",
            offer : "40% of\nup to 80",
            number : "900+ people ordered from here since lockdown",
            photo : images.restro4
        },
    ]
    
    const moreDishData = [
        {
            id: 1,
            icon: icons.mashroom,
            dish: "Mushroom"
        },
        {
            id: 2,
            icon: icons.thali,
            dish: "Thali"
        },
        {
            id: 3,
            icon: icons.daal,
            dish: "Daal"
        },
        {
            id: 4,
            icon: icons.chaat,
            dish: "Chaat"
        },
        {
            id: 5,
            icon: icons.paratha,
            dish: "Paratha"
        },
        {
            id: 6,
            icon: icons.butterpaneer,
            dish: "Paneer"
        },
        {
            id: 7,
            icon: icons.cake,
            dish: "Cake"
        },
        {
            id: 8,
            icon: icons.friedrice,
            dish: "Fried Rice"
        },
    ]

    const[filters, setFilters] = React.useState(filterData)
    const[dish, setDish] = React.useState(dishData)
    const[resturants, setResturants] = React.useState(resturantData)
    
    const[moreDish, setMoreDish] = React.useState(moreDishData)
    
   

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 40,
                        paddingLeft: SIZES.padding*1.5 ,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.location}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '100%',
                            height: "100%",
                            marginLeft: 10,
                            marginTop: 5,
                            justifyContent: 'center',
                            
                        }}
                    >
                        <Text style={{ ...FONTS.h3, fontWeight: 'bold', color: COLORS.black}}>Home-Rabindra Nagar, K..</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 40,
                        paddingRight: SIZES.padding * 1.5,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.mug}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    function renderSearch(){
        const windowWidth = Dimensions.get('window').width;
        const avliableWidth = (windowWidth-30);
        return(
            <View 
            style ={{
                height:45,
                width:avliableWidth,
                borderColor: COLORS.lightGray5,
                borderWidth:3,
                borderRadius:10,
                marginTop:10,
                marginLeft: 15,
                marginRight: 15,
                flexDirection: 'row'
                }}
                >
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        margin:12,
                        alignItems: 'center',
                        tintColor : '#f51871'
                    }}
                />
                <TextInput
                 placeholder = "Resturent name, cusine, or a dish.."
                style={{
                    width: "100%",
                    height: "100%"
                }}
                   
                />

                
                

            </View>
        )
    }
    function renderFilter(){
        const[popup, setpopup] = React.useState(true)
        
        const renderItem = ({item}) => {
         
           
            return(
                <TouchableOpacity
                style={{
                    marginTop: 16,
                    marginLeft: 15,
                    //padding: SIZES.padding

                }}
                >
                    <View
                    
                     style={{
                        //width: 50,
                        alignSelf:'center',
                        height: 35,
                        borderRadius: 8,
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 8,
                        paddingRight: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        
                        borderWidth: 1
                    }}
                    >
                       
                        
                        <TouchableWithoutFeedback 
                         
                       
                        onPress = {item.id==1?(onShowPopup):null}
                        
                        
                        > 
                        <View 
                        style={{
                            width:"100%",
                            height: "100%",
                            flexDirection: 'row',
                        
                        }}
                        
                        >
                          
                        <Text style ={{color: COLORS.black}}>{item.title}</Text>
                        <Image
                        source={item.arro}
                        resizeMode="contain"
                        style={{
                            width: 10,
                            height: 10,
                            marginLeft: 5,
                            marginTop: 5
                        }}
                        />
                       
                        </View>
                        </TouchableWithoutFeedback> 
                        <BottomPoupup
                        title = "Cuisines"
                        ref = {(target) => popupRef = target}
                        onTouchOutside = {onclosePopup}
                        />
                       
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <FlatList
            data={filters}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {item => `${item.id}`
           
        }
            renderItem = {renderItem}
            //contentContainerStyle = {{paddingVertical:SIZES.padding*2}}
            />
        )

    }
    function renderDaySpecial(){
        const windowWidth = Dimensions.get('window').width;
        const avliableWidth = (windowWidth-54)/2;
        return(
            <View style = {{flexDirection : 'row', marginTop: 20}}>
        <TouchableOpacity
			style = {{
               marginLeft:18
			}}
		>
            <View 
            style = {{
                //marginTop: -200,
                height: 220,
                width: avliableWidth,
                borderRadius: 15
                }}
            >
            <Image
            source = {images.italian}
            //resizeMode = "contain"
            style = {{
                height: 220,
                width: avliableWidth,
                borderRadius: 15
           }}

            />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
			style = {{
               marginLeft:16
			}}
		>
            <View 
            style = {{
                height: 220,
                width: avliableWidth,
                borderRadius: 15
                }}
            >
            <Image
            source = {images.match}
            //resizeMode = "contain"
            style = {{
                height: 220,
                width: avliableWidth,
                borderRadius: 15
           }}

            />
              </View>
            </TouchableOpacity>
            </View>
              
    
        )
    }
    function renderDish(){
        const Head = () => (
            <View style = {{marginBottom:SIZES.padding*2, marginLeft:18, marginTop:10}}>
                <Text style={{...FONTS.h3, fontWeight: "bold", color: COLORS.black}}>
                    Eat What makes you happy
                </Text>

            </View>
        )
        
        const renderList = ({item}) =>(
            <TouchableOpacity
            style={{
                marginBottom:SIZES.padding*2,
                width:60, 
                alignItems: 'center',
                marginLeft:18,
                marginRight:18
            }}
            >
                <View
                style = {{
                    height: 80,
                    width :80,
                    marginBottom: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent : 'center'
                }}
                >
                    <Image
                    source = {item.icon}
                    resizeMode = "contain"
                    style = {{
                        height:80,
                        width:80,
                    }}
                    />

                </View>
                <Text style={{textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4}}>
                    {item.dish}
                </Text>

            </TouchableOpacity>

        )
        
        const Foot = () =>(
            <TouchableOpacity >
                {!showMore?(<View 
            style ={{
                height: 35,
               
                marginLeft: 18,
                marginRight: 18,
                marginTop: 5,
                borderRadius: 10,
                borderColor: COLORS.black,
                borderWidth: 1,
                //flexDirection: 'row'
                
            }}
                >
                    
                <TouchableOpacity
                 onPress={() => setshowMore(!showMore)}
                >
                    <View  style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style = {{ marginLeft : 100 , marginTop: 5}}>See more</Text>
                
                    
                       <Image
                       source = {icons.down}
                       resizeMode = "contain"
                       style = {{
                           height:15,
                           Weidth: 15,
                           marginTop: -13,
                         
                          
                       }}
                       />
                 
                    </View>
                </TouchableOpacity>
            </View>):null}
            
            </TouchableOpacity>
        )
        return(
            <FlatList
            ListHeaderComponent = {Head}
            
            data = {dishData}
            numColumns = {4}
            columnWrapperStyle = {{justifyContent:'space-between'}}
            keyExtractor = {item => `${item.id}`}
            renderItem = {renderList}
            style = {{marginTop: SIZES.padding*2}}
            ListFooterComponent = {Foot}
            />
        )
    }
    function renderMoreDish(){
     
         const renderList = ({item}) =>(
            <TouchableOpacity
            style={{
                marginBottom:SIZES.padding*2,
                
                width:60, 
                alignItems: 'center',
                marginLeft:18,
                marginRight:18
            }}
            >
                <View
                style = {{
                    height: 80,
                    width :80,
                    marginBottom: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent : 'center'
                }}
                >
                    <Image
                    source = {item.icon}
                    resizeMode = "contain"
                    style = {{
                        height:80,
                        width:80,
                    }}
                    />

                </View>
                <Text style={{textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4}}>
                    {item.dish}
                </Text>

            </TouchableOpacity>

        )
        
        const Foot = () =>(
            <View 
            style ={{
                height: 35,
               
                marginLeft: 18,
                marginRight: 18,
                marginTop: 10,
                borderRadius: 10,
                borderColor: COLORS.black,
                borderWidth: 1,
                //flexDirection: 'row'
                
            }}
                >
                <TouchableOpacity
                 onPress={() => setshowMore(!showMore)}
                >
                    <View  style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style = {{ marginLeft : 100 , marginTop: 5}}>See Less</Text>
                
                    
                       <Image
                       source = {icons.up}
                       resizeMode = "contain"
                       style = {{
                           height:15,
                           Weidth: 15,
                           marginTop: -13,
                         
                          
                       }}
                       />
                 
                    </View>
                </TouchableOpacity>
            </View>
        )
        return(
            <FlatList
            data = {moreDishData}
            numColumns = {4}
            columnWrapperStyle = {{justifyContent:'space-between'}}
            keyExtractor = {item => `${item.id}`}
            renderItem = {renderList}
            style = {{marginTop: SIZES.padding*2}}
            ListFooterComponent = {Foot}
            />
        )
    }
    function renderResturant(){
        const windowWidth = Dimensions.get('window').width;
        const avliableWidth = windowWidth-36;
        const Headerrest = () =>(
            <View style = {{marginBottom:SIZES.padding*2, marginLeft:18, marginTop:10}}>
            <Text style={{...FONTS.h3, fontWeight: "bold", color: COLORS.black}}>
                96 resturants arround you
            </Text>

        </View>

        )
        const renderrestroList = ({item}) => (
            
            <TouchableOpacity
            style = 
            {{
                marginBottom : SIZES.padding*2, 
                marginLeft : 18, 
                marginRight: 18, 
                width : avliableWidth,
                borderRadius: 20,
               //backgroundColor: COLORS.offWhite,
               borderColor: COLORS.offWhite,
               borderWidth:3
              
            }}
            >
                <View
                style = {{marginBottom : SIZES.padding}}>
                    <Image
                    source = {item.photo}
                    resizeMode = "cover"
                    style ={{
                        width : "100%",
                        height: 200,
                        borderTopLeftRadius:20,
                        borderTopRightRadius: 20
                    }}
                    />
                    <View
                    style = {{
                        position : 'absolute',
                        bottom : 10,
                        height : 30,
                        borderRadius : 5,
                        marginLeft: avliableWidth - 80,
                        backgroundColor : COLORS.white,
                        opacity : 0.7,
                        alignItems : 'center',
                        justifyContent : 'center',
                        ...styles.shadow
                    }}
                    >
                        <Text style = {{...FONTS.h4,color: COLORS.black, padding: 5}}>{item.duration}</Text>
                    </View>
                    <View
                    style = {{
                        position : 'absolute',
                        bottom : 10,
                        height : 55,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor : COLORS.blue,
                        width: 100,
                        alignItems : 'center',
                        justifyContent : 'center',
                        ...styles.shadow
                    }}
                    >
                        <Text style = {{...FONTS.h4, fontSize: 15,color: COLORS.white, padding: 1, textAlign: 'center'}}>{item.offer}</Text>
                    </View>
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {{...FONTS.body2, height: 35, marginLeft:5, width: 260, fontWeight: "bold", color: COLORS.black}}>{item.restroName}</Text>
                    <View 
                    style = {{
                        flexDirection : 'row',
                        backgroundColor : COLORS.green,
                        borderRadius : 5,
                        marginLeft : avliableWidth-330,
                        alignItems: 'center',
                        height : 30,
                        width : 55
                    }}
                    >
                        <Text style = 
                        {{
                            color : COLORS.white, 
                            padding:5
                        }}
                        >{item.rating}</Text>
                        <Image
                        source = {icons.star}
                        resizeMode = "cover"
                        style = {{
                            width : 10,
                            height : 10,
                            alignItems : 'center',
                            tintColor : COLORS.white,
                            padding:5
                        }}
                        />
                    </View>
                </View>
               <View
               style = {{
                   marginTop: SIZES.padding*0.02,
                   flexDirection : 'row'
               }}
               >
                   <Text style = {{width: 160, marginLeft:5}}>{item.categories}</Text>
                   <Text style = {{width : 80, marginLeft: avliableWidth-249}}>{item.price}</Text>

               </View>
               <View
               style = {{
                   marginTop: SIZES.padding,
                   flexDirection : 'row',
                  marginLeft: 5
                   
               }}
               >
                   <Image
                   source = {icons.increase}
                   resizeMode = "contain"
                   style = {{
                       height : 30,
                       width : 30
                   }}
                   />
                   <Text style ={{marginLeft: 5, padding:5}}>{item.number}</Text>

               </View>
            </TouchableOpacity>
        )
        return(
            <FlatList
                ListHeaderComponent = {Headerrest}
                data = {resturantData}
                keyExtractor = {item => `${item.id}`}
                renderItem = {renderrestroList}
                style = {{marginTop: SIZES.padding*2}}
            />
        )
    }
    return(
        
        <ScrollView
        showsVerticalScrollIndicator ={false}
        >
        <SafeAreaView style={styles.container}>
        {renderHeader()}
        {renderSearch()}
        {renderFilter()}
        {renderDaySpecial()}
        {renderDish()}
        {showMore?(
            <SafeAreaView style={styles.container}>{renderMoreDish()}</SafeAreaView>
            ):null}
        
        {renderResturant()}
        
       
    </SafeAreaView>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})
export default Home;