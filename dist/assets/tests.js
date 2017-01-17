'use strict';

define('designmonster/tests/about/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | about/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'about/route.js should pass jshint.');
  });
});
define('designmonster/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('designmonster/tests/application/adapter.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('designmonster/tests/application/serializer.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/serializer.js should pass jshint.');
  });
});
define('designmonster/tests/components/ideas-list/card/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/ideas-list/card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ideas-list/card/component.js should pass jshint.');
  });
});
define('designmonster/tests/components/ideas-list/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/ideas-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ideas-list/component.js should pass jshint.');
  });
});
define('designmonster/tests/components/ideas-list/edit/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/ideas-list/edit/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ideas-list/edit/component.js should pass jshint.');
  });
});
define('designmonster/tests/components/ideas-list/item/component.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/ideas-list/item/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ideas-list/item/component.js should pass jshint.');
  });
});
define('designmonster/tests/contact/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | contact/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'contact/route.js should pass jshint.');
  });
});
define('designmonster/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('designmonster/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('designmonster/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'designmonster/tests/helpers/start-app', 'designmonster/tests/helpers/destroy-app'], function (exports, _qunit, _designmonsterTestsHelpersStartApp, _designmonsterTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _designmonsterTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _designmonsterTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('designmonster/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('designmonster/tests/helpers/resolver', ['exports', 'designmonster/resolver', 'designmonster/config/environment'], function (exports, _designmonsterResolver, _designmonsterConfigEnvironment) {

  var resolver = _designmonsterResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _designmonsterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _designmonsterConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('designmonster/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('designmonster/tests/helpers/start-app', ['exports', 'ember', 'designmonster/app', 'designmonster/config/environment'], function (exports, _ember, _designmonsterApp, _designmonsterConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _designmonsterConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _designmonsterApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('designmonster/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('designmonster/tests/item/adapter.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | item/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'item/adapter.js should pass jshint.');
  });
});
define('designmonster/tests/item/model.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | item/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'item/model.js should pass jshint.');
  });
});
define('designmonster/tests/list/edit/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | list/edit/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'list/edit/route.js should pass jshint.');
  });
});
define('designmonster/tests/list/model.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | list/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'list/model.js should pass jshint.');
  });
});
define('designmonster/tests/list/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | list/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'list/route.js should pass jshint.');
  });
});
define('designmonster/tests/lists/new/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | lists/new/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lists/new/route.js should pass jshint.');
  });
});
define('designmonster/tests/lists/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | lists/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lists/route.js should pass jshint.');
  });
});
define('designmonster/tests/projects/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | projects/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'projects/route.js should pass jshint.');
  });
});
define('designmonster/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('designmonster/tests/resources/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resources/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resources/route.js should pass jshint.');
  });
});
define('designmonster/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('designmonster/tests/test-helper', ['exports', 'designmonster/tests/helpers/resolver', 'ember-qunit'], function (exports, _designmonsterTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_designmonsterTestsHelpersResolver['default']);
});
define('designmonster/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('designmonster/tests/unit/about/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('designmonster/tests/unit/about/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/about/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/about/route-test.js should pass jshint.');
  });
});
define('designmonster/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('designmonster/tests/unit/application/adapter-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/application/adapter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define("designmonster/tests/unit/application/serializer-test", ["exports"], function (exports) {});
define('designmonster/tests/unit/application/serializer-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/application/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.');
  });
});
define('designmonster/tests/unit/contact/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('designmonster/tests/unit/contact/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/contact/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/contact/route-test.js should pass jshint.');
  });
});
define('designmonster/tests/unit/projects/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:projects', 'Unit | Route | projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('designmonster/tests/unit/projects/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/projects/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/projects/route-test.js should pass jshint.');
  });
});
define('designmonster/tests/unit/resources/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:resources', 'Unit | Route | resources', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('designmonster/tests/unit/resources/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/resources/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/resources/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('designmonster/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
