function Slider(config){
    this.show = ( typeof config.figureShow === 'string') ?
    document.querySelector(config.container) : config.container
}