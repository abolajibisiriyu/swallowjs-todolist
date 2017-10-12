var update_btn = $('#update-todo');

$('#update-todo').click(function(e) {
    e.preventDefault();
    console.log();
    var input = $('#todo');
    var todo = input.val().trim();
    var id = input.attr('data-id');

    if (todo) {
        update_btn.html('<span class="fa fa-spinner fa-spin"></span> Updating Todo...')
            .attr('disabled', true);
        updateTodo(id, todo);
    }
    return;
});

function updateTodo(id, name) {
    FirebaseService.updateData({
        path: '/todos/' + id,
        data: ({ name: name })
    }, function(data) {
        if (!data.error) {
            // success
            console.log(data);
            update_btn.html('<span class="fa fa-save"></span> Update')
                .attr('disabled', false);
        } else {
            // error
            console.log(data);
        }
    });
}