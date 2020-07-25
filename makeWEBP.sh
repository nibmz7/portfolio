#!/bin/bash
DIR="$1"
for file in "$DIR"/assets/png/*
do    
  name=$(basename "$file")
  if [[ $name == *.png ]]; then
    cwebp -q 60 "$DIR/assets/png/$name" -o "$DIR/assets/webp/${name%%.*}".webp
    echo "converted ${name}"
    fi
done
