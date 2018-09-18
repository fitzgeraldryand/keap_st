class Api::LabelsController < ApplicationController
  def index
    @labels = Label.all
    render :index
  end

  def create
    @label = Label.new(label_params)
    if @label.save
      render :show
    else
      render json: @label.errors.full_messages, status: 422
    end
  end

  def destroy
    @label = Label.find(params[:id])
    @label.destroy
    render :show
  end

  private

  def label_params
    params.require(:label).permit(:name)
  end
end
