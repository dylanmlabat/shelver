class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.integer :author_id
      t.string :title
      t.string :cover
      t.integer :isbn
      t.integer :page_count

      t.timestamps
    end
  end
end
