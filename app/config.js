/**
 * SwallowJs(tm) : SwallowJs Framework (http://docs.swallow.js)
 *
 * For full copyright and license information, please see the LICENSE.txt
 *
 * @link          http://docs.swallow.js SwallowJs(tm) Project
 * @package       config.js
 * @since         SwallowJs(tm) v 0.2.9
 */

/**
 * !Warning ## Most not be a string and most not contain [space] ##
 * @type {{private, viewTemplates, firebaseConfig, constants}}
 */

var CONFIG = (function() {
    var SwallowJs = {
        'main_container': 'swallow',
        'remove_swallow_css': false,
        'beta': true,
        'loading': false,
        'debug': false
    };

    // Templates
    var views = {
        'home': 'views/home.html',
        // 'page_loading': 'views/page_loading.html',
        'todo': 'views/todo.html',
        '404': 'views/error/404.html',
    };

    var constants = {
        // define constants here
        'true': '1',
    };

    var firebase_config = {
        apiKey: "AIzaSyD2V1LPW-OOu0xDui3rDnpQKlFlAnQxm00",
        authDomain: "my-first-app-f56db.firebaseapp.com",
        databaseURL: "https://my-first-app-f56db.firebaseio.com",
        projectId: "my-first-app-f56db",
        storageBucket: "my-first-app-f56db.appspot.com",
        messagingSenderId: "698755993461"
    };

    return {
        private: function(name) {
            return SwallowJs[name];
        },
        viewTemplates: function(name) {
            return views[name];
        },
        firebaseConfig: function() {
            return firebase_config;
        },
        constants: function(name) {
            return constants[name];
        }
    };
})();

/**
 * Default SwallowJs main container
 * Please do not remove line 65. The system needs to work properly
 */
var swallowJsContainer = $('#' + CONFIG.private('main_container'));

/**
 *
 * @type {any}
 */
var debug = CONFIG.private('debug');


/**
 * Default SwallowJs firebaseConfig
 */
var firebaseConfig = CONFIG.firebaseConfig('firebase_config');