var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TempatIbadah_1 = new ol.format.GeoJSON();
var features_TempatIbadah_1 = format_TempatIbadah_1.readFeatures(json_TempatIbadah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_1.addFeatures(features_TempatIbadah_1);
var lyr_TempatIbadah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_1, 
                style: style_TempatIbadah_1,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
    title: 'Tempat Ibadah<br />\
    <img src="styles/legend/TempatIbadah_1_0.png" /> Gereja<br />\
    <img src="styles/legend/TempatIbadah_1_1.png" /> Masjid<br />\
    <img src="styles/legend/TempatIbadah_1_2.png" /> Vihara<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_TempatIbadah_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TempatIbadah_1];
lyr_TempatIbadah_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TempatIbadah_1.set('fieldImages', {'NAMOBJ': 'Hidden', 'LUAS': 'Hidden', 'FGSIBD': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', });
lyr_TempatIbadah_1.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_TempatIbadah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});