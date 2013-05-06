mongoimport --port 27071 --db openbbh --collection transactions --file ./data/transactions.export
mongoimport --port 27071 --db openbbh --collection accounts --file ./data/accounts.export
mongoimport --port 27071 --db openbbh --collection reportschema --file ./data/reportschema.export
mongoimport --port 27071 --db openbbh --collection securities --file ./data/securities.export
