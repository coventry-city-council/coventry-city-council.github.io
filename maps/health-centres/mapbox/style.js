
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
        "IMD2019_1": {
            "type": "geojson",
            "data": json_IMD2019_1
        }
                    ,
        "CityofCoventryHealthCentreCV14FS_2": {
            "type": "geojson",
            "data": json_CityofCoventryHealthCentreCV14FS_2
        }
                    ,
        "HospitalofStCrossCV225PX_3": {
            "type": "geojson",
            "data": json_HospitalofStCrossCV225PX_3
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
            "id": "lyr_IMD2019_1_0",
            "type": "fill",
            "source": "IMD2019_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'iod2019_IMD decile'], 1], 0.5, ['==', ['get', 'iod2019_IMD decile'], 2], 0.5, ['==', ['get', 'iod2019_IMD decile'], 3], 0.5, ['==', ['get', 'iod2019_IMD decile'], 4], 0.5, ['==', ['get', 'iod2019_IMD decile'], 5], 0.5, ['==', ['get', 'iod2019_IMD decile'], 6], 0.5, ['==', ['get', 'iod2019_IMD decile'], 7], 0.5, ['==', ['get', 'iod2019_IMD decile'], 8], 0.5, ['==', ['get', 'iod2019_IMD decile'], 9], 0.5, ['==', ['get', 'iod2019_IMD decile'], 10], 0.5, 1.0], 'fill-color': ['case', ['==', ['get', 'iod2019_IMD decile'], 1], '#440154', ['==', ['get', 'iod2019_IMD decile'], 2], '#482576', ['==', ['get', 'iod2019_IMD decile'], 3], '#414387', ['==', ['get', 'iod2019_IMD decile'], 4], '#345f8d', ['==', ['get', 'iod2019_IMD decile'], 5], '#2a788e', ['==', ['get', 'iod2019_IMD decile'], 6], '#21908d', ['==', ['get', 'iod2019_IMD decile'], 7], '#23a884', ['==', ['get', 'iod2019_IMD decile'], 8], '#43bf70', ['==', ['get', 'iod2019_IMD decile'], 9], '#7ad151', ['==', ['get', 'iod2019_IMD decile'], 10], '#bcdf27', '#fde725']}
        }
,
        {
            "id": "lyr_CityofCoventryHealthCentreCV14FS_2_0",
            "type": "fill",
            "source": "CityofCoventryHealthCentreCV14FS_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_MINS'], 5], 0.5, ['==', ['get', 'AA_MINS'], 10], 0.5, ['==', ['get', 'AA_MINS'], 15], 0.5, ['==', ['get', 'AA_MINS'], 30], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_MINS'], 5], '#e31a1c', ['==', ['get', 'AA_MINS'], 10], '#ff7f00', ['==', ['get', 'AA_MINS'], 15], '#ffb301', ['==', ['get', 'AA_MINS'], 30], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_HospitalofStCrossCV225PX_3_0",
            "type": "fill",
            "source": "HospitalofStCrossCV225PX_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_MINS'], 5], 0.5, ['==', ['get', 'AA_MINS'], 10], 0.5, ['==', ['get', 'AA_MINS'], 15], 0.5, ['==', ['get', 'AA_MINS'], 30], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_MINS'], 5], '#e31a1c', ['==', ['get', 'AA_MINS'], 10], '#ff7f00', ['==', ['get', 'AA_MINS'], 15], '#ffb301', ['==', ['get', 'AA_MINS'], 30], '#fde725', '#ffffff']}
        }
],
}