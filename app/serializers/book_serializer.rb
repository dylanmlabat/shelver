class BookSerializer < ActiveModel::Serializer
  attributes :id, :purchase_id, :api_id, :title, :authors, :cover, :publisher, :publish_date, :page_count, :summary
end
