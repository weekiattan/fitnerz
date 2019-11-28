class AddTrainerNameToTrainer < ActiveRecord::Migration[6.0]
  def change
    add_column :trainers, :trainer_name, :string
  end
end
