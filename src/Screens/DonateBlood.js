import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,

} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from "react-redux"
import { DonateNow } from "../Store/Actions/Actions";

class DonateBlood extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     name:'',
        //     contact :'',
        //     bloodgroup: '',
        // }
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.headingview}>
                    <Image source={require('../Assets/logo.png')} style={styles.img} />
                    <Text style={styles.heading} >BLOOD BANK</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.textStyles}>Name : </Text>
                    <TextInput style={{
                        backgroundColor: 'white',
                        height: 50,
                        borderRadius: 25,
                        width: '70%',
                        fontSize: 17,
                        paddingLeft: 12,
                        borderBottomColor: 'white',
                        //   border:'none',
                    }} placeholder={"Enter Your Name"}
                        onChangeText={(text) => this.setState({ name: text })} />
                </View>
                <View style={styles.view1}>
                    <Text style={styles.textStyles}>Contact No. : </Text>
                    <TextInput style={{
                        backgroundColor: 'white',
                        height: 50,
                        borderRadius: 25,
                        width: '55%',
                        fontSize: 17,
                        paddingLeft: 12,
                        borderBottomColor: 'white',
                        //   border:'none',
                    }} keyboardType='phone-pad' placeholder={"Enter Contact Number"}

                        onChangeText={(text) => this.setState({ contact: text })} />
                </View>
                <View style={styles.view1}>
                    <Text style={styles.textStyles}>Blood Group : </Text>
                    <DropDownPicker
                        items={[
                            { label: 'Blood Group', value: 'Blood Group', hidden: true },
                            { label: 'O', value: 'O' },
                            { label: 'A', value: 'A' },
                            { label: 'B', value: 'B' },
                            { label: 'AB', value: 'AB' },
                        ]}
                        // defaultValue={this.state.bloodgroup}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa', width: 80, }}
                        itemStyle={{
                            justifyContent: 'center'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => this.setState({
                            bloodgroup: item.value
                        })}
                    />
                </View>
                <View style={styles.view3}>
                    <TouchableOpacity style={styles.Butnblood} onPress={() => DonateNow(this.state, this.props)}>
                        <Text style={styles.BtnTextblood}>Donate Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
    textStyles: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        // marginLeft:15,
        marginTop: 50
    },
    view3: {
        marginTop: 60,
        marginBottom: 10,
        alignItems: 'center',
    },
    Butnblood: {
        width: 200,
        backgroundColor: 'red',
        borderRadius: 16,
        alignItems: 'center',
        padding: 18,
    },
    BtnTextblood: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold",
    },
})



const mapDispatchToProps = (dispatch) => ({
    DonateNow: (state, props) => dispatch(DonateNow(state, props))
})

export default connect(null, mapDispatchToProps)(DonateBlood);