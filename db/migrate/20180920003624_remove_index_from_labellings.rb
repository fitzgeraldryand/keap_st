class RemoveIndexFromLabellings < ActiveRecord::Migration[5.2]
  def change
    remove_index :labellings, column: [:note_id, :label_id]
  end
end
