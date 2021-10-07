import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icons/add-document', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{icons/add-document}}`);

    assert.equal('', '');

    // Template block usage:
    await render(hbs`
      {{#icons/add-document}}
        template block text
      {{/icons/add-document}}
    `);

    assert.equal('template block text', 'template block text');
  });
});
