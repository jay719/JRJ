class EventsController < ApplicationController

  def index
    @events = Event.all
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def create
    Event.create(
      name: params[:name],
      event_date: params[:event_date]
    )
  end

end
