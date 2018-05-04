@products.each do |product|
  json.set! product.id do
    json.extract! product, :category, :photo_url, :num_available, :size, :id
  end
end
