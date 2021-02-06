import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    // TextInput,
    // TouchableOpacity,

} from 'react-native';
import { connect } from "react-redux"
import { postGet } from "../Store/Actions/Actions";


class AvailableBlood extends React.Component {



    componentDidMount() {
        this.props.postGet()

    }
    render(props) {
        // console.log("post,,,,,<<<<<",this.props.postget)
        return (
            <ScrollView style={styles.main}>

                <View>
                    <View style={styles.headingview}>
                        <Image source={require('../Assets/logo.png')} style={styles.img} />
                        <Text style={styles.heading} >BLOOD BANK</Text>
                    </View>
                    <View>
                        <Text style={styles.heading2} >Available BLOOD</Text>
                    </View>
                    <View>
                        {this.props.postget.map((v, i) => {
                            return <View style={styles.cards} key={i}>
                                <Text style={styles.textcards}>Name : {v.name}</Text>
                                <Text style={styles.textcards}>Contact No. : {v.contact}</Text>
                                <Text style={styles.textcards}>Blood Group : {v.bloodgroup}</Text>
                            </View>
                        })}
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        color: 'white',
    },
    headingview: {
        backgroundColor: "red",
        height: 100,
        flexDirection: 'row',
        // alignSelf:'baseline',
        // alignContent:'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderColor: "red",
        borderWidth: 1,
        // marginLeft:-50,
        // marginRight:-50
        // opacity:0.6,
    },
    heading: {
        //   marginLeft:0
        // marginRight:30,
        color: 'white',
        borderColor: "red",
        borderWidth: 1,
        fontSize: 41,
        fontWeight: 'bold'
    },
    heading2: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10

    },
    cards: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 22,
        backgroundColor: 'red'
    },
    textcards: {
        // backgroundColor:'red',
        color: 'white',
        // borderRadius:25,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    }
})


const mapStateToProps = (state) => ({
    postget: state.postget,
    // current_user:state.current_user
})

const mapDispatchToProps = (dispatch) => ({

    postGet: () => dispatch(postGet())
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableBlood);