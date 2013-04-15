mongoexport --db openbbh --collection transactions --out ./data/transactions.export
mongoexport --db openbbh --collection accounts --out ./data/accounts.export
mongoexport --db openbbh --collection reportschema --out ./data/reportschema.export
mongoexport --db openbbh --collection securities --out ./data/securities.export

