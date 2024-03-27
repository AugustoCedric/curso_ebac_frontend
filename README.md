
Fiz da seguinte maneira:

# Cria a pasta e entra nela

mkdir C:\curso_ebac_frontend && cd C:\curso_ebac_frontend

# Inicia um novo repositório Git

git init

# Cria um arquivo com o nome completo

echo "nome" > nome.txt

# Adiciona o arquivo para ser versionado

git add .

# Realiza o commit inicial

git commit -m "initial commit"

# Renomeia a branch para exercicio_git

git branch -M boas_praticas_css

# Adiciona o repositório remoto

git remote add origin https://github.com/AugustoCedric/exercicios-ebac.git

# Realiza o push da branch atual para o repositório remoto

git push -u origin boas_praticas_css
