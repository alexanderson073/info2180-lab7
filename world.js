function getResult(param) {
    // jquery $.get
    $.get('world.php', param, addResult);
}

function addResult(results) {
    document.getElementById('result').innerHTML = results;
}

document.addEventListener('DOMContentLoaded', function() {

    // jquery .before
    $('#lookup').before('<input type="checkbox" name="all" value="true" id="allResult"> All ');

    document.getElementById('lookup').addEventListener('click', function() {
        var country = document.getElementById('country').value;
        var all = document.getElementById('allResult').checked;
        var param;

        if ( all )
            param = {all: true};
        else
            param = {country: country};

        getResult(param);
    });
});