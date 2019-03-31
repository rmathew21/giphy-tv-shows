var queries = ["Fresh Prince of Bel Air", "The Office", "Game of Thrones", "Friends"];

function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < queries.length; i++) {

        var a = $("<button>");

        a.addClass("tv");
        a.attr("data-name", queries[i]);
        a.text(queries[i]);

        $("#buttons-view").append(a);
        console.log(a);
    }
}

$("#add-tv").on("click", function(event) {
    event.preventDefault();

    var show = $("#tv-input").val().trim();
    queries.push(show);

    renderButtons();
});

renderButtons();