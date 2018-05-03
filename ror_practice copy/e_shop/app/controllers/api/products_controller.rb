class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    if @products
      render :index
    else
      render json: []
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      render json: {}
  end

  def show

  end

  def destroy

  end

  def product_params
    params.require(:product).permit(:category, :photo_url, :num_available, :size)
  end
end
