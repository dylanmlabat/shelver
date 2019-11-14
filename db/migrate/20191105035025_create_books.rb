class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :api_id
      t.string :title
      t.text :authors
      t.string :cover
      t.string :publisher
      t.string :publish_date
      t.integer :page_count
      t.string :summary

      t.timestamps
    end
  end
end
