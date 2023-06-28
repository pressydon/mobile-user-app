import React, { useEffect, useRef, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView,{Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDeliveryMedium, selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import * as Location from "expo-location";
import  MapViewDirections  from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from "@env"



export default function Map() {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const deliveryMedium = useSelector(selectDeliveryMedium)
    const mapRef = useRef(null);
    const dispatch = useDispatch()

    // console.log(deliveryMedium)

    // const [location, setLocation] = useState({})
//     const [region, setRegion] = useState({
//         latitude: origin?.location.lat,
//         longitude: origin?.location.lng,
//         latitudeDelta: 0.005,
//         longitudeDelta: 0.005,
//   })
  const [ErrorMsg, setErrorMsg] = useState('')

//   console.log(destination.location)

let finalDestination ={latitude: destination?.location.lat, longitude: destination?.location.lng}
let initialOrigin = { latitude: origin?.location.lat, longitude: origin?.location.lng}

// console.log(initialOrigin)

    // useEffect(() => {
    //     (async () => {
    //       try {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== "granted") {
    //           setErrorMsg("Permission to access location was denied");
    //         }
    
    //         const loc = await Location.getCurrentPositionAsync({});
    //         // setLocation({
    //         //   latitude: loc.coords.latitude,
    //         //   longitude: loc.coords.longitude,
    //         //   latitudeDelta: 0.0922,
    //         //   longitudeDelta: 0.0421,
              
    //         // });
    //         // setRegion({
    //         //     latitude: loc.coords.latitude,
    //         //     longitude: loc.coords.longitude,
    //         // })
    //         // console.log(loc.coords.latitude)
    //       } catch (err) {
    //         console.log({ err });
    //       }
    //     })();
    //   }, []);


 useEffect(() =>{
    if(!origin || !destination) return;

    // zoom $ fit to markers

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
    })

 }, [origin, destination])

 useEffect(()=>{
    if(!origin || !destination) return;

    const getTravelTime=async()=>{
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`)
        .then(res=>res.json())
        .then(data =>{
            // console.log(data.rows[0].elements[0].distance.text)
            dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        })
    }

    getTravelTime();

 },[origin, destination, GOOGLE_MAPS_KEY])
       

    return(
      
        <MapView
        ref={mapRef}
        style={tw`flex-1`}
        // mapType="mutedStandard"
        // rotateEnabled={false}
        initialRegion={{
            latitude: !origin ? 6.339185: origin?.location.lat,
            longitude: !origin ? 5.617447: origin?.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
      }}
      region={{
        // latitude: origin?.location.lat,
        // longitude: origin?.location.lng,
        latitude: !origin ? 6.339185: origin?.location.lat,
        longitude: !origin ? 5.617447: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
  }}
//   onRegionChange={(region)=>setRegion(region)}
>

      {origin && destination && (
        <MapViewDirections
            origin={initialOrigin}
            destination={finalDestination}
            apikey={GOOGLE_MAPS_KEY}
            strokeWidth={3}
            strokeColor="goldenrod"
            lineDashPattern={[0]}
        />
      )}

    {origin?.location && (
        <Marker 
        coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
        }}
        title="Pickup"
        description={origin.description}
        identifier='origin'
        />
    )}

{destination?.location && (
        <Marker 
        coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
        }}
        title="Dropoff"
        description={destination.description}
        identifier='destination'
        />
    )}
</MapView>

      
    )
}


const styles = StyleSheet.create({

})