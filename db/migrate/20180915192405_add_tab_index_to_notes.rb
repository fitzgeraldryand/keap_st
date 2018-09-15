class AddTabIndexToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :tab_index, :integer
  end
end
