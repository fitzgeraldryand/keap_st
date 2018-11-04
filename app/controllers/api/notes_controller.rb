class Api::NotesController < ApplicationController
  def index
    #need to handle collaborated notes
    if params[:label_id]
      if params[:label_id] == '-1'
        @notes = current_user.notes.order(tab_index: :desc)
      else
        @notes = Label.find(params[:label_id]).notes.where('author_id = ?', current_user.id).order(tab_index: :desc)
      end
    elsif params[:text]
      if params[:text] == ""
        @notes = current_user.notes.order(tab_index: :desc)
      else
        @notes = current_user.notes.where("title ILIKE '%#{params[:text]}%' OR body ILIKE '%#{params[:text]}%'").order(tab_index: :desc)
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
