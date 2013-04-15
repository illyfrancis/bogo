mongoimport --db openbbh --collection transactions --file ./data/transactions.export
mongoimport --db openbbh --collection accounts --file ./data/accounts.export
mongoimport --db openbbh --collection reportschema --file ./data/reportschema.export
mongoimport --db openbbh --collection securities --file ./data/securities.export
