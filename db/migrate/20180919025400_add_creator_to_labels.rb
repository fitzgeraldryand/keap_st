class AddCreatorToLabels < ActiveRecord::Migration[5.2]
  def change
    add_column :labels, :creator_id, :string
  end
end
