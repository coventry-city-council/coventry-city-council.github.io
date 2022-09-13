
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Isochrones_1": {
            "type": "geojson",
            "data": json_Isochrones_1
        }
                    ,
        "VaccinationSites_2": {
            "type": "geojson",
            "data": json_VaccinationSites_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_Isochrones_1_0",
            "type": "fill",
            "source": "Isochrones_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_MINS'], 15], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_MINS'], 15], '#2b83ba', '#ffffff']}
        }
,
        {
            "id": "lyr_VaccinationSites_2_0",
            "type": "circle",
            "source": "VaccinationSites_2",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Type'], 'GP-led Vaccination Service'], ['/', 17.857142857142854, 2], ['==', ['get', 'Type'], 'Hospital Hub'], ['/', 17.857142857142854, 2], ['==', ['get', 'Type'], 'Pharmacy'], ['/', 17.857142857142854, 2], 0], 'circle-color': ['case', ['==', ['get', 'Type'], 'GP-led Vaccination Service'], '#2d00cf', ['==', ['get', 'Type'], 'Hospital Hub'], '#ed1eea', ['==', ['get', 'Type'], 'Pharmacy'], '#1bed6f', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Type'], 'GP-led Vaccination Service'], 1.0, ['==', ['get', 'Type'], 'Hospital Hub'], 1.0, ['==', ['get', 'Type'], 'Pharmacy'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'Type'], 'GP-led Vaccination Service'], 1, ['==', ['get', 'Type'], 'Hospital Hub'], 1, ['==', ['get', 'Type'], 'Pharmacy'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'Type'], 'GP-led Vaccination Service'], '#232323', ['==', ['get', 'Type'], 'Hospital Hub'], '#232323', ['==', ['get', 'Type'], 'Pharmacy'], '#232323', '#000000']}
        }
],
}