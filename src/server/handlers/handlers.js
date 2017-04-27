module.exports.gHandlers = require('./ghandlers.js');
module.exports.filters = require('./filtersRequestHelper.js');
module.exports.emailHandler = require('./emailHandler.js');
module.exports.tenDayWeatherForecast = require('./weatherHandlers/tenDayForecastHandler.js');
module.exports.historicalWeatherData = require('./weatherHandlers/historicalWeatherData.js');
module.exports.getParkIdsByActivities = require('../../db/models/getParksByActivity.js');
