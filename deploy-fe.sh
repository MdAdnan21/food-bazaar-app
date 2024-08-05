#!/bin/bash

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

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
