"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('designmonster/about/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("designmonster/about/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mc6Tphf1", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Title\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"Item 1\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"Item 2\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"Item 3\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"Item 4\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"Item 5\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Design Monster title\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Design Monster content\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/about/template.hbs" } });
});
define('designmonster/app', ['exports', 'ember', 'designmonster/resolver', 'ember-load-initializers', 'designmonster/config/environment'], function (exports, _ember, _designmonsterResolver, _emberLoadInitializers, _designmonsterConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _designmonsterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _designmonsterConfigEnvironment['default'].podModulePrefix,
    Resolver: _designmonsterResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _designmonsterConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('designmonster/application/adapter', ['exports', 'designmonster/config/environment', 'active-model-adapter'], function (exports, _designmonsterConfigEnvironment, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _designmonsterConfigEnvironment['default'].apiHost
  });
});
define('designmonster/application/serializer', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define("designmonster/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yBXaIPqb", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#menu-collapse\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"menu-collapse\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"about\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"contact\"],null,1],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"lists\"],null,0],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Ideas\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Contact\"]],\"locals\":[]},{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/application/template.hbs" } });
});
define('designmonster/components/ideas-list/card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isEmpty: _ember['default'].computed('list', function () {
      var items = this.get('list').hasMany('items');
      console.log('items is ', items);
      return items.ids().length === 0;
    }),
    actions: {
      editList: function editList() {
        console.log("you're inside the editList in the ideas-list/card component");
        console.log("the list you are cliking edit on is", this.get('list'));
        this.sendAction('editList', this.get('list'));
      },
      deleteList: function deleteList() {
        console.log("you're inside the deleteList in the ideas-list/card component");
        console.log("the list you are cliking delete on is", this.get('list'));
        this.sendAction('deleteList', this.get('list'));
      }
    }
  });
});
define("designmonster/components/ideas-list/card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3+XdkSj3", "block": "{\"statements\":[[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"list\",[\"get\",[\"list\"]]],null,1],[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-med btn-warning\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editList\"]],[\"flush-element\"],[\"text\",\"Edit!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isEmpty\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-med btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteList\"]],[\"flush-element\"],[\"text\",\"Delete!\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"list\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/components/ideas-list/card/template.hbs" } });
});
define('designmonster/components/ideas-list/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newItem: {
      content: null,
      done: false
    },
    classNames: ['listr'],
    classNameBindings: ['listDetailHidden'],
    listDetailHidden: false,
    actions: {
      toggleListDetail: function toggleListDetail() {
        return this.toggleProperty('listDetailHidden');
      },
      toggleItemDone: function toggleItemDone(item) {
        console.log("you're inside the toggledone in ideas-list component and item is", item);
        this.sendAction('toggleItemDone', item);
      },
      deleteItem: function deleteItem(item) {
        this.sendAction('deleteItem', item);
      },
      createItem: function createItem() {
        console.log("inside create item this.get(newItem) is ", this.get('newItem'));
        var data = this.get('newItem');
        //in the line below we are associating the list with the list that was passed to it(and because Ember - we get the id with that data)
        data.list = this.get('list');
        this.sendAction('createItem', data);
      }
    }
  });
});
define('designmonster/components/ideas-list/edit/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save() {
        this.sendAction('save', this.get('list'));
      },
      cancel: function cancel() {
        this.sendAction('cancel', this.get('list'));
      }
    }
  });
});
define("designmonster/components/ideas-list/edit/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ysXTuiNx", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"List Title\",[\"get\",[\"list\",\"title\"]]]]],false],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-med btn-warning\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-med btn-warning\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/components/ideas-list/edit/template.hbs" } });
});
define('designmonster/components/ideas-list/item/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNameBindings: ['listItemCompleted'],
    //use this to toggle strike through on item done property
    listItemCompleted: _ember['default'].computed.alias('item.done'),
    // listItemCompleted: false,
    actions: {
      toggleDone: function toggleDone() {
        //this line sends the action BACK UP to item,
        console.log("you are inside toggleDone in ideas-list/item");
        this.sendAction('toggleDone', this.get('item'));
      },
      'delete': function _delete() {
        console.log("DELETE ME!");
        this.sendAction('delete', this.get('item'));
      }
    }
  });
});
define("designmonster/components/ideas-list/item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mMvd28Y6", "block": "{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"list-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleDone\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"content\"]],false],[\"close-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\"]],[\"flush-element\"],[\"text\",\"DELETE!\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"type\",\"checked\",\"change\"],[\"list-item\",\"checkbox\",[\"get\",[\"item\",\"done\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleDone\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/components/ideas-list/item/template.hbs" } });
});
define("designmonster/components/ideas-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0RWIqAaY", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"list-header\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleListDetail\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"list\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ol\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"list\",\"items\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createItem\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"placeholder\",\"value\"],[\"field\",\"New Item\",[\"get\",[\"newItem\",\"content\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-med btn-warning\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"CREATE!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"ideas-list/item\"],null,[[\"item\",\"toggleDone\",\"delete\"],[[\"get\",[\"item\"]],\"toggleItemDone\",\"deleteItem\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"item\"]}],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/components/ideas-list/template.hbs" } });
});
define('designmonster/contact/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("designmonster/contact/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "psu5BZnb", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"inputEmail\"],[\"flush-element\"],[\"text\",\"Email address\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"email\"],[\"static-attr\",\"class\",\"form-control\"],[\"static-attr\",\"id\",\"inputEmail\"],[\"static-attr\",\"placeholder\",\"Email\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"inputComments\"],[\"flush-element\"],[\"text\",\"Comments\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"textarea\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"static-attr\",\"id\",\"inputComments\"],[\"static-attr\",\"placeholder\",\"Comments\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-default\"],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/contact/template.hbs" } });
});
define('designmonster/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('designmonster/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('designmonster/helpers/app-version', ['exports', 'ember', 'designmonster/config/environment'], function (exports, _ember, _designmonsterConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _designmonsterConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('designmonster/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('designmonster/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("designmonster/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1FUISqQM", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to Design Monster\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Empowering You To Break Through\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Click to go somewhere\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Click to go somewhere else\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/index/template.hbs" } });
});
define("designmonster/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('designmonster/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'designmonster/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _designmonsterConfigEnvironment) {
  var _config$APP = _designmonsterConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('designmonster/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('designmonster/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('designmonster/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('designmonster/initializers/export-application-global', ['exports', 'ember', 'designmonster/config/environment'], function (exports, _ember, _designmonsterConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_designmonsterConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _designmonsterConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_designmonsterConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('designmonster/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('designmonster/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('designmonster/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("designmonster/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('designmonster/item/adapter', ['exports', 'designmonster/application/adapter'], function (exports, _designmonsterApplicationAdapter) {
  exports['default'] = _designmonsterApplicationAdapter['default'].extend({
    createRecord: function createRecord(store, type, record) {
      var api = this.get('host');
      var serialized = this.serialize(record, { includeId: true });
      var listId = serialized.list_id;
      var url = api + '/lists/' + listId + '/items';
      var data = { item: serialized };

      return this.ajax(url, 'POST', { data: data });
    }
  });
});
define('designmonster/item/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    content: _emberData['default'].attr('string'),
    done: _emberData['default'].attr('boolean'),
    list: _emberData['default'].belongsTo('list')
  });
});
define('designmonster/list/edit/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('list', params.list_id);
    },
    actions: {
      save: function save(list) {
        console.log('you got to the list/edit route Your list is ', list);
        list.save();
      },
      cancel: function cancel(list) {
        list.rollbackAttributes();
        this.transitionTo('lists');
      }
    }
  });
});
define("designmonster/list/edit/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "K/ypNHrQ", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ideas-list/edit\"],null,[[\"list\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"save\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/list/edit/template.hbs" } });
});
define('designmonster/list/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    hidden: _emberData['default'].attr('boolean'),
    items: _emberData['default'].hasMany('item')
  });
});
define('designmonster/list/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      //this will return the data from 'store' - you're saying findRecord which is a method that calls ALL things
      return this.get('store').findRecord('list', params.list_id);
    },
    actions: {
      toggleItemDone: function toggleItemDone(item) {
        console.log('you are in the toggleItemDone and item is ', item);
        item.toggleProperty('done');
        console.log('inside list route after toggle and item is ', item);
        item.save();
      },
      deleteItem: function deleteItem(item) {
        item.destroyRecord();
      },
      createItem: function createItem(newItem) {
        console.log("inside the route creat item, newItem is ", newItem);
        var item = this.get('store').createRecord('item', newItem);
        console.log("inside the route creat item, newItem is ", item);
        item.save();
      }
    }
  });
});
define("designmonster/list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6p1nqx7t", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"ideas-list\"],null,[[\"list\",\"toggleItemDone\",\"deleteItem\",\"createItem\"],[[\"get\",[\"model\"]],\"toggleItemDone\",\"deleteItem\",\"createItem\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/list/template.hbs" } });
});
define('designmonster/lists/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').createRecord('list', {});
    },
    actions: {
      createList: function createList(list) {
        console.log("inside list/new route createList");
        list.save();
      },
      cancelCreateList: function cancelCreateList(list) {
        console.log("inside lists/new cancel");
        list.rollbackAttributes();
        this.transitionTo('lists');
      }
    }
  });
});
define("designmonster/lists/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ogfVd/7e", "block": "{\"statements\":[[\"text\",\"Is anything HERE?!\\n\"],[\"append\",[\"helper\",[\"ideas-list/edit\"],null,[[\"list\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"createList\",\"cancelCreateList\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/lists/new/template.hbs" } });
});
define('designmonster/lists/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //this will return the data from 'store' - you're saying findAll which is a method that calls ALL things
      return this.get('store').findAll('list');
    },
    actions: {
      editList: function editList(list) {
        console.log("inside the lists route, list is", list);
        this.transitionTo('list/edit', list);
      },
      deleteList: function deleteList(list) {
        list.destroyRecord();
      }
    }
  });
});
define("designmonster/lists/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2E4I0e2I", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"ListR\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"block\",[\"link-to\"],[\"lists/new\"],null,0],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-med btn-danger\"],[\"flush-element\"],[\"text\",\"Create a New List\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"ideas-list/card\"],null,[[\"list\",\"editList\",\"deleteList\"],[[\"get\",[\"list\"]],\"editList\",\"deleteList\"]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[\"list\"]}],\"hasPartials\":false}", "meta": { "moduleName": "designmonster/lists/template.hbs" } });
});
define('designmonster/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('designmonster/router', ['exports', 'ember', 'designmonster/config/environment'], function (exports, _ember, _designmonsterConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _designmonsterConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('lists');
    this.route('lists/new');
    this.route('list', { path: 'lists/:list_id' });
    this.route('list/edit', { path: 'lists/:list_id/edit' });
  });

  exports['default'] = Router;
});
define('designmonster/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('designmonster/config/environment', ['ember'], function(Ember) {
  var prefix = 'designmonster';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("designmonster/app")["default"].create({"name":"designmonster","version":"0.0.1+c879fbbf"});
}

/* jshint ignore:end */
//# sourceMappingURL=designmonster.map
