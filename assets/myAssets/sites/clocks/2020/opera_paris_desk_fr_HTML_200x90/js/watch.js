
// ******* Configuration ********** //
// language leave blank for english
var rolexClockLanguage = 'fr';// en,fr,zhs,ja,de,ru,es

/*
 * Available dimensions.
 * How to: comment unused ones.
 */
var rolexClockScale = {
    50: {width: 100, height: 100, scale: 0.55},
    60: {width: 120, height: 120, scale: 0.65},
    65: {width: 130, height: 130, scale: 0.70},
    70: {width: 140, height: 140, scale: 0.75},
    75: {width: 150, height: 150, scale: 0.80},
    80: {width: 160, height: 160, scale: 0.85},
    90: {width: 180, height: 180, scale: 0.95},
    100: {width: 200, height: 200, scale: 1.05},
    110: {width: 220, height: 220, scale: 1.15},
    120: {width: 240, height: 240, scale: 1.25},
    130: {width: 260, height: 260, scale: 1.35},
    140: {width: 280, height: 280, scale: 1.45},
    150: {width: 300, height: 300, scale: 1.55},
    300: {width: 600, height: 600, scale: 3}
}
var dim = rolexClockScale[80];

/*
 * Available assets
 * How to use: comment unused ones.
 */
var rolexAssets = {
    green: 'css/images/hands/green/',
    white: 'css/images/hands/white/',
    silver: 'css/images/hands/silver/'
}
var handsFolder = rolexAssets.green;

var clockSettings = {
    LANG: rolexClockLanguage, // Language
    contentWidth: 200, // px Width of the content
    contentHeight: 90, // px Height of the content
    clockWidth: dim.width, /* width of the clock to be set on top the html file */
    clockHeight: dim.height, /* height of the clock to be set on top the html file */
    flashname: '', /* set the flash name (place the file in the img folder)*/
    fallback: '', /* set the fallback image name (place the file in the img folder)*/
    trackingurl: 'https://www.rolex.com/fr?cmpid=dsp_Clock_operadeparis.fr_2019_rlx19017304', /* set the tracking url */
    leadingZeros: false,
    amPm: false, /* display AM/PM text */
    time24hours: true, /* display time in 24 hours format */
    showText: true, /* display texts and time */
    showTime: false, /* display time without city name, 'Your Time' text */
    showDay: false, /* show the weekday in text */
    globalXcenter: (dim.width / 2)-0.75,
    globalYcenter: (dim.height / 2)+2.5,
    globalXscale: dim.scale,
    globalYscale: dim.scale,
    handsFolder: handsFolder, // hands folder
    clocktimeAtEvent: false, //Tells whether we display the time at the event location, defined in listofdates.js or not
    countdownNumbersOnly: false, // Display only numbers in count
    showDefaultCity: false, // Show the default city if no configurable city is currently active
    dateList: Events, // List of date
    isCountdownClock: false,// Whether it is a countdown
    blockcontrollerVisible: false,
    showLocalOnly: true,
    isExported: false
};

(function($, document) {

    $(document).ready(function() {
        $('.container').rolexClock(clockSettings);
    });

}(jQuery, document));
