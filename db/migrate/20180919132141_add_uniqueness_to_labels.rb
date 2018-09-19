class AddUniquenessToLabels < ActiveRecord::Migration[5.2]
  def change
    add_index :labels, [:name, :creator_id], unique: true
  end
end
