class Api::CollaborationsController < ApplicationController
  def create
    @collaboration = Collaboration.new(collaboration_params)
    if @collaboration.save
      render :show
    else
      render json: @collaboration.errors.full_messages, status: 422
    end
  end

  def destroy
    @collaboration = Collaboration.find_by(note_id: params[:note_id], collaborator_id: params[:collaborator_id])
    @collaboration.destroy
    render :show
  end

  private

  def collaboration_params
    params.require(:collaboration).permit(:note_id, :collaborator_id)
  end
end
