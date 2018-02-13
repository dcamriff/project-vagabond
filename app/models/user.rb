class User < ApplicationRecord
  has_many :cities, :through => :posts
  has_many :posts, dependent: :destroy 
end
