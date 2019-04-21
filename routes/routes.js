var incoming = function(req, res) {
    res.render("index.html");
}

var homepage = function(req, res) {
    res.render("index.ejs");
}

var routes = {
    incoming: incoming,
    homepage: homepage
};

module.exports = routes;

// AIzaSyA9sXLs1zb4QOgSVmyTE-Pf4Vl-k2rMv_o