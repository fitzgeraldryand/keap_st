class Api::LabellingsController < ApplicationController
  def create
    @labelling = Labelling.new(labelling_params)
    if @labelling.save
      render :show
    else
      render json: @labelling.errors.full_messages, status: 422
    end
  end

  def destroy
    @labelling = Labelling.find_by(params[:note_id, :label_id])
    @labelling.destroy
    render :show
  end

  private

  def labelling_params
    params.require(:labelling).permit(:note_id, :label_id)
  end
end
