let contactController = require('../../models/frontends/contactFModel');

exports.index = function(req, res) {
    let data = 'index';
    let val	= contactController.getIndex(data);
    // res.send(contactController.getIndex(data));
    // res.render('FrontEnds/PageContact/indexFView');
    console.log(val);
    res.render('FrontEnds/PageContact/indexFView', {
    	title: 'Ady Kurniwans',
    	val: val
    });
};

exports.create = function(req, res) {
    let data = 'create';
    res.send(contactController.getCreate(data));
};

exports.store = function(req, res) {
    let data = 'store';
    res.send(contactController.postStore(data));
};

exports.show = function(req, res) {
    let data = 'show';
    res.send(contactController.getShow(data));
};

exports.edit = function(req, res) {
    let data = 'edit';
    res.send(contactController.getEdit(data));
};

exports.update = function(req, res) {
    let data = 'update';
    res.send(contactController.putUpdate(data));
};

exports.destroy = function(req, res) {
    let data = 'destroy';
    res.send(contactController.deleteDestroy(data));
};