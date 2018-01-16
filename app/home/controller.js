import Controller from '@ember/controller';
import $ from 'jquery'

export default Controller.extend({
    actions: {
        moveCursor(direction) {
            this.moveCursor(direction);
        },

        push() {
            const getArrowButton = id => $(`#arrow-${id}`)[0];

            const $cursor = $('.cursor-component')[0];
            const actions = [
                'left',
                'right',
                'up',
                'down',
                'rotate-right',
                'rotate-left'
            ];

            for (const actionId of actions) {
                if (this.isOverlapping($cursor, getArrowButton(actionId))) {
                    // send corresponding action to robot

                    break;
                }
            }
        }
    },

    moveCursor(direction) {
        const $cursor = $('.cursor-component');
        const currentOffset = $cursor.offset();
        const screenWidth = $(window).width();
        const screenHeight = $(window).height();
        const cursorWidth = $cursor.width();
        const cursorHeight = $cursor.height();
        const step = 20;
        let offsetLeft = currentOffset.left;
        let offsetTop = currentOffset.top;

        switch (direction) {
            case 'left':
                offsetLeft = offsetLeft - step < 0 ? 0 : offsetLeft - step;

                break;
            case 'right':
                offsetLeft = offsetLeft + step > screenWidth - cursorWidth ? screenWidth - cursorWidth : offsetLeft + step;

                break;
            case 'up':
                offsetTop = offsetTop - step < 0 ? 0 : offsetTop - step;

                break;
            case 'down':
                offsetTop = offsetTop + step > screenHeight - cursorHeight ? screenHeight - cursorHeight : offsetTop + step;

                break;
        }

        $cursor.offset({
            top: offsetTop,
            left: offsetLeft
        });
    },

    isOverlapping(element1, element2) {
        const emptyRect = {
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
        };
        const rect1 = element1.getBoundingClientRect() || emptyRect;
        const rect2 = element2.getBoundingClientRect() || emptyRect;

        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }
});
