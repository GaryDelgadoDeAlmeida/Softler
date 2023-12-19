import React, { useEffect } from "react"

export default function GoogleMaps() {

    let map
    const initMap = async () => {
        // The location of Uluru
        const position = { lat: -25.344, lng: 131.031 };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
        
        // The map, centered at Uluru
        map = new Map(document.getElementById("google-maps"), {
            zoom: 4,
            center: position,
            mapId: "DEMO_MAP_ID",
        });
        
        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerView({
            map: map,
            position: position,
            title: "Uluru",
        });
    }

    useEffect(() => {
        initMap()
    }, [])

    return (
        <div id={"google-maps"}></div>
    )
}