@echo off

%windir%\system32\inetsrv\appcmd stop sites "scouts"
cmd /c ng build --prod

rem --base-href=/app/
%windir%\system32\inetsrv\appcmd start sites "scouts"

time /t
echo completed...
