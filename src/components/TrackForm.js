import React,{ useContext} from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

//import { Button } from 'react-native';
//import { Inpu}

const TrackForm = () => {
    const { state: { name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
   // console.log(locations.length);

    return (
        <>
        
           <Input value={name} onChangeText={changeName} placeholder="enter a name" />
        <Spacer>
        {recording 
       ? (<Button title="Stop Recording" onPress={stopRecording} /> 
       ) : ( <Button  title="Start Recording" onPress={startRecording} /> 
    )}
        </Spacer>
       
   <Spacer>
   { !recording && locations.length ? ( <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
   </Spacer>
       
    
        </>
    );
      
};
export default TrackForm;