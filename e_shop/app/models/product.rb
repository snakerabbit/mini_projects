# == Schema Information
#
# Table name: products
#
#  id            :integer          not null, primary key
#  category      :string
#  photo_url     :string
#  num_available :integer
#  size          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Product < ApplicationRecord
  
end
