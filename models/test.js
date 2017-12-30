"use strict";
module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
        testID: DataTypes.STRING,
        bytes_sent: DataTypes.INTEGER,
        download: DataTypes.DOUBLE,
        timestamp: DataTypes.DATE,
        bytes_received: DataTypes.INTEGER,
        ping: DataTypes.DOUBLE,
        upload: DataTypes.DOUBLE,
        latency: DataTypes.DOUBLE,
        location: DataTypes.STRING,
        lat: DataTypes.DOUBLE,
        lng: DataTypes.DOUBLE,
        host: DataTypes.STRING,
        sponsor: DataTypes.STRING,
        distance: DataTypes.DOUBLE,
    });
    return Test;
}
