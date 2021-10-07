import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icons/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{icons/image}}`);

    assert.equal('', '');

    // Template block usage:
    await render(hbs`
      {{#icons/image}}
        template block text
      {{/icons/image}}
    `);

    assert.equal('', 'template block text');
  });
});
