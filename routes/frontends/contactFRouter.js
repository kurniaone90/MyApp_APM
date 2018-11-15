// Require router modules
let express = require('express');
let router = express.Router();

// Require controller modules.
let contact_controller = require('../../controllers/frontends/contactFController.js');

/// CONTACT ROUTES ///

// GET contact index page.
router.get('/', contact_controller.index);

// Get contact create page
router.get('/create', contact_controller.create);

// Post contact create page
router.post('/create/store', contact_controller.store);

// Get contact show page
router.get('/create/id/show', contact_controller.show);

// Get contact edit page
router.get('/create/id/edit', contact_controller.edit);

// Put contact update page
router.put('/create/id/update', contact_controller.update);

// Delete contact destroy page
router.delete('/create/id/delete', contact_controller.destroy);

module.exports = router;