/**
 * Required -- path.js 'Path={version:"0.8.4"}'
 * @pathLink   https://github.com/mtrpcic/pathjs
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * different URLs.
 *
 * SwallowJs(tm) : SwallowJs Framework (http://docs.swallow.js)
 *
 * For full copyright and license information, please see the LICENSE.txt
 *
 * @link          http://docs.swallow.js SwallowJs(tm) Project
 * @package       routes.js
 * @since         SwallowJs(tm) v 0.2.9
 */

/**
 * Declare parent identifier here
 * @type {any}
 */
var default_container = $('#default_container');


/**
 * *******************
 * add route below
 * *******************
 *
 * index.html
 * landing page. (This is the first page you see)
 */
Path.map("#/").to(function() {

    // FirebaseService.findAll('todos', function() {});
    // fetchTodos();

    renderView('home', default_container);
}).enter(clearPanel);

Path.map("#/about").to(function() {
    renderView('about', default_container);
}).enter(clearPanel);

Path.map('#/todos/:id').to(function() {
    var id = this.params['id'];
    // console.log(id);
    swallowLoading({ element: 'default_container', show: true });
    FirebaseService.findOne({
        path: 'todos/' + id,
    }, function(response) {
        if (!response.error) {
            // success
            console.log(response);
            renderView('todo', default_container, response);
        } else {
            // error
            console.log(response);
        }
    });
}).enter(clearPanel);

// Path.map("#/users/:user_id/:user_family").to(function () {
//     var data = {
//         user_id: this.params["user_id"],
//         user_family: this.params["user_family"],
//     };
//     renderView('users', swallowJsContainer, data);
// }).enter(clearPanel);

/**
 * This is a route with optional components.  Optional components in a route are contained
 *  within brackets.  The route below will match both "#/about" and "#/about/author".
 */
// Path.map("#/about(/author)").to(function(){
//
// });