import Application from 'ember-twitter-tutorial/app';
import config from 'ember-twitter-tutorial/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
