import Component from '@glimmer/component';

export default class inputField extends Component {

  get destinationElement() {
    // just return some element
		return document.getElementById('inElement-destination');
  }
}
