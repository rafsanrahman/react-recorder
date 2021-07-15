import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { connect } from 'react-redux';

const recorder = ({navigation, increaseRecordings}) => {
    const [recording, setRecording] = React.useState();

    async function startRecording() {
        try {
            
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);
            ('Recording started');
        } catch (err) {
            ('Failed to start recording', err);
        }
    }

    async function stopRecording() {
       
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        increaseRecordings(uri);
        
    }

    return (
        <View style={styles.container}>
            <Button
                title='Recordings'
                onPress={() => { navigation.navigate("list")}
                }
            />
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
        </View>
    );


}
 
function mapDispatchToProps(dispatch)
{
    return{increaseRecordings: (records)=>{
        dispatch({type:'INCREASE_RECORDINGS', payload:{id:records, listing: records}})
    
        

}

}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(null,mapDispatchToProps)(recorder)

