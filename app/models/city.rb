class City < ApplicationRecord
  has_many :users, :through => :posts
  has_many :posts, dependent: :destroy 
end
