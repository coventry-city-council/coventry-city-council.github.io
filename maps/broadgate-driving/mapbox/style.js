
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
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_MINS'], 30], 0.5, ['==', ['get', 'AA_MINS'], 45], 0.5, ['==', ['get', 'AA_MINS'], 60], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_MINS'], 30], '#2b83ba', ['==', ['get', 'AA_MINS'], 45], '#64abb0', ['==', ['get', 'AA_MINS'], 60], '#9dd3a7', '#ffffff']}
        }
],
}