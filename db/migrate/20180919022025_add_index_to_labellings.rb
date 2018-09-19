class AddIndexToLabellings < ActiveRecord::Migration[5.2]
  def change
    add_index :labellings, [:note_id, :label_id], unique: true
  end
end
