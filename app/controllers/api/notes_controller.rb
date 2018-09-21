class Api::NotesController < ApplicationController
  def index
    if params[:label_id] == '-1'
      @notes = current_user.notes.order(tab_index: :desc)
    else
      @notes = Label.find(params[:label_id]).notes.where('author_id = ?', current_user.id).order(tab_index: :desc)
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
    params.require(:note).permit(:title,:body, :author_id, :color, :tab_index, :pinned, labellings_attributes: [:label_id])
  end
end
