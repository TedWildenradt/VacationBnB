class AddTitleDescriptionToHomes < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :title, :string
    add_column :homes, :description, :text
  end
end
