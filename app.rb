require 'sinatra'
require 'sinatra/reloader' if development?  # automatically reload app.rb on save via sinatra-contrib gem
require_relative 'calculator.rb'  # load Ruby script (same directory)

get '/' do
  erb :calculate
end

post '/answer' do
  user_input = params[:userInput]
  answer = get_result(user_input)
  erb :results, locals: {answer: answer}
end