#!/bin/bash
# sif-hucr/clone-repos.sh

declare -a repos=(
  "web-identity" 
    "web-fis"
)

for repo in "${repos[@]}"
do 
	  echo "$repo"
	    git clone ssh://[ssh-key]@git-codecommit.us-west-2.amazonaws.com/v1/repos/$repo.git
    done
