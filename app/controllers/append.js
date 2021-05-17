import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class append extends Controller {

	@tracked changeWormholeDestination = false;
	@tracked wormholeDestination = 'ember-wormhole-destination';
  @tracked showAppendComponent = false;
  @tracked showDefaultBehavior = false;

	@action
	onChangeWormholeDestination() {
    this.changeWormholeDestination = !this.changeWormholeDestination;

    if (this.changeWormholeDestination) {
      this.wormholeDestination = 'ember-wormhole-destination-second';
    } else {
			this.wormholeDestination = 'ember-wormhole-destination';
    }
  }

  @action
  showAppendInput() {
    this.showAppendComponent = !this.showAppendComponent;
  }

	@action
	showInFeatureDefaultBehavior() {
    this.showDefaultBehavior = !this.showDefaultBehavior;
  }
}