import Component from '@ember/component';

export default Component.extend({
    classNames: ['video-component'],

    init() {
        this._super(arguments);

        this.setup = {
            playbackRates: [0.5, 1, 1.5, 2]
        };

        this.src = [
            {src: 'assets/video/owls.mp4', type: 'video/mp4'}
        ];
    },

    actions: {
        play() {
            this.incrementProperty('playCount');
        },

        playing() {
            this.set('paused', false);
            this.incrementProperty('playingCount');
        },

        ready(player, component) {
            component.bindPropertyToPlayer(player, 'controls');
            component.bindPropertyToPlayer(player, 'fluid');
            component.bindPropertyToPlayer(player, 'loop');
            component.bindPropertyToPlayer(player, 'muted');
            component.bindPropertyToPlayer(player, 'playbackRate');
            component.bindPropertyToPlayer(player, 'poster');
            component.bindPropertyToPlayer(player, 'src');
            component.bindPropertyToPlayer(player, 'volume');

            player.play();
        }
    },

    // Media properties
    controls: false,
    fluid: true,
    loop: true,
    muted: true,
    playbackRate: 1,
    poster: 'https://vjs.zencdn.net/v/oceans.png',

    // Media events
    playCount: 0,
    playingCount: 0
});
