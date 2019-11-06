class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :book
  has_one :author, :through => :book
end
