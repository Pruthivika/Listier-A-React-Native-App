import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    flex: 1,
    width: '100%',
    height:'100%',
    borderRadius:5,
  
  },
  image: {
    borderRadius: 5,
  },
  text:{
    color: COLORS.black,
    fontSize:17,
  },
  list: {
    
    marginVertical:9,
    fontWeight: 'bold',
    height:50
  },
  cb:{
    width:'1%',
    backgroundColor:'#fff',
    borderColor:'#fff',
    marginStart:20,
    paddingEnd:1
    

  },
  bottomRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
  logo: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
  },
  viewcard:{
    height:'100%',
    width:'100%'
  },
  category:{
    width:'100%',
    height:25,
    backgroundColor:COLORS.primary,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default styles;