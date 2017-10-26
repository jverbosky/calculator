require 'sinatra'

require_relative 'calculator.rb'  # load Ruby script (same directory)

get '/' do
  erb :calculate
end

post '/answer' do
  user_input = params[:userInput]
  answer = get_result(user_input)
  erb :results, locals: {answer: answer, user_input: user_input}
end