let currentColor = "#000";
// let currentMedia = "desktop";
module.exports = {
    getGlobalColor: () => currentColor,
    setGlobalColor: (color) => { currentColor = color; },
    // getMedia: () => currentMedia,
    // setMedia: (media) => { currentMedia = media; },
};