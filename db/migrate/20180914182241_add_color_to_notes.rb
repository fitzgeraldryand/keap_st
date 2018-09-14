class AddColorToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :color, :string
  end
end
