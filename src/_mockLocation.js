import * as Location from 'expo-location';

const tenMeterWithDegree = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            alttitude: 5,
            longitude: -122.0312186 + increment * tenMeterWithDegree,
            latitude: 37.33233141 + increment * tenMeterWithDegree

            //18.6031913,
            //"longitude": 73.7676741,

        }
    };
};
 
let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter ++;
}, 1000);