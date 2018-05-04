class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    if @products
      render :index
    else
      render json: []
    end
  end

  def create
    @product = Product.create(product_params)
    if @product.save
      render :show
    else
      render json: {}
    end
  end

  def show
    @product = Product.find(params[:id])
    if @product
      render :show
    else
      render json: {}
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update_attributes(product_params)
      render :show
    else
      render json: {}
    end
  end


  def product_params
    params.permit(:category, :photo_url, :num_available, :size, :id)
  end
end
