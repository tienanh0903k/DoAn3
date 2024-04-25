const userRouter = require('./userRouter');
const cateRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');
function setupRouter(app) {
    app.use('/api/user', userRouter);
    app.use('/api/category', cateRouter);
    app.use('/api/product', productsRouter);

    //app.use('/api/admin', adminRouter);
}

module.exports = setupRouter;