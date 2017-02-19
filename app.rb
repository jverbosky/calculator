require 'sinatra'
require 'sinatra/reloader' if development?  # automatically reload app.rb on save via sinatra-contrib gem
require_relative 'calculator.rb'  # load Ruby script (same directory)

get '/' do  # route to load the Calculator Start page
  erb :calculate
end

post '/answer' do  # route that accesses input from form's post > action
  user_input = params[:userInput]  # params used to access input from post > action (name="ISBN")
  # "User input type: #{user_input.class}"  # string
  # "#{user_input}"
  answer = get_result(user_input)
  # "The answer is: #{answer}."
  erb :results, locals: {answer: answer}
end

# post '/calculate_results' do
#   num = params[:num_2]
#   erb :results
# end