class Client < ApplicationRecord
  belongs_to :trainer
  has_many :log
end
