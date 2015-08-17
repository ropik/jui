jui.define("chart.brush.columnfull3d", [ "util.transform" ], function(Transform) {
    var ColumnFull3DBrush = function() {
        this.getMinAndMax = function(points) {
            var min = { x: 0, y: 0, z: 0 },
                max = { x: 0, y: 0, z: 0 };

            for(var i = 0; i < points.length - 1; i++) {
                min.x = Math.min(points[i][0], points[i + 1][0]);
                min.y = Math.min(points[i][1], points[i + 1][1]);
                min.z = Math.min(points[i][2], points[i + 1][2]);
                max.x = Math.max(points[i][0], points[i + 1][0]);
                max.y = Math.max(points[i][1], points[i + 1][1]);
                max.z = Math.max(points[i][2], points[i + 1][2]);
            }

            return {
                min: min,
                max: max
            }
        }

        this.transformPoints = function(points) {
            var rx = this.brush.rx,
                ry = this.brush.ry,
                rz = this.brush.rz;

            var minAndMax = this.getMinAndMax(points),
                cx = (minAndMax.min.x + minAndMax.max.x) / 2,
                cy = (minAndMax.min.y + minAndMax.max.y) / 2,
                cz = (minAndMax.min.z + minAndMax.max.z) / 2;

            if(rx != 0) {
                var transform = new Transform(points);
                points = transform.merge(
                    [ "move3d", cx, cy, cz ],
                    [ "rotate3dx", rx ],
                    [ "move3d", -cx, -cy, -cz ]
                );
            }

            if(ry != 0) {
                var transform = new Transform(points);
                points = transform.merge(
                    [ "move3d", cx, cy, cz ],
                    [ "rotate3dy", ry ],
                    [ "move3d", -cx, -cy, -cz ]
                );
            }

            if(rz != 0) {
                var transform = new Transform(points);
                points = transform.merge(
                    [ "move3d", cx, cy, cz ],
                    [ "rotate3dz", rz ],
                    [ "move3d", -cx, -cy, -cz ]
                );
            }

            return points;
        }

        this.getFloorPoints = function(w, h, x, y) {
            var max = this.brush.max;

            var points = [
                [ x,  		y,  	0,      1 ],
                [ w + x,   	y,  	0,      1 ],
                [ w + x,	h + y, 	0,      1 ],
                [ x,  		h + y, 	0,      1 ],

                [ x,  		y,  	0,      1 ],
                [ w + x,   	y,  	0,      1 ],
                [ w + x,	y,		max,    1 ],
                [ x,	  	y, 		max,    1 ],

                [ x,  		y,  	0,      1 ],
                [ x,   		h + y,  0,      1 ],
                [ x,		h + y,	max,    1 ],
                [ x,  		y, 		max,    1 ]
            ];

            return this.transformPoints(points);
        }

        this.getPoints = function(width, height, x, y, value) {
            var w2 = width / 2,
                h2 = height / 2;

            var points = [
                [ -w2 + x,  h2 + y,     0,      1 ],
                [ w2 + x,   h2 + y,     0,      1 ],
                [ w2 + x,   -h2 + y,    0,      1 ],
                [ -w2 + x,  -h2 + y,    0,      1 ],

                [ -w2 + x,  h2 + y,     value,  1 ],
                [ w2 + x,   h2 + y,     value,  1 ],
                [ w2 + x,   -h2 + y,    value,  1 ],
                [ -w2 + x,  -h2 + y,    value,  1 ],

                [ -w2 + x,  h2 + y,     0,      1 ],
                [ w2 + x,  	h2 + y,     0,      1 ],
                [ w2 + x,  	h2 + y, 	value,  1 ],
                [ -w2 + x,  h2 + y, 	value,  1 ],

                [ -w2 + x,  -h2 + y,    0,      1 ],
                [ w2 + x,  	-h2 + y,    0,      1 ],
                [ w2 + x,  	-h2 + y,    value,  1 ],
                [ -w2 + x,  -h2 + y,    value,  1 ],

                [ -w2 + x,  -h2 + y,    0,      1 ],
                [ -w2 + x,  -h2 + y,    value,  1 ],
                [ -w2 + x,  h2 + y, 	value,  1 ],
                [ -w2 + x,  h2 + y, 	0,      1 ],

                [ w2 + x,  	-h2 + y,    0,      1 ],
                [ w2 + x,  	-h2 + y,    value,  1 ],
                [ w2 + x,  	h2 + y, 	value,  1 ],
                [ w2 + x,  	h2 + y, 	0,      1 ]
            ];

            return this.transformPoints(points);
        }

        this.getMaxValue = function() {
            var data = this.axis.data,
                target = this.brush.target,
                max = 0;

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < target.length; j++) {
                    var value = data[i][target[j]];

                    if (value > max) {
                        max = value;
                    }
                }
            }

            return max;
        }

        this.drawFloors = function(g) {
            var padding = this.chart.get("padding"),
                area = this.axis.area(),
                points = this.getFloorPoints(area.width, area.height, 0, 0);

            for(var k = 0; k < points.length; k++) {
                if(k % 4 == 0 || k == 0) {
                    _path = this.chart.svg.polygon({
                        "fill-opacity": 0.2,
                        "stroke-width": 1,
                        fill: "#dcdcdc",
                        stroke: "#dcdcdc"
                    });

                    g.append(_path);
                }

                if(_path != null) {
                    _path.point(points[k][0], points[k][1]);
                }
            }
        }

        this.draw = function() {
            var g = this.chart.svg.group(),
                data = this.axis.data,
                target = this.brush.target,
                w = this.brush.width,
                h = this.brush.height,
                maxValue = this.getMaxValue();

            // 배경 그리기
            //this.drawFloors(g);

            for(var i = 0; i < data.length; i++) {
                var x = this.axis.x(i);

                for(var j = 0; j < target.length; j++) {
                    var value = data[i][target[j]],
                        y = this.axis.y(j),
                        height = this.getScaleValue(value, 0, maxValue, 0, this.brush.max),
                        points = this.getPoints(w, h, x, y, height),
                        color = this.color(i, j);

                    for(var k = 0; k < points.length; k++) {
                        if(k % 4 == 0 || k == 0) {
                            _path = this.chart.svg.polygon({
                                "fill-opacity": 0.4,
                                "stroke-width": 1,
                                fill: color,
                                stroke: color
                            });

                            g.append(_path);
                        }

                        if(_path != null) {
                            _path.point(points[k][0], points[k][1]);
                        }
                    }
                }
            }

            return g;
        }
    }

    ColumnFull3DBrush.setup = function() {
        return {
            width: 20,
            height: 20,
            rx: 0,
            ry: 0,
            rz: 0,
            max: 0
        }
    }

    return ColumnFull3DBrush;
}, "chart.brush.core");