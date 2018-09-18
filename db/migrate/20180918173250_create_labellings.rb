class CreateLabellings < ActiveRecord::Migration[5.2]
  def change
    create_table :labellings do |t|
      t.integer :label_id, null:false
      t.integer :note_id, null:false
      t.timestamps
    end
  end
end
