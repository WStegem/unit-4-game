window.onload = function() {
    $("#crystal1").click(game.add1);
    $("#crystal2").click(game.add2);
    $("#crystal3").click(game.add3);
    $("#crystal4").click(game.add4);
};

var game = {
    
    wins: 0,
    losses: 0,
    goal: 0,
    points: 0,
    rand: [],

    start: function(){
        game.goal = Math.floor(Math.random() * 101)+19
        game.points = 0
        game.rand = [Math.floor(Math.random() * 11)+1, Math.floor(Math.random() * 11)+1, Math.floor(Math.random()* 11)+1, Math.floor(Math.random() * 11)+1]
        $('#goal').html('<h3>Goal: '+game.goal+'</h3>')
        $('#points').html('<h3>Points: '+game.points+'</h3>')
        $('#win-tracker').html("<h3>Wins: "+game.wins+"</h3>")
        $('#win-tracker').append("<h3>Losses: "+game.losses+"</h3>")
    },
    add1: function(){
        game.points += game.rand[0]
        $('#points').html('<h3>Points: '+game.points+'</h3>')
        game.checkscore()
    },
    add2: function(){
        game.points += game.rand[1]
        $('#points').html('<h3>Points: '+game.points+'</h3>')
        game.checkscore()
    },
    add3: function(){
        game.points += game.rand[2]
        $('#points').html('<h3>Points: '+game.points+'</h3>')
        game.checkscore()
    },
    add4: function(){
        game.points += game.rand[3]
        $('#points').html('<h3>Points: '+game.points+'</h3>')
        game.checkscore()
    },
    checkscore: function(){
        if (game.points==game.goal)
            game.win()
        else if(game.points>game.goal)
            game.lose()
    },
    win: function(){
        game.wins++
        game.start()
    },
    lose: function(){
        game.losses++
        game.start()
    },

}

game.start()