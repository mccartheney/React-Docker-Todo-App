build :
	docker build -t react-todo .

run : 
	docker run --rm --name react-todo-container -p 3000:3000 react-todo

build-run : build run