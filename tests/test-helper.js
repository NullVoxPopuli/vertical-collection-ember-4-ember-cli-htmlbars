import Application from 'vertical-collection-ember-4-ember-cli-htmlbars/app';
import config from 'vertical-collection-ember-4-ember-cli-htmlbars/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
