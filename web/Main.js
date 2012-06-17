goog.provide('nx.Main');

goog.require('nx.Ctx');
goog.require('nx.HousePresenter');

/**
 * @constructor
 */
nx.Main = function(){

    // create log() utility instead of console.log
    window.log = console.log.bind(console);

    // instantiate ctx
    var ctx = nx.Ctx.getInstance();

    // run the presenter
    new nx.HousePresenter(ctx.getHouseView(), ctx)
        .init()
        .render(ctx.getRoot());

    log('nx.Main::constructor...');
};

goog.exportSymbol('nx.Main', nx.Main);

