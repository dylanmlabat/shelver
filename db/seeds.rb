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
      api_id: "Xfze51E7TEoC",
      title: "Catch-22",
      authors: ["Joseph Heller"],
      cover: "http://books.google.com/books/content?id=Xfze51E7TEoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      publisher: "Simon and Schuster",
      publish_date: "1999-10-05",
      page_count: 415,
      summary: "Presents the contemporary classic depicting the struggles of a U.S. airman attempting to survive the lunacy and depravity of a World War II base"
    },
    {
      api_id: "WiUuWn6sGqwC",
      title: "Mother Night",
      authors: ["Kurt Vonnegut"],
      cover: "http://books.google.com/books/content?id=WiUuWn6sGqwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      publisher: "Dial Press",
      publish_date: "2009-08-11",
      page_count: 288,
      summary: "“Vonnegut is George Orwell, Dr. Caligari and Flash Gordon compounded into one writer . . . a zany but moral mad scientist.”—Time Mother Night is a daring challenge to our moral sense. American Howard W. Campbell, Jr., a spy during World War II, is now on trial in Israel as a Nazi war criminal. But is he really guilty? In this brilliant book rife with true gallows humor, Vonnegut turns black and white into a chilling shade of gray with a verdict that will haunt us all. “A great artist.”—Cincinnati Enquirer “A shaking up in the kaleidoscope of laughter . . . Reading Vonnegut is addictive!”—Commonweal"
    }
  ]
)
