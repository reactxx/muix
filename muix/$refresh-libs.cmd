set root=D:\muix\muix\
set url=https://github.com/mui-x/muix/blob/master/types/

d:

cd %root%\jspm_packages
rmdir npm /s /q
cd %root%
call jspm install 

cd %root%

call npm install %url%expo/types-expo-0.1.1.tgz?raw=true %url%react/types-react-0.1.1.tgz?raw=true %url%react-native/types-react-native-0.1.1.tgz?raw=true 
call npm update muix-icons 

cd %root%node_modules\@types
rmdir node /s /q

call %root%$compile
