if [ -d "./.env" ]; then rm -rf "./.env"; fi

touch .env

echo "REACT_APP_VIACEP_URL=$REACT_APP_VIACEP_URL" >> .env
echo "REACT_APP_IBGE_API_URL=$REACT_APP_IBGE_API_URL" >> .env
echo "REACT_APP_USUARIOS_API_URL=$REACT_APP_USUARIOS_API_URL" >> .env
echo "REACT_APP_BRAVE_API_URL=$REACT_APP_BRAVE_API_URL" >> .env
echo "REACT_APP_BRAVE_CNPJ_ECV=$REACT_APP_BRAVE_CNPJ_ECV" >> .env
echo "REACT_APP_PROJECT=$REACT_APP_PROJECT" >> .env