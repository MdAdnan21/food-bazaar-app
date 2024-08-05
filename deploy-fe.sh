#!/bin/bash

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

git reset --hard
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}Git reset successful${NC}\n"
else
    echo -e "\n${RED}Git reset failed${NC}\n"
    exit 1
fi

# Pull the latest changes from GitHub
git pull 
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}Git pull successful${NC}\n"
else
    echo -e "\n${RED}Git pull failed${NC}\n"
    exit 1
fi

# Install npm dependencies
npm install
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}npm install successful${NC}\n"
else
    echo -e "\n${RED}npm install failed${NC}\n"
    exit 1
fi

# Run npm build
npm run build
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}npm run build successful${NC}\n"
else
    echo -e "\n${RED}npm run build failed${NC}\n"
    exit 1
fi

# Copy build files to the appropriate directory
sudo cp -R dist/ /var/food-app/vhosts/frontend/
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}Copying build files successful${NC}\n"
else
    echo -e "\n${RED}Copying build files failed${NC}\n"
    exit 1
fi

# Restart Nginx
sudo systemctl restart nginx
if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}Nginx restart successful${NC}\n"
else
    echo -e "\n${RED}Nginx restart failed${NC}\n"
    exit 1
fi

# Print deploy success message
echo -e "\n${GREEN}******************${NC}"
echo -e "${GREEN}**Deploy Successful**${NC}"
echo -e "${GREEN}******************${NC}\n"
