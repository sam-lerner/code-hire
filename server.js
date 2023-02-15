const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore =  require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const path = require('path');
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({helpers});

const sess = {
    secret: 'super secret secret',
    cookie: {
        maxAge: 24*60*60*1000,
    },
    resave: false,
    saveUninitialized: true,
    // store: new SequelizeStore({
    //     db: sequelize
    // })
};
app.use(session(sess));
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);
hbs.handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});
