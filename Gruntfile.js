var fs = require("fs");

function initMetatag(grunt) {
    var metatag = grunt.config("metatag");

    loopFiles(metatag.en, "./en");
    loopFiles(metatag.ko, "./ko");

    function loopFiles(obj, path) {
        var files = fs.readdirSync(path);

        for(var i = 0; i < files.length; i++) {
            var file = path + "/" + files[i],
                stats = fs.statSync(file);

            if(stats.isFile()) {
                updateFile(obj, file);
            } else if(stats.isDirectory()) {
                loopFiles(obj, file);
            }
        }
    }

    function updateFile(obj, path) {
        var text = fs.readFileSync(path, "utf-8"),
            buffer = [];

        if(typeof(text) == "string") {
            var rows = text.split("\n"),
                title = "";

            // 메타 태그 삭제
            for(var i = 0; i < rows.length; i++) {
                var r = rows[i];

                if(r.toLowerCase().indexOf("<title>") != -1) {
                    var regx = new RegExp(/<title>(.*)<\/title>/g);
                    title = regx.exec(r)[1];
                }

                if(r.toLowerCase().indexOf("</head>") != -1) {
                    buffer.push(getMetatag("title", obj.all.title + title));
                    buffer.push(getMetatag("description", obj.all.description));
                    buffer.push(getMetatag("keywords", obj.all.keywords));
                    buffer.push(getMetatag("author", obj.all.author));

                    if(path.indexOf("index.html") != -1) {
                        buffer.push('<meta charset="UTF-8">');
                        buffer.push(getMetatag("title", obj.index.title, true));
                        buffer.push(getMetatag("description", obj.index.description, true));
                        buffer.push(getMetatag("type", obj.index.type, true));
                        buffer.push(getMetatag("url", obj.index.url, true));
                        buffer.push(getMetatag("image", obj.index.image, true));
                    }

                    buffer.push(r);
                } else {
                    if(r.toLowerCase().indexOf("<meta") == -1) {
                        buffer.push(r);
                    }
                }
            }

            fs.writeFileSync(path, buffer.join("\n"), "utf-8");
            grunt.log.writeln("'" + path + "' updated");
        }
    }

    function getMetatag(key, value, isSocial) {
        if(!isSocial) {
            return '<meta name="' + key + '" content="' + value + '" />';
        } else {
            return '<meta property="og:' + key + '" content="' + value + '" />';
        }
    }

    grunt.log.writeln("Metadata synchronized");
}

function initSitemap(grunt) {
    var sitemap = grunt.config("sitemap"),
        targets = [ "./ko", "./en"],
        buffer = [];

    for(var i = 0; i < targets.length; i++) {
        loopFiles(sitemap, targets[i]);
    }

    fs.writeFileSync("./sitemap.xml", getXML(buffer), "utf-8");
    grunt.log.writeln("Sitemap synchronized");

    function loopFiles(obj, path) {
        var files = fs.readdirSync(path);

        for(var i = 0; i < files.length; i++) {
            var file = path + "/" + files[i],
                stats = fs.statSync(file);

            if(stats.isFile()) {
                var url = "http://seogi1004.github.io/jui/" + file.split("./")[1];
                buffer.push("<url><loc>" + url + "</loc></url>");
            } else if(stats.isDirectory()) {
                loopFiles(obj, file);
            }
        }
    }

    function getXML(files) {
        return '<?xml version="1.0" encoding="UTF-8"?>' +
        '<urlset ' +
            'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 ' +
            'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">' +
            files.join("") +
        '</urlset>';
    }
}

module.exports = function(grunt) {
    grunt.initConfig({
        metatag : {
            en : {
                all : {
                    title : "JENNIFER UI: ",
                    description : "JENNIFER UI is all free. a simple, fast, many: JUI is all-in-one desktop UI framework. Bootstrap support, Independent style & script components, SVG-based chart components.",
                    keywords : "HTML, CSS, JS, JavaScript, Node.js, SVG, chart, framework, bootstrap, front-end, frontend, web development, free, MIT",
                    author : "Alvin, Jayden and Yoha"
                },
                index : {
                    title : "JENNIFER UI: HTML5 components and SVG charts (Node.js support)",
                    description : "JENNIFER UI is all free. a simple, fast, many: JUI is all-in-one desktop UI framework. Bootstrap support, Independent style & script components, SVG-based chart components.",
                    type : "website",
                    url : "http://seogi1004.github.io/jui/en/index.html",
                    image: "http://seogi1004.github.io/jui/res/img/jui_link.jpg"
                }
            },
            ko : {
                all : {
                    title : "JENNIFER UI: ",
                    description : "JENNIFER UI는 완전 무료입니다. 심플하며 빠르고 다양한 JUI는 올인원 데스크탑 UI 프레임워크입니다. 부트스트랩을 지원하고, 독립적으로 동작하는 스크립트와 스타일 컴포넌트 그리고 SVG 차트를 제공합니다.",
                    keywords : "HTML, CSS, JS, JavaScript, Node.js, SVG, chart, framework, bootstrap, front-end, frontend, web development, free, MIT",
                    author : "Alvin, Jayden and Yoha"
                },
                index : {
                    title : "JENNIFER UI: HTML5 기반의 컴포넌트 및 SVG 차트 (Node.js 지원)",
                    description : "JENNIFER UI는 완전 무료입니다. 심플하며 빠르고 다양한 JUI는 올인원 데스크탑 UI 프레임워크입니다. 부트스트랩을 지원하고, 독립적으로 동작하는 스크립트와 스타일 컴포넌트 그리고 SVG 차트를 제공합니다.",
                    type : "website",
                    url : "http://seogi1004.github.io/jui/ko/index.html",
                    image: "http://seogi1004.github.io/jui/res/img/jui_link.jpg"
                }
            }
        },
        sitemap : {
            url : true,
            modify : false
        },
        pkg: grunt.file.readJSON("package.json")
    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask("metatag", "Metadata Synchronized", function() {
        initMetatag(grunt);
    });

    grunt.registerTask("sitemap", "Sitemap Created", function() {
        initSitemap(grunt);
    });

    grunt.registerTask("default", [ "metatag", "sitemap" ]);
};
