var express = require('express');
var router = express.Router();

var countryController = require('../controllers/country');

/* GET countries listing. */
router.get('/', countryController.countries_list);

/* GET country. */
router.get('/country/:id', countryController.country_detail);

/* POST new country. */
router.post('/create', countryController.country_create);

/* PUT country. */
router.put('/update/:id', countryController.country_update);

/* DEL country. */
router.delete('/delete/:id', countryController.country_delete);

module.exports = router;
