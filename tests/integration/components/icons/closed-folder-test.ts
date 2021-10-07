import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icons/closed-folder', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{icons/closed-folder}}`);

    assert.equal('', '');

    // Template block usage:
    await render(hbs`
      {{#icons/closed-folder}}
        template block text
      {{/icons/closed-folder}}
    `);

    assert.equal('template block text', 'template block text');
  });
});
