$(document).on('click', '#add-todo', function(e) {
    e.preventDefault();
    var todo = $('#todo').val().trim();
    if (todo) {

        toggleLoading(true);

        $('#todo').val('');

        addTodo(todo);
    }
    return;
});

$(document).on('click', '.delete-todo', function(e) {
    e.preventDefault();
    deleteTodo($(this));
});

function addTodo(name) {
    data = {
        name: name,
        time: Date.now()
    }
    FirebaseService.saveData({
        path: '/todos',
        data: (data)
    }, function(data) {
        if (!data.error) {
            // success
            console.log(data);
            toggleLoading(false);
        } else {
            // error
            console.log(data);
            toggleLoading(false);
        }
    });
}


function deleteTodo(el) {
    var id = el.parent().attr('data-id');
    // console.log(id);
    // el.parent().remove();
    FirebaseService.deleteData({
        path: '/todos/' + id
    }, function(response) {
        if (!response.error) {
            // success
            console.log(response);
        } else {
            // error
            console.log(response);
        }
    });
    // firebase.database().ref('todos/' + id).remove();

}

function toggleLoading(state = null) {

    var loadingButton = $('#add-todo');
    switch (state) {
        case true:
            loadingButton.html('<span class="fa fa-spinner fa-spin"></span> Adding Todo...')
                .attr('disabled', true);
            break;
        case false:
            loadingButton.html('<span class="fa fa-plus"></span> Add')
                .attr('disabled', false);
            break;
        default:
            loadingButton.html('<span class="fa fa-spinner fa-spin"></span> Fetching Todos...')
                .attr('disabled', true);
            break;
    }
}

function fetchTodos() {
    toggleLoading();
    FirebaseService.findAll({
        path: '/todos'
    }, function(response) {
        if (!response.error) {
            // success
            includeElement('todoelement', 'todo-element', response);
            toggleLoading(false);
        } else {
            // error
            console.log(response);
        }
    });
}