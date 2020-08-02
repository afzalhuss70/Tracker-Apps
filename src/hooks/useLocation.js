import { useState, useEffect, useContext } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';



export default (shouldTrack ,callback) => {
    const [err, setErr] = useState(null);
    
       useEffect(() => {
         let subscriber;
        const  startWatching = async () => {  
          try {
          
              const {granted} = await requestPermissionsAsync();
              
              if (granted) {
   
              } else {
                  throw new Error(' Location Permission not granted');
              }
              subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
              },
              callback
              );
             // setSubscriber(sub);
           } catch (er) {
             setErr(er);
           } 
       };
   

         if (shouldTrack) {
          startWatching();
         }
          else {
            if (subscriber)
            {
              subscriber.remove();
            }
           subscriber=null;
          }
          return () => {
            if(subscriber)
            {
              subscriber.remove();
            }

          };
       }, [shouldTrack, callback]); 
    
       return [err];
};
