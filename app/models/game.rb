class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :players_games
  has_many :players, through: :players_games
  belongs_to :winner, :class_name => "Player"

  def time
    self.updated_at - self.created_at
  end
end
