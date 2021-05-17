import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | api-differences', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:api-differences');
    assert.ok(route);
  });
});
