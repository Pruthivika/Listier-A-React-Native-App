import React ,{useState}from 'react'
import { StyleSheet, Text, View,Button,TextInput,Picker ,DatePickerAndroid,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../Constants';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function AddForm({navigation}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [mydate,setMy]=useState("")

  //  console.log(date);
  const FormatDate = (dateobj)=>{
    var month = dateobj.getUTCMonth() + 1; //months from 1-12
    var day = dateobj.getUTCDate();
    var year = dateobj.getUTCFullYear();
    var mydate =year + "/" + month + "/" + day;
    return mydate;
} 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
    setMy(currentDate);
  };


  const showDatepicker = () => {
    setMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    setMode('time');
    setShow(true)
  };
    return (
      <TouchableWithoutFeedback style={{flex:1}} onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.wrapper} >
      
     <View style={styles.container}>
       <View style={styles.card}>
       <Icon size={20} style={styles.icon} name="tag"/>
       <TextInput 
          placeholder="Add Task Title"
          style={styles.input} 
          maxLength={20}
          placeholderTextColor={COLORS.darkerGrey}/>
       </View>
       <View style={styles.card}>
       <Icon  size={20} style={styles.icond} name="sticky-note"/>
        <TextInput
          placeholder="Add Description"
          
          style={styles.inputd}
          multiline={true}
          scrollEnabled={true}
          maxLength={60}
          numberOfLines={4}
          placeholderTextColor={COLORS.darkerGrey}
        />
       </View>
       
       <View style={styles.card}>
        <TouchableOpacity style={styles.pick} onPress={showDatepicker}  >
          <Icon  size={20} style={styles.icon2} name="calendar"/>
          {mydate?<Text style={styles.text}>{FormatDate(mydate)}</Text>:<Text style={styles.text}>Add Due Date</Text>}   
    
          </TouchableOpacity>
     
       </View>
       <View style={styles.card}>
        <TouchableOpacity style={styles.pick} onPress={showTimepicker}  >
        <Icon  size={20} style={styles.icon2} name="clock-o"/>
        {/* {mytime?<Text style={styles.text}>{FormatDate(mydate)}</Text>:<Text style={styles.text}>Add Due Date</Text>}   
     */}
          </TouchableOpacity>
          </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
       
      )}
      
      </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext}>Done !</Text>
    </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    paddingTop:16,
    paddingRight:5,
    paddingLeft:5
    

  },
  container:{
    flex:1,
    flexDirection:'column',
   

  },
  card:{
      paddingTop:20,
      paddingBottom:30,
      flexDirection:'row',
      backgroundColor:COLORS.white,
      elevation:5,
      marginBottom:10,
      paddingHorizontal:20,
      
  },

  pick:{
    
    width:150,
    height:25,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:COLORS.lightgrey,
    marginTop:20,

  },
  icon:{
    paddingRight:20,
    alignSelf:'center',
    paddingTop:10,
    color:COLORS.darkerGrey
    
  },
  icon2:{
    paddingRight:20,
    alignSelf:'center',
    paddingBottom:10,
    color:COLORS.darkerGrey
    
  },
  icond:{
    paddingRight:20,
    alignSelf:'flex-start',
    paddingBottom:10,
    color:COLORS.darkerGrey
    
  },
  text:{
   
    color:COLORS.darkerGrey,
    fontFamily:'Choco'
   
  },
  input:{
    borderBottomColor:COLORS.lightgrey,
    borderBottomWidth:1,
    paddingBottom:0,
    fontFamily:'Choco'
   
  
  },
  inputd:{
   
    paddingTop:0,
    paddingBottom:0,
    marginTop:0,
    
    textAlignVertical:"top",
    fontFamily:'Choco'
   
   
  
  },
  button:{
     
    backgroundColor:COLORS.primary,
    // borderColor:COLORS.primary,
    borderRadius:20,
    // borderWidth:2,
    width:300,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    alignSelf:'center',
    marginBottom:20


},
btntext:{
  color:COLORS.white,
  fontSize:18,
  fontFamily:'Choco'
}

})

