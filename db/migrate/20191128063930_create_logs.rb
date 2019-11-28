class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.integer :height
      t.integer :weight
      t.string :medical_condition
      t.string :program
      t.string :goals_needs
      t.text :comment
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
