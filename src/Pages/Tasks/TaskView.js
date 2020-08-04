import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard,Dimensions,ToastAndroid   } from 'react-native'
import {COLORS} from '../../Constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import Timer from '../../Components/Timer/Timer';
import firestore from '@react-native-firebase/firestore';
import DoneFloat from '../../Components/Button/donefloat';
import Floatingbutton from '../../Components/Button/floatingbutton';
import { Header } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
const window = Dimensions.get('window');
const screen=Dimensions.get('screen');

export default function TaskView({ route,navigation}) {

    const { title } = route.params;
    const {mykey} = route.params;
    const {id} =route.params;
    
    // const Userid = auth().currentUser.uid;
    // const des = "";
    const [timeButton,setButton]=useState(false)
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [task, setTask] = useState({});
    const [done, setDone] = useState(false);

    const dbRef = firestore().collection('Users').doc(id).collection('Tasks');
    

    const setComplete=()=>{
      setDone(true);  
      dbRef.doc(mykey).update({Completed:true,CompletedAt:new Date()});
      ToastAndroid.show("Checked Out", ToastAndroid.SHORT);
      navigation.navigate('TaskMain');
    }

    // const DeleteTask=()=>{
        
    //     dbRef.doc(mykey).delete();
    //     navigation.goBack();
    //   }

    const changePage= ()=>{
        if(page=='All Tasks'){
            navigation.navigate('All Tasks');
        }
        else if(page=='TaskMain'){
            navigation.navigate('All Tasks');
        }else{
            navigation.goBack();
        }
    }

    const FormatDate = (dateobj)=>{
        var month = dateobj.getUTCMonth() + 1; //months from 1-12
        var day = dateobj.getUTCDate();
        var year = dateobj.getUTCFullYear();
        var mydate =year + "/" + month + "/" + day;
        return mydate;
    }

    
    useEffect(() => {
        const subscriber = dbRef
          .doc(mykey)
          .onSnapshot(documentSnapshot => {
           
            setTask(documentSnapshot.data())
          });
    
        // Stop listening for updates when no longer required
        return () => subscriber();
      }, [mykey]);


      

        //  tasks.map(x=>{
        //      var k = mykey;
        //      if(x.key == x.k){
                
        //         Setcomplete(x.Completed);
        //         Setcreate(x.CreatedDate) ;
        //         Setdesc(x.Description);
        //         Setdue(x.DueDate);
                 
        //      }
        //     })

    

    
    return (

       
        <View style={styles.container}>
            <Header
      containerStyle={{backgroundColor:COLORS.white}}
      placement="left"
      centerComponent={{ text: '', style: { color: '#fff' , fontFamily:'Oleo',fontSize:25} }}
      leftComponent={<Icon name="long-arrow-left" size={20} color={COLORS.black}  onPress={()=>{navigation.pop()}}></Icon>}
    //   rightComponent={<Icon name="trash" size={25} color={COLORS.primary} onPress={DeleteTask}></Icon>}
    />
        
           <View style={styles.card}>
               
               <Text style={styles.title}>{title}</Text>
             
             <Timer  mykey={mykey} done={done}/>
               {/* <TouchableOpacity onPress={()=>{setButton(!timeButton)}} style={styles.button}>
                   <Text style={styles.start}>Start</Text>
            
            </TouchableOpacity> */}
            
           
           </View>
           
          <View style={styles.card2}>
              <Text style={styles.subtitle}>Description</Text>
            <Text style={styles.text}>{task.Description?task.Description:null}</Text>
            <Text style={styles.subtitle}>Due At</Text>
            <Text style={styles.text}>{task.DueDate?FormatDate(task.DueDate.toDate()):null}</Text>
            <Text style={styles.subtitle}>Created At</Text>
            <Text style={styles.text}>{task.CreatedDate?FormatDate(task.CreatedDate.toDate()):null}</Text>
          
           
          </View>
         
          <TouchableOpacity style={styles.button} onPress={setComplete}>
      <Text style={styles.btntext}>Task Finished !</Text>
      
    </TouchableOpacity>
    
        
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    card:{
        elevation:6,
        // height:70,
        padding:10,
        
        backgroundColor:COLORS.white,
        flexDirection:'column',
        alignItems:'center'
        
    },
    title:{
        fontSize:35,
        fontFamily:'Choco',
        alignSelf:'center'
    },
    subtitle:{
        fontSize:20,
        fontFamily:'Choco',
        bottom:0
        
    },
    button:{
        
        backgroundColor:COLORS.primary,
    // borderColor:COLORS.primary,
    borderRadius:70,
    // borderWidth:2,
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    alignSelf:'center',
    marginBottom:20,
    marginLeft:20


    },
    card2:{
        elevation:3,
        height:100,
        padding:10,
        
        backgroundColor:COLORS.white,
        flexDirection:'column',
        marginTop:10,
        flex:1,
        
    },
    close:{
        alignSelf:'flex-start',
        marginTop:24
        
    
        
    },
    desc:{
         height: 100,
         borderBottomColor:COLORS.lightgrey,
         borderBottomWidth:1,
         paddingTop:10,
         top:0,
         
    
   
    },
    timedisp:{
       flexDirection:'row',
       marginTop:20,
       justifyContent:'space-between',
       alignContent:'space-around'
    },
    start:{
        fontFamily:'Choco',
        fontSize:20,
        color:COLORS.white
    },
    text:{
        fontFamily:"Choco",
        fontSize:16,
        color:COLORS.darkerGrey,
        marginBottom:20
    },
    button:{
     
        backgroundColor:COLORS.primary,
        // borderColor:COLORS.primary,
        borderRadius:20,
        // borderWidth:2,
        width:200,
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
