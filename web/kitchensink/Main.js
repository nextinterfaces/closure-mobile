/**
 * Copyright 2012 http://www.nextinterfaces.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
goog.provide('nx.Main');

goog.require('nx.Ctx');
goog.require('nx.HousePresenter');

/**
 * @constructor
 */
nx.Main = function(){

    if(!window.console){
        return;
    }

    // create log() utility instead of console.log
    if (nx.isTouch()) {
        window.log = function(txt,a,b,c){window.console.log(txt,a,b,c)};
    } else {
        window.log = window.console.log.bind(window.console);
    }

    // instantiate ctx
    var ctx = nx.Ctx.getInstance();

    // run the sample mvp
    new nx.HousePresenter(ctx.getHouseView(), ctx)
        .init()
        .render(ctx.getRoot());

};

goog.exportSymbol('nx.Main', nx.Main);

