class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    User.create(
      name: params[:name],
      favorite_event_type: params[:favorite_event_type],
      event: event
    )
  end

  def update
    @user = User.find(params[:id])
    @user.update(
      favorite_event_type: params[:favorite_event_type],
      event: params[:event]
    )
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end
end