Команда для запуска плейбука:
ansible-playbook -i hosts setup.yaml 
Если чего не заработает, то следует добавить ключик: 
--ask-become-pass
или
-K (сокращенно)