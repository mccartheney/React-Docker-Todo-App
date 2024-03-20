build :
	docker build -t react-todo .

run : 
	docker run --rm --name react-todo-container -p 8080:80 react-todo