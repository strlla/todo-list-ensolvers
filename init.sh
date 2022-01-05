function START_APP() {
	mysql -u "$DATABASE_USER" --password="$DATABASE_PASSWORD" --port="$DATABASE_PORT"  --execute="CREATE DATABASE IF NOT EXISTS $DATABASE_NAME;"

	cd backend
	npm install
	npm run start
}

function SAVE_CONFIG() {
	echo "DATABASE_USER=$DATABASE_USER" >> "./backend/.env"
	echo "DATABASE_PASSWORD=$DATABASE_PASSWORD" >> "./backend/.env"
	echo "DATABASE_NAME=$DATABASE_NAME" >> "./backend/.env"
	echo "DATABASE_PORT=$DATABASE_PORT" >> "./backend/.env"
	echo "DATABASE_HOST=$DATABASE_HOST" >> "./backend/.env"
}

# DATABASE DATA
DATABASE_NAME="todo_db"
DATABASE_PORT=3300
DATABASE_HOST="localhost"
read -p "Please, enter your MySQL username: " DATABASE_USER
read -p "Please, enter your MySQL password: " DATABASE_PASSWORD

SAVE_CONFIG DATABASE_USER DATABASE_PASSWORD DATABASE_NAME DATABASE_PORT DATABASE_HOST

START_APP DATABASE_NAME DATABASE_USER DATABASE_PASSWORD DATABASE_HOST