require 'sinatra'
require 'sinatra/reloader' if development?  # automatically reload app.rb on save via sinatra-contrib gem
require_relative 'calculator.rb'  # load Ruby script (same directory)

get '/' do  # route to load the Calculator Start page
  erb :start
end

post '/get_num_2' do  # route that accesses input from form's post > action
  user_input = params[:userInput]  # params used to access input from post > action (name="ISBN")
  # "User input type: #{user_input.class}"  # string
  "User input: #{user_input}"
  # erb :calculate  # load isbn_status.erb file with ISBN check results output
end

# post '/calculate_results' do
#   num = params[:num_2]
#   erb :results
# end