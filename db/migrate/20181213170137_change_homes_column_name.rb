class ChangeHomesColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :homes, :type, :home_type
  end
end
