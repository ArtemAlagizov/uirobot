import Component from '@ember/component';
import {get} from '@ember/object';

export default Component.extend({
    classNames: ['button-overlay'],

    actions: {
        move(direction) {
            get(this, 'moveCursor')(direction);
        },

        push() {
            get(this, 'push')();
        }
    }
});
