/**
 * Created by juliahentz on 02/02/16.
 */
module.exports = function(app){

    ejsRouting(app);
    apiRouting(app);

};

function ejsRouting(app){

    var icons = [
        { icon: 'icon-disc', name: 'home', route:'/'},
        { icon: 'icon-image', name: 'design', route:'/design'},
        { icon: 'icon-air-play', name: 'development', route:'/development'},
        { icon: 'icon-head', name: 'about', route:'/about'},
        { icon: 'icon-speech-bubble', name: 'contact', route:'/contact'}
    ];

    app.get('/', function(req, res) {
        res.render('pages/index', {
            icons:icons
        });
    });
    app.get('/design', function(req,res){
        res.render('pages/design', {
            icons:icons
        });
    });
    app.get('/development', function(req,res){
        res.render('pages/development', {
            icons:icons
        });
    });
    app.get('/about', function(req,res){
        res.render('pages/about', {
            icons:icons
        });
    });
    app.get('/contact', function(req,res){
        res.render('pages/contact', {
            icons:icons
        });
    });

}

function apiRouting(app){



}