const moment = require('moment');

//middleware tager altid imod req, res, og next
//denne middleware benytter sig af modulet Moment til at registrere hvornår et givent req blev sendt til serveren
const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${
            req.originalUrl
        }: ${moment().format()}`
        );
            next();
};

module.exports = logger;

