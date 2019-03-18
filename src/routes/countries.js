var express = require('express');
var router = express.Router();

var countryController = require('../controllers/country');

/* GET countries listing. */
router.get('/', countryController.countries_list);

/* RENDER countries listing. */
router.get('/list', countryController.countriesRender);

/* DYNAMIC page. */
router.get('/param/:param', countryController.countriesDynamic);

/* Query parameters. */
router.get('/query', countryController.countriesQuery);

/* GET country. */
router.get('/country/:id', countryController.country_detail);

/* POST new country. */
router.post('/create', countryController.country_create);

/* PUT country. */
router.put('/update/:id', countryController.country_update);

/* DEL country. */
router.delete('/delete/:id', countryController.country_delete);

module.exports = router;
