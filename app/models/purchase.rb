class Purchase < ApplicationRecord
  validates :user_id, presence: true
  validates :book_id, presence: true, uniqueness: true

  belongs_to :user
  belongs_to :book
end
