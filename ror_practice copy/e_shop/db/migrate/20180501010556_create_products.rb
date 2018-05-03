class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :category
      t.string :photo_url
      t.integer :num_available
      t.string :size

      t.timestamps
    end
  end
end
