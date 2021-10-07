import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui/file-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{ui/file-item}}`);

    assert.equal('', '');

    // Template block usage:
    await render(hbs`
      {{#ui/file-item}}
        template block text
      {{/ui/file-item}}
    `);

    assert.equal('', 'template block text');
  });
});
