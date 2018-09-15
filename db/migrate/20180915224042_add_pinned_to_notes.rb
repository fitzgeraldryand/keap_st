class AddPinnedToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :pinned, :boolean
  end
end
