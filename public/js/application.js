
function update_player_position(player) {
  var row = $("#"+ player + "_track");
  var newposition = row.find('.active').next();
  row.find('td').removeClass('active');
  newposition.addClass('active');
  if ($(row).find('td:last-child').hasClass('active')) {
    var winner = $(row).data('name');
    var game = $(row).closest('table').data('game');
    var data = {winner: winner, game: game};
    $(document).unbind("keyup");
    $.post('/finished', data, function(response) {
      $('.game').append(response);
    });
  }
  };

function play(){
  $(document).keyup(function(key){
    if (key.keyCode == 65) {
      update_player_position('player1');
    }
    else if (key.keyCode == 76) {
      update_player_position('player2');
    }
  });
};


// // Players
// function Player(name){
//   this.name = name;
// };
// // Game
// function Game(player1, player2){
//   this.players = [player1, player2];
// };

// game.prototype = {
//   start: function(){},
//   addPlayers: function(player){
//     this.players.push(player);
//   },

//   render: function(){
//     this.players.forEach(function(player){
//       new PlayerRowView(){


//       }.render()
//     });
//   }

// }

function PlayerRowView(player) {
  render: return "<tr><td></td></tr>"
}

class Person
  def initialize(args)
    ....code....
  end

  def other_method
  end
end

function Person() {
  //def initialize
}

Person.prototype.otherMethod = function(){...};



$(document).ready(function() {

  // driver code
  $('#player-setup').on('submit', 'form', function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    var data = $(this).serialize();
    $.post(url, data, function(response) {
      if ($(response).hasClass('new-players')) {
        $('#player-setup').find('form').replaceWith(response);
      }
      else {
        $('#player-setup').hide();
        $('.game').replaceWith(response);
        play();
      }
    });
  });
});


