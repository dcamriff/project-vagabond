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
  picture: "https://i.imgur.com/QKCVUFz.jpg?3"
  )

atlanta = City.create(
  name: "Atlanta", 
  description: "What a stunning southern destination.", 
  country: "United States", 
  picture: "http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jpg", 
  population: 5789700
  )
tokyo = City.create(
  name: "Tokyo", 
  description: "The largest metroplis in the world.", 
  country: "Japan", 
  picture: "https://i.imgur.com/zlKTkEj.jpg", 
  population: 9000000
  )
london = City.create(
  name: "London", 
  description: "Charming, historical, rainy city.", 
  country: "United Kingdom", 
  picture: "https://i.imgur.com/wDNv0QU.jpg", 
  population: 8600000
  )
sanFran = City.create(
  name: "San Francisco", 
  description: "The cultural, commercial and financial center of Northern California.", 
  country: "United States", 
  picture: "https://images.unsplash.com/photo-1502285745115-13e43e3faad4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=025ea9ff10220737ea011f6a9ef016d6&auto=format&fit=crop&w=2100&q=80", 
  population: 870900
  )
newYork = City.create(
  name: "New York", 
  description: "The city that never sleeps.", 
  country: "United States", 
  picture: "https://i.imgur.com/wDNv0QU.jpg", 
  population: 8600000
  )
mexicoCity = City.create(
  name: "Mexico City", 
  description: "Mexico City has more museums than any other in the world.", 
  country: "Mexico", 
  picture: "https://images.unsplash.com/photo-1509843878977-4ca33c81f6f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94df753ca7b55c5637ec25fe3f75e178&auto=format&fit=crop&w=2006&q=80", 
  population: 9000000
  )
amsterdam = City.create(
  name: "Amsterdam", 
  description: "I a city known for it's beautiful canals and thriving museum history.", 
  country: "Netherlands", 
  picture: "https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71160983b3af78d30b19751a9574ce4&auto=format&fit=crop&w=1594&q=80", 
  population: 8600000
  )
barcelona = City.create(
  name: "Barcelona", 
  description: "Barcelona, a Gothic and Modernist marvel on the Mediterranean Sea, is a city well known for its quirky, cosmopolitan, cool character.", 
  country: "Spain", 
  picture: "https://images.unsplash.com/34/a1mV1egnQwOqxZZZvhVo_street.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e173da8a590dd77cd8e16f499b894acd&auto=format&fit=crop&w=1650&q=80", 
  population: 8600000
  )
nairobi = City.create(
  name: "Nairobi", 
  description: "Kenya's exciting cosmopolitan city surrounded by natural beauty. ", 
  country: "Kenya", 
  picture: "https://images.unsplash.com/photo-1470114888332-5bcd36dd1940?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3f906a23ae24ae4be62101cfb8eaba5&auto=format&fit=crop&w=1650&q=80", 
  population: 8600000
  )
mumbai = City.create(
  name: "Mumbai", 
  description: "A bustling epicenter known for it's Bollywood films.", 
  country: "India", 
  picture: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=330f47db0730dfb2f0017d3b5eb1417d&auto=format&fit=crop&w=1650&q=80", 
  population: 12500000
  )
lisbon = City.create(
    name: "Lisbon", 
    description: "Charming, historic town on the coast of Portugal.", 
    country: "Portugal", 
    picture: "http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/portugal/porto/porto-portugal-small.jpg", 
    population: 545000
    )
saigon = City.create(
    name: "Ho Chi Minh City", 
    description: "A city rich in history and incredible food, it's still known to locals and tourists as Saigon.", 
    country: "Vietnam", 
    picture: "http://www.detouredasia.com/wp-content/uploads/2016/11/ho-chi-minh-city-saigon-cu-chi-tunnels.jpg", 
    population: 8600000
    )


post1 = Post.create(
  city: atlanta, 
  user: marco,
  picture: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9006289/JTP_4405.jpg",
  title: "Grafitti Town", 
  content: "This city has an amazing grafitti scene with some of the country's most talented street artists.", 
  tag: "grafitti"
  )
post2 = Post.create(
  city: atlanta, 
  user: ninti,
  picture: "https://beltlineorg-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/056-2016-Lantern-Parade-IMG_1742-atlanta-trails-500x333.jpg",
  title: "Beltline Lantern Parade", 
  content: "The annual Beltline lantern parade is incredible!", 
  tag: "lanterns"
  )
post3 = Post.create(
  city: atlanta, 
  user: ninti,
  picture: "https://upload.wikimedia.org/wikipedia/commons/4/40/Buford_Highway_Farmer%27s_Market_in_Doraville%2C_Georgia.jpg",
  title: "Buford Hwy", 
  content: "Buford Highway is amazing for the Asian markets and food scene.", 
  tag: "Buford Hwy"
  )