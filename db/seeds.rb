# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
Product.delete_all
Product.create!(title: 'DOUBLE-BREASTED FROCK COAT WITH FLAP POCKETS',
  description:
    %{<p>Long sleeve frock coat with a shawl collar. Featuring front flap pockets and a double-breasted front with metal buttons.</p>},
  image_url: 'frock-coat.webp',    
  price: 45.00)

Product.create!(title: 'STRIPED POPLIN SHIRT',
  description:
    %{<p>Short sleeve cropped shirt with a regular collar. Featuring a patch pocket on the front and darts on the back. Button-up front.</p>},
  image_url: 'poplin-shirt.webp',
  price: 19.95)

Product.create!(title: 'HIGH-RISE SLIM FIT JEANS WITH BUTTONS',
  description:
    %{<p>Faded-effect high-waist straight fit jeans. Featuring a five-pocket design, ripped detailing on the front and fastening at the front with metal</p>},
  image_url: 'slim-fit-jeans.webp',
  price: 29.95)

  Product.create!(title: 'HI-RISE HOT PANT SHORTS',
  description:
    %{<p>High-waist shorts with a five-pocket design, frayed hems and zip fly and metal top button fastening.</p>},
  image_url: 'hot-pant-shorts.webp',
  price: 19.95)