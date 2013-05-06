@echo off
rem --- start demo mongodb ---
set DB_PORT=27071
start D:\Mongo\mongodb-win32-i386-2.0.8\bin\startupdemo.bat %DB_PORT%

rem --- start tomcat on 9091 ---
mvn tomcat7:run -Dweb-port=9091 -Ddb-port=%DB_PORT% -DwarDirectory=D:\Repository\git\bogo\bogosuh.0.5.1