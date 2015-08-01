/**
 * Created by pverbrugge on 31/07/15.
 */
"use strict";

function MapLoader() {

};

MapLoader.prototype.loadMap = function(json) {
    //var json = '{ "map": { "width": 8, "length": 8, "tiles": [ {"x": 0, "y": 0, "type": "dirt", "object": null}, {"x": 1, "y": 0, "type": "dirt", "object": null}, {"x": 2, "y": 0, "type": "dirt", "object": null}, {"x": 3, "y": 0, "type": "dirt", "object": {"id": 0}}, {"x": 4, "y": 0, "type": "dirt", "object": null}, {"x": 5, "y": 0, "type": "dirt", "object": null}, {"x": 6, "y": 0, "type": "dirt", "object": null}, {"x": 7, "y": 0, "type": "dirt", "object": {"id": 0}}, {"x": 0, "y": 1, "type": "dirt", "object": null}, {"x": 1, "y": 1, "type": "dirt", "object": null}, {"x": 2, "y": 1, "type": "dirt", "object": null}, {"x": 3, "y": 1, "type": "dirt", "object": null}, {"x": 4, "y": 1, "type": "dirt", "object": null}, {"x": 5, "y": 1, "type": "dirt", "object": null}, {"x": 6, "y": 1, "type": "dirt", "object": null}, {"x": 7, "y": 1, "type": "dirt", "object": null}, {"x": 0, "y": 2, "type": "dirt", "object": null}, {"x": 1, "y": 2, "type": "dirt", "object": null}, {"x": 2, "y": 2, "type": "dirt", "object": null}, {"x": 3, "y": 2, "type": "dirt", "object": null}, {"x": 4, "y": 2, "type": "dirt", "object": null}, {"x": 5, "y": 2, "type": "dirt", "object": null}, {"x": 6, "y": 2, "type": "dirt", "object": null}, {"x": 7, "y": 2, "type": "dirt", "object": null}, {"x": 0, "y": 3, "type": "dirt", "object": null}, {"x": 1, "y": 3, "type": "dirt", "object": null}, {"x": 2, "y": 3, "type": "dirt", "object": null}, {"x": 3, "y": 3, "type": "dirt", "object": null}, {"x": 4, "y": 3, "type": "dirt", "object": null}, {"x": 5, "y": 3, "type": "dirt", "object": null}, {"x": 6, "y": 3, "type": "dirt", "object": null}, {"x": 7, "y": 3, "type": "dirt", "object": {"id": 0}}, {"x": 0, "y": 4, "type": "dirt", "object": null}, {"x": 1, "y": 4, "type": "dirt", "object": null}, {"x": 2, "y": 4, "type": "dirt", "object": null}, {"x": 3, "y": 4, "type": "dirt", "object": null}, {"x": 4, "y": 4, "type": "dirt", "object": null}, {"x": 5, "y": 4, "type": "dirt", "object": null}, {"x": 6, "y": 4, "type": "dirt", "object": null}, {"x": 7, "y": 4, "type": "dirt", "object": {"id": 0}}, {"x": 0, "y": 5, "type": "dirt", "object": null}, {"x": 1, "y": 5, "type": "dirt", "object": null}, {"x": 2, "y": 5, "type": "dirt", "object": null}, {"x": 3, "y": 5, "type": "dirt", "object": null}, {"x": 4, "y": 5, "type": "dirt", "object": null}, {"x": 5, "y": 5, "type": "dirt", "object": null}, {"x": 6, "y": 5, "type": "dirt", "object": null}, {"x": 7, "y": 5, "type": "dirt", "object": null}, {"x": 0, "y": 6, "type": "dirt", "object": null}, {"x": 1, "y": 6, "type": "dirt", "object": null}, {"x": 2, "y": 6, "type": "dirt", "object": null}, {"x": 3, "y": 6, "type": "dirt", "object": null}, {"x": 4, "y": 6, "type": "dirt", "object": null}, {"x": 5, "y": 6, "type": "dirt", "object": null}, {"x": 6, "y": 6, "type": "dirt", "object": null}, {"x": 7, "y": 6, "type": "dirt", "object": null}, {"x": 0, "y": 7, "type": "dirt", "object": null}, {"x": 1, "y": 7, "type": "dirt", "object": {"id": 0}}, {"x": 2, "y": 7, "type": "dirt", "object": null}, {"x": 3, "y": 7, "type": "dirt", "object": null}, {"x": 4, "y": 7, "type": "dirt", "object": null}, {"x": 5, "y": 7, "type": "dirt", "object": null}, {"x": 6, "y": 7, "type": "dirt", "object": null}, {"x": 7, "y": 7, "type": "dirt", "object": null} ] } }';
    var mapData = JSON.parse(json);

    var map = new Map(mapData.map.width, mapData.map.length);

    mapData.map.tiles.forEach(function(tile) {
        var gameTile = new Tile(tile.x, tile.y);
        tileMeshes.push(gameTile.mesh);
        tileHoverCallbacks.push(gameTile.onHover);
        tileDownCallbacks.push(gameTile.onSelect);
        map.tiles.push(gameTile);

        if(tile.object) {
            var tower = new Tower();
            gameTile.place(tower);
            game.entityManager.addEntity(tower);
        }
    });

    return map;
};