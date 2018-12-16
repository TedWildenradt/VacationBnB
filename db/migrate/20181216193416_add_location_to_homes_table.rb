class AddLocationToHomesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :lat, :float
    add_column :homes, :lng, :float
  end
end
