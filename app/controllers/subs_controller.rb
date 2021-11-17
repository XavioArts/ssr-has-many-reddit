class SubsController < ApplicationController
  def index
    @subs = Sub.all
    render component: "Subs", props: {subs: @subs}
  end

  def show
  end

  def new
  end

  def edit
  end
end
