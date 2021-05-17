import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RenderState extends Controller {

  @tracked renderInPlace = false;

	@tracked changeWormholeDestination = false;
	@tracked wormholeDestination = 'ember-wormhole-destination';

  @action
  onClickRenderInPlace() {
    this.renderInPlace = !this.renderInPlace;
  }

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
	onClickButton() {
    alert("I'm from ember-wormhole");
  }
}