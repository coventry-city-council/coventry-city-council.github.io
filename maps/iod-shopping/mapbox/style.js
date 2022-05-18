
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
        "IndicesofDeprivation_1": {
            "type": "geojson",
            "data": json_IndicesofDeprivation_1
        }
                    ,
        "Shopping_2": {
            "type": "geojson",
            "data": json_Shopping_2
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
            "id": "lyr_IndicesofDeprivation_1_0",
            "type": "fill",
            "source": "IndicesofDeprivation_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 1], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 2], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 3], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 4], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 5], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 6], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 7], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 8], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 9], 0.8, ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 10], 0.8, 0], 'fill-color': ['case', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 1], '#094181', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 2], '#0969ad', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 3], '#2b8dbf', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 4], '#4fb3d3', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 5], '#7bcdc5', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 6], '#a9ddb5', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 7], '#cdebc5', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 8], '#e1f3dc', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 9], '#effdd9', ['==', ['get', 'English Indices of Deprivation 2019_IMD decile'], 10], '#fbfdf5', '#ffffff']}
        }
,
        {
            "id": "lyr_Shopping_2_0",
            "type": "fill",
            "source": "Shopping_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e77148'}
        }
],
}