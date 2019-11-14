class BookSerializer < ActiveModel::Serializer
  attributes :id, :api_id, :title, :authors, :cover, :publisher, :publish_date, :page_count, :summary
end
