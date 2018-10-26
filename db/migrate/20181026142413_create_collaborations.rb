class CreateCollaborations < ActiveRecord::Migration[5.2]
  def change
    create_table :collaborations do |t|
      t.integer :note_id, null:false
      t.integer :collaborator_id, null:false
      t.timestamps
    end
    add_index :collaborations, [:note_id, :collaborator_id], unique:true
  end
end
