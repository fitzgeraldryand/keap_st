class Api::LabelsController < ApplicationController
  def index
    @labels = current_user.labels
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

  def update
    @label = Label.find(params[:id])
    if @label.update(label_params)
      render :show
    else
      render json: @label.errors.full_messages, status: 422
    end
  end

  private

  def label_params
    params.require(:label).permit(:name, :creator_id)
  end
end
