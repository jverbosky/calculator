require 'sinatra'
require 'sinatra/reloader' if development?  # automatically reload app.rb on save via sinatra-contrib gem
require_relative 'calculator.rb'  # load Ruby script (same directory)

get '/' do  # route to load the Calculator Start page
  erb :calculator_start
end

post '/calculate' do  # route that accesses input from form's post > action
  num = params[:digit]  # params used to access input from post > action (name="ISBN")
  erb :calculator_results  # load isbn_status.erb file with ISBN check results output
end