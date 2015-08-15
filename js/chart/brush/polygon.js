jui.define("chart.brush.polygon", [], function() {
    var PolygonBrush = function() {
        this.drawPath = function(g) {
            var path = this.chart.svg.path({
                stroke: this.chart.theme("polygonBorderColor"),
                "stroke-width": this.chart.theme("polygonBorderWidth")
            });

            for(var i = 0, len = this.faces.length; i < len; i++) {
                var face = this.faces[i]

                for (var j = 0, len2 = face.length; j < len2; j++) {
                    var targetPoint = this.cache[face[j]];

                    if (targetPoint) {
                        var x = targetPoint[0],
                            y = targetPoint[1];

                        if (j == 0) {
                            path.MoveTo(x, y);
                        } else {
                            if(j == face.length - 1) {
                                var firstPoint = this.cache[face[0]],
                                    x = firstPoint[0],
                                    y = firstPoint[1];

                                path.LineTo(x, y);
                            } else {
                                path.LineTo(x, y);
                            }
                        }
                    }
                }
            }

            g.append(path);
        }

        this.drawPolygon = function(g) {
            for(var i = 0, len = this.faces.length; i < len; i++) {
                var polygon = this.chart.svg.polygon({
                    fill: this.chart.theme("polygonBackgroundColor")
                });

                var face = this.faces[i]

                for (var j = 0, len2 = face.length; j < len2; j++) {
                    var targetPoint = this.cache[face[j]];

                    if (targetPoint) {
                        var x = targetPoint[0],
                            y = targetPoint[1];

                        polygon.point(x, y);
                    }
                }

                g.append(polygon);
            }
        }

        this.drawBefore = function() {
            var model = this.axis.data;

            this.vertices = model.vertices || [];
            this.faces = model.faces || [];
            this.cache = [];

            for(var i = 0, len = this.vertices.length; i < len; i++) {
                var vertex = this.vertices[i];
                this.cache.push(new Float32Array([ this.axis.x(vertex[0]), this.axis.y(vertex[1]) ]));
            }
        }

        this.draw = function() {
            var g = this.chart.svg.group();

            if(this.brush.fill) {
                this.drawPolygon(g);
            }

            this.drawPath(g);

            return g;
        }
    }

    PolygonBrush.setup = function() {
        return {
            fill: false
        }
    }

    return PolygonBrush;
}, "chart.brush.core");