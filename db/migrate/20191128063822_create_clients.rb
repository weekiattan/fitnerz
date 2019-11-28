class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.text :email
      t.integer :phone_number
      t.string :sex
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
