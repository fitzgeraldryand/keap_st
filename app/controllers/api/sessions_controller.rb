class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credential(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end

end
