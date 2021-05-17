import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class inputField extends Component {

  inPlaceElementId = `in-place-${guidFor(this)}`;

	value = "";

  get destinationElement() {
  	const elementId = this.args.renderInPlace ? this.inPlaceElementId : 'inElement-destination';

		return document.getElementById(elementId);
  }

	@action
	onClickButton() {
    alert("I'm from in-element");
  }
}