# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

books = Book.create(
  [
    {
      author: "Joseph Heller",
      title: "Catch-22",
      isbn: 9780684833392,
      page_count: 453
    },
    {
      author: "Kurt Vonnegut",
      title: "Mother Night",
      isbn: 9780385334143,
      page_count: 282
    }
  ]
)
