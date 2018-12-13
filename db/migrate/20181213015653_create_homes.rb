class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.integer :owner_id, null: false
      t.integer :num_guests, null: false
      t.integer :price, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :country, null: false
      t.string :type, null: false
      t.integer :bed_count, null: false
      t.integer :bathrooms, null: false
      t.integer :bedrooms, null: false

      t.timestamps
    end
    add_index :homes, :owner_id
    add_index :homes, :city
  end
end
