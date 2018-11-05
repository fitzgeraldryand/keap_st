class Api::NotesController < ApplicationController
  def index
    #need to handle collaborated notes
    if params[:label_id]
      if params[:label_id] == '-1'
        user_notes = current_user.notes.order(tab_index: :desc)
        collaborator_notes = current_user.collaborated_notes.order(tab_index: :desc)
        @notes = user_notes + collaborator_notes
      else
        @notes = current_user.labels.find(params[:label_id]).notes.order(tab_index: :desc)
      end
    elsif params[:text]
      if params[:text] == ""
        user_notes = current_user.notes.order(tab_index: :desc)
        collaborator_notes = current_user.collaborated_notes.order(tab_index: :desc)
        @notes = user_notes + collaborator_notes
      else
        user_notes = current_user.notes
        collaborator_notes = current_user.collaborated_notes
        combined = user_notes + collaborator_notes
        @notes = combined.where("title ILIKE '%#{params[:text]}%' OR body ILIKE '%#{params[:text]}%'").order(tab_index: :desc)
      end
    end
    render :index
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render :show
  end

  def note_params
    params.require(:note).permit(:title,:body, :author_id, :color, :tab_index, :pinned, labellings_attributes: [:label_id], collaborations_attributes: [:collaborator_id])
  end
end
