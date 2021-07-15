import React from 'react'
import {View, Text, FlatList,SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

const list = ({listRecord}) => {
   
   const RenderItem = (item,index) => {
       
       const stringy = JSON.stringify(item)
       return( <View style= {{margin:10}}>
        <View>
            <Text>Number:{item.index+1 } </Text>
            <Text>Name:{item.item.listing} </Text>
            
        </View>
        </View>
        

       )
   }
   

    return (
        <SafeAreaView>
        <FlatList
          data={listRecord}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
          
          
        />
      </SafeAreaView>
    )
}
function mapStateToProps(state){
    return{
        listRecord: state.Recordings
    }

}
export default connect(mapStateToProps) (list)
