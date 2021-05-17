import Component from '@glimmer/component';

export default class inputField extends Component {

  get destinationElement() {
    // just return some element
    const elementId = this.args.destinationSelectorId ? this.args.destinationSelectorId : 'inElement-destination';

		return document.getElementById(elementId);
  }
}