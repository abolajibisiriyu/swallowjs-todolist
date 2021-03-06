/**
 * SwallowJs(tm) : SwallowJs Framework (http://docs.swallow.js)
 *
 * For full copyright and license information, please see the LICENSE.txt
 *
 * @link          http://docs.swallow.js SwallowJs(tm) Project
 * @package       component.utility.bootstrap.js
 * @since         SwallowJs(tm) v 0.2.9
 */

var SwallowJsCONFIG;

SwallowJsCONFIG = (function () {
    var SwallowJs = {
        'app_version': 'v2.1',
    };

    var constants = {
        // define constants here
        'true': '1',
    };

    return {
        private: function (name) {
            return SwallowJs[name];
        },
        constants: function () {
            return constants[name];
        }
    };
})();


/**
 * Current app version
 */
var swallowVersion = SwallowJsCONFIG.private('app_version');