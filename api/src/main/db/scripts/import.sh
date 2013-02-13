echo "Importing" $1
mongoimport --db openbbh --collection $1 --jsonArray --type json --file ../data/$1.json