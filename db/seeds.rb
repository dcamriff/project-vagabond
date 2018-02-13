# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
City.destroy_all



ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end 

marco = User.create(
  username: "mrcdll", 
  firstname: "Marco", 
  lastname: "Dell'olio", 
  password: "Banana", 
  email: "delloliomarco@gmail.com", 
  picture: "https://i.imgur.com/V8Jxe3D.jpg"
  )
beth = User.create(
  username: "bethschoe", 
  firstname: "Beth", 
  lastname: "Schoenfeld", 
  password: "Banana", 
  email: "bethshoe03@gmail.com", 
  picture: "https://i.imgur.com/prnhAfX.jpg"
  )
ninti = User.create(
  username: "nincha", 
  firstname: "Ninti", 
  lastname: "Chance", 
  password: "Banana", 
  email: "ninchao@gmail.com", 
  picture: "https://i.imgur.com/QKCVUFz.jpg?3")


  
atlanta = City.create(
  name: "Atlanta", 
  description: "What a stunning southern destination.", 
  country: "United States", 
  picture: "http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jpg", 
  population: 20000
  )
tokyo = City.create(
  name: "Tokyo", 
  description: "The largest metroplis in the world", 
  country: "Japan", 
  picture: "http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jpg", 
  population: 20000
  )
london = City.create(
  name: "London", 
  description: "Charming, historical, rainy city.", 
  country: "United Kingdom", 
  picture: "https://i.imgur.com/wDNv0QU.jpg", 
  population: 2000
  )


post1 = Post.create(
  city: atlanta, 
  user: marco, 
  title: "Ugly City", 
  content: "This is an ugly city", 
  tag: "ugly"
  )
post2 = Post.create(
  city: london, 
  user: ninti, 
  title: "Nice City", 
  content: "This is an nice city", 
  tag: "nice"
  )